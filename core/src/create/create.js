import sharp from 'sharp';
import { randInt, puzzlePieceSvg, backgroundSvg } from './generate';

const sizes = {
  WIDTH: 250,
  HEIGHT: 150,
  PUZZLE: 60,
  PADDING: 20,
};

const createCaptcha = ({
  image = Buffer.from(backgroundSvg(sizes.WIDTH, sizes.HEIGHT)),
  distort = false,
  rotate = false,
  fill = '#000',
  stroke = '#fff',
  strokeWidth = '.4',
  opacity = '0.5',
  // @ts-ignore
  createPuzzleSvg,
} = {}) => {
  const seed = randInt();
  const overlay = Buffer.from(
    createPuzzleSvg
      ? createPuzzleSvg({
          rotate,
          distort,
          fill,
          stroke,
          strokeWidth,
          opacity,
          seed,
        })
      : puzzlePieceSvg({
          rotate,
          distort,
          fill,
          stroke,
          strokeWidth,
          opacity,
          seed,
        }),
  );
  const mask = Buffer.from(
    createPuzzleSvg
      ? createPuzzleSvg({
          rotate,
          distort,
          strokeWidth,
          seed,
          fill: '#fff',
          stroke: '#fff',
          opacity: '1',
        })
      : puzzlePieceSvg({
          rotate,
          distort,
          seed,
          strokeWidth,
          fill: '#fff',
          stroke: '#fff',
          opacity: '1',
        }),
  );
  const outline = Buffer.from(
    createPuzzleSvg
      ? createPuzzleSvg({
          rotate,
          distort,
          stroke,
          strokeWidth,
          seed,
          fill: 'none',
          opacity: '1',
        })
      : puzzlePieceSvg({
          rotate,
          distort,
          seed,
          stroke,
          strokeWidth,
          fill: 'none',
          opacity: '1',
        }),
  );
  const location = {
    // Solution for slider
    left: randInt(
      sizes.PUZZLE + sizes.PADDING,
      sizes.WIDTH - (sizes.PUZZLE + sizes.PADDING),
    ),
    // Vertical offset
    top: randInt(sizes.PADDING, sizes.HEIGHT - (sizes.PUZZLE + sizes.PADDING)),
  };
  return new Promise(() => {
    const ins = sharp(image).resize({
      width: sizes.WIDTH,
      height: sizes.HEIGHT,
    });
    return ins
      .composite([
        {
          input: overlay,
          blend: 'over',
          top: location.top,
          left: location.left,
        },
      ])
      .png()
      .toBuffer()
      .then(async (background) => {
        const composed = await ins
          .composite([
            {
              input: mask,
              blend: 'dest-in',
              top: location.top,
              left: location.left,
            },
            {
              input: outline,
              blend: 'over',
              top: location.top,
              left: location.left,
            },
          ])
          .toBuffer();
        return sharp(composed)
          .extract({
            left: location.left,
            top: 0,
            width: sizes.PUZZLE,
            height: sizes.HEIGHT,
          })
          .png()
          .toBuffer()
          .then((slider) => ({
              data: {
                background,
                slider,
              },
              solution: location.left,
            }));
      });
  });
};

export default createCaptcha;
