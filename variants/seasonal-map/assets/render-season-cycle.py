from argparse import ArgumentParser
from math import cos, pi, sin, tau
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageOps

SIZE = (384, 346)
SCALE = 3
CANVAS = tuple(value * SCALE for value in SIZE)
STEP_MS = 80
HOLD_MS = 2000
FADE_MS = 800
SEASONS = ('winter', 'spring', 'summer', 'autumn')
SOURCE_DIR = Path(__file__).resolve().parent / 'seasons'
RUNTIME_DIR = SOURCE_DIR.parents[3] / 'dist' / 'seasonal-assets'


def source_image(season):
    with Image.open(SOURCE_DIR / f'{season}.png') as source:
        return ImageOps.fit(source.convert('RGB'), SIZE, Image.Resampling.LANCZOS)


def water_mask():
    mask = Image.new('L', SIZE)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((152, 48, 174, 56), fill=255)
    draw.polygon([(0, 96), (13, 98), (30, 100), (39, 101), (31, 103),
                  (20, 104), (12, 109), (4, 111), (0, 115)], fill=255)
    return mask


WATER = water_mask()


def ripple_points(x, y, half_width):
    return [((x + fraction * half_width) * SCALE, (y + .65 * (1 - fraction ** 2)) * SCALE)
            for fraction in (-1, -.5, 0, .5, 1)]


def sunlight(time):
    image = Image.new('RGBA', CANVAS)
    draw = ImageDraw.Draw(image)
    # Coordinates on the summer map for the park pond and the lower inlet of the canal
    ripples = (
        (159, 50.0, 7.4, 1.38, .07), (165, 52.0, 8.4, 1.76, .53),
        (162, 54.0, 5.8, 1.49, .81), (167, 49.4, 4.8, 1.91, .17),
        (8, 100.8, 8.5, 1.77, .42), (15, 103.3, 8.1, 1.51, .09),
        (6, 108.0, 6.1, 1.90, .72), (24, 100.8, 7.4, 1.66, .64),
    )
    for x, y, width, period, seed in ripples:
        age = (time / period + seed) % 1
        opacity = sin(pi * age) ** 2
        center = x + (age - .5) * 10
        line_y = y + (age - .5) * 2.6
        half = width * (.32 + .38 * age)
        draw.line(ripple_points(center, line_y, half + 1.8), fill=(103, 210, 244, round(112 * opacity)),
                  width=round(2.1 * SCALE))
        draw.line(ripple_points(center, line_y, half), fill=(218, 246, 253, round(217 * opacity)), width=SCALE)
        draw.line(ripple_points(center + .9, line_y, half * .37), fill=(251, 254, 255, round(236 * opacity)), width=SCALE)
    layer = image.resize(SIZE, Image.Resampling.LANCZOS)
    layer.putalpha(ImageChops.multiply(layer.getchannel('A'), WATER))
    return layer


def composite(base, layer):
    return Image.alpha_composite(base.convert('RGBA'), layer).convert('RGB')


def encode(output, frames, durations):
    frames[0].save(output, 'WEBP', save_all=True, append_images=frames[1:], duration=durations,
                   loop=0, quality=83, method=6, minimize_size=True)


def polygon(draw, points, x, y, radius, angle, fill):
    horizontal, vertical = cos(angle), sin(angle)
    draw.polygon([((x + radius * (px * horizontal - py * vertical)) * SCALE,
                   (y + radius * (px * vertical + py * horizontal)) * SCALE)
                  for px, py in points], fill=fill)


PETAL = [(-1, -.08), (-.7, -.58), (.08, -.7), (.64, -.56), (1, -.15),
         (.84, .2), (.13, .55), (-.6, .5)]
PETAL_HIGHLIGHT = [(-.77, -.13), (-.5, -.52), (.24, -.52), (.8, -.21), (.02, -.19)]
PETAL_STARTS = [
    (27, 111, .54, 2.25), (41, 107, .14, 2.80), (59, 93, .81, 2.50),
    (55, 105, .40, 2.70), (78, 80, .02, 2.35), (85, 85, .60, 2.60),
    (99, 70, .31, 2.75), (113, 59, .11, 2.40), (127, 56, .78, 2.50),
    (145, 43, .47, 2.20), (131, 67, .26, 2.80), (67, 126, .72, 2.30),
]


def petals(time):
    image = Image.new('RGBA', CANVAS)
    draw = ImageDraw.Draw(image)
    for index, (x, y, seed, period) in enumerate(PETAL_STARTS):
        age = (time / period + seed) % 1
        opacity = sin(pi * age) ** .8
        x += 23 * age + 2.1 * sin(tau * age + seed * tau)
        y += 8 * age - 5.5 * sin(pi * age) + 2.4 * sin(tau * age)
        angle = -.28 + .82 * sin(tau * age + seed * tau)
        radius = 1.9 + .22 * (index % 4)
        polygon(draw, PETAL, x, y, radius, angle, (239, 139, 183, round(230 * opacity)))
        polygon(draw, PETAL_HIGHLIGHT, x, y, radius, angle, (255, 222, 236, round(238 * opacity)))
    return image.resize(SIZE, Image.Resampling.LANCZOS)


LEAF = [(-1, -.03), (-.69, -.34), (-.34, -.57), (-.06, -.44), (.32, -.65),
        (.85, -.26), (1, -.06), (.65, .12), (.36, .58), (.05, .38), (-.29, .52), (-.65, .29)]
LEAF_VEIN = [(-.79, 0), (.72, -.13), (.53, .03), (-.62, .12)]
LEAF_COLORS = [(245, 169, 44), (216, 104, 42), (255, 188, 71), (214, 125, 44)]
LEAF_STARTS = [
    (29, 126, .07, 1.80), (35, 120, .43, 2.13), (58, 104, .19, 1.83),
    (78, 93, .77, 2.17), (84, 96, .34, 1.63), (107, 78, .05, 1.78),
    (120, 72, .62, 2.05), (124, 78, .28, 1.72), (155, 109, .88, 1.93),
    (172, 118, .38, 2.16), (196, 125, .58, 1.79), (227, 143, .12, 1.66),
]


def leaves(time):
    image = Image.new('RGBA', CANVAS)
    draw = ImageDraw.Draw(image)
    for index, (x, y, seed, period) in enumerate(LEAF_STARTS):
        age = (time / period + seed) % 1
        opacity = sin(pi * age) ** .72
        gust = age + .11 * sin(tau * age)
        x += 58 * gust + 3.9 * sin(tau * age * 3 + seed)
        y += 20 * age + 6.9 * sin(tau * age * 2 + seed * tau)
        angle = tau * (2.15 * age + seed)
        radius = 2.3 + .26 * (index % 5)
        color = LEAF_COLORS[index % len(LEAF_COLORS)]
        polygon(draw, LEAF, x, y, radius, angle, (*color, round(237 * opacity)))
        polygon(draw, LEAF_VEIN, x, y, radius, angle, (123, 62, 25, round(209 * opacity)))
    return image.resize(SIZE, Image.Resampling.LANCZOS)


def snow_layer():
    # Reuse the local falling snow layer from the winter gallery without changing that preview
    with Image.open(RUNTIME_DIR / 'winter-gallery-snow.webp') as source:
        frames = []
        for index in range(source.n_frames):
            source.seek(index)
            frames.append(source.convert('RGBA').resize(SIZE, Image.Resampling.LANCZOS))
    return lambda time: frames[round(time * 20) % len(frames)]


def dissolve(progress):
    return progress * progress * (3 - 2 * progress)


def build_cycle(output):
    bases = {season: source_image(season) for season in SEASONS}
    effects = {'winter': snow_layer(), 'spring': petals, 'summer': sunlight, 'autumn': leaves}

    def scene(season, time_ms):
        return composite(bases[season], effects[season](time_ms / 1000))

    frames = []
    for season, after in zip(SEASONS, SEASONS[1:] + SEASONS[:1]):
        for time in range(0, HOLD_MS, STEP_MS):
            frames.append(scene(season, FADE_MS + time))
        for time in range(0, FADE_MS, STEP_MS):
            outgoing = scene(season, FADE_MS + HOLD_MS + time)
            incoming = scene(after, time)
            frames.append(Image.blend(outgoing, incoming, dissolve(time / FADE_MS)))
    encode(output, frames, [STEP_MS] * len(frames))


if __name__ == '__main__':
    parser = ArgumentParser(description='Build the seasonal map card animation from the local artworks')
    parser.add_argument('output', type=Path)
    build_cycle(parser.parse_args().output)
