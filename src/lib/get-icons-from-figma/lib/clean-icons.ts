/*
  The optimisation of svgs is non deterministic, this cleaning is to prevent icons getting
  updated when there are no intentional changes to them.
*/

import { iconsData } from '../../../../generated/icons-data';

import { OptimizedIcons } from './optimize-icons';

export const cleanIcons = (icons: OptimizedIcons) => {
  const cleanedIcons = [];

  for (const icon of icons) {
    const previousIcon = iconsData.find(
      iconData => icon.name === iconData.name,
    );

    if (previousIcon === undefined) {
      cleanedIcons.push(icon);

      continue;
    }

    if (previousIcon.rawSvg === icon.rawSvg) {
      cleanedIcons.push(previousIcon);

      continue;
    }

    cleanedIcons.push(icon);
  }

  return icons;
};
