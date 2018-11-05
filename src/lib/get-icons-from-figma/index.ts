import fetch from 'node-fetch';
import { writeFileSync } from 'fs';

import { Unpacked } from '../type-helpers';
import { cleanIcons } from './lib/clean-icons';

import { designKitFileKey, figmaPersonalAccessToken } from '../config';

import { getIconsFrame } from './lib/get-icons-frame';
import { getRawIcons } from './lib/get-raw-icons';
import { FileResponse } from './lib/figma-types';
import { optimizeIcons } from './lib/optimize-icons';
import { generateIconsData } from './lib/generate-icons-data';

export type Icons = Unpacked<ReturnType<typeof getIconsFromFigma>>;

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
  const rawIcons = await getRawIcons(iconsFrame);
  const iconsData = await optimizeIcons(rawIcons);
  const cleanedIcons = cleanIcons(iconsData);
  const iconsDataContents = generateIconsData(cleanedIcons);

  await writeFileSync(`./generated/icons-data.ts`, iconsDataContents, 'utf-8');

  return cleanedIcons;
};
