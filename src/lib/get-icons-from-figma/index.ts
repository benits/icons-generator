import fetch from 'node-fetch';

import { getIconsFrame } from './lib/get-icons-frame';
import { designKitFileKey, figmaPersonalAccessToken } from '../config';
import { getIconFilePaths } from './lib/get-icon-components';

import { FileResponse } from './lib/figma-types';

type Unpacked<T> = T extends Promise<infer U> ? U : T;
export type Icon = Unpacked<ReturnType<typeof getIconsFromFigma>>;

export const getIconsFromFigma = async () => {
  const response = await fetch(
    `https://api.figma.com/v1/files/${designKitFileKey}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Figma-Token': figmaPersonalAccessToken,
      },
    },
  );

  const responseJson = (await response.json()) as FileResponse;

  const iconsFrame = getIconsFrame(responseJson);
  const images = await getIconFilePaths(iconsFrame);

  return images;
};
