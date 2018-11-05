import prettier from 'prettier';

import { Icons } from '../../get-icons-from-figma';
import { prettierConfig } from '../../config';
import { generatedHeaderMd } from '../../generated-header';

import { camelCase } from './camel-case';

export const writeReadMe = async (icons: Icons) => {
  const getIconRow = (icon: Icons[0]) =>
    `| ![](./${icon.name}.svg) | \`import { ${camelCase(
      icon.name,
    )} } from '@bulb/icons/${icon.name}';\` |`;

  const iconTable = `| Appearance | How to import |
|:----------:| ------------- |
${icons.map(getIconRow).join('\n')}
`;

  const readMeContents = `${generatedHeaderMd}

# Bulb Icons

## Install

\`\`\`sh
$ yarn add @bulb/icons --save
\`\`\`

## Usage

### \`<Icon[Name]>\`

Bulb icon components create svgs without any wrapping.

\`\`\`ts
import { IconAccount } from '@bulb/icons/IconAccount'

// ...
<IconAccount />
\`\`\`

### Props

In addition to the following two custom props, Bulb icons accept react svg elements.

* size?: string; /** size to use for the icon. defaults to 1rem */
* title?: string; /** title to add to the svg structure */



## Available Icons
`;

  const formattedReadMeContents = prettier.format(readMeContents, {
    ...prettierConfig,
    parser: 'markdown',
  });

  // prettifying the markdown table leads to silly looking markdown because of the images in the
  // table cells
  const readMeWithTable = `${formattedReadMeContents}

${iconTable}`;

  return readMeWithTable;
};
