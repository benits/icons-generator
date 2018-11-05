import fetch from 'node-fetch';

import { designKitFileKey, figmaPersonalAccessToken } from '../../config';

import { Unpacked } from '../../type-helpers';

import { Frame, ImagesResponse } from './figma-types';

export type RawIcons = Unpacked<ReturnType<typeof getRawIcons>>;

export const getRawIcons = async (iconsFrame: Frame) => {
  let iconComponents = [];

  for (const child of iconsFrame.children) {
    if (child.type === 'COMPONENT') {
      if (child.name === 'icon-space') {
        continue;
      }

      iconComponents.push({
        name: child.name,
        figmaId: child.id,
        width: child.absoluteBoundingBox.width,
        height: child.absoluteBoundingBox.height,
      });
    }
  }

  const componentIds = iconComponents
    .map(iconComponent => iconComponent.figmaId)
    .join(',');

  const imageUrlsResponse = await fetch(
    `https://api.figma.com/v1/images/${designKitFileKey}?ids=${componentIds}&format=svg`,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Figma-Token': figmaPersonalAccessToken,
      },
    },
  );

  const imageUrlsResponseJson = (await imageUrlsResponse.json()) as ImagesResponse;
  const svgUrlMap = imageUrlsResponseJson.images;

  const images = [];

  for (const iconComponent of iconComponents) {
    const svgUrl = svgUrlMap[iconComponent.figmaId];

    if (svgUrl === null) {
      throw new Error(
        `Figme failed to render a svg for the following node: ${
          iconComponent.name
        } - ${iconComponent.figmaId}`,
      );
    }

    const svgResponse = await fetch(svgUrl);
    const svgResponseText = await svgResponse.text();

    images.push({
      ...iconComponent,
      rawSvg: svgResponseText,
    });
  }

  return images;
};
