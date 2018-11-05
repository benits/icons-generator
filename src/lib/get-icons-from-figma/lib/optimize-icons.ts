import { RawIcons } from './get-raw-icons';

import { svgo } from './svgo';
import { Unpacked } from '../../type-helpers';

export type OptimizedIcons = Unpacked<ReturnType<typeof optimizeIcons>>;

export const optimizeIcons = async (rawIcons: RawIcons) => {
  const images = [];

  for (const rawIcon of rawIcons) {
    const optimizedSvg = await svgo.optimize(rawIcon.rawSvg);

    images.push({
      ...rawIcon,
      optimizedSvg: optimizedSvg.data,
    });
  }

  return images;
};
