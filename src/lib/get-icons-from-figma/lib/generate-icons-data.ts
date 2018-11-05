import prettier from 'prettier';

import { generatedHeaderTs } from '../../generated-header';
import { prettierConfig } from '../../config';

import { OptimizedIcons } from './optimize-icons';

export const generateIconsData = (icons: OptimizedIcons) => {
  const iconsDataContents = `${generatedHeaderTs}

export const iconsData = ${JSON.stringify(icons)}
`;

  const formattedIconsDataContents = prettier.format(
    iconsDataContents,
    prettierConfig,
  );

  return formattedIconsDataContents;
};
