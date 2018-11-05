import prettier from 'prettier';

import { prettierConfig } from '../../config';

import { generatedHeaderTs } from '../../generated-header';

import { camelCase } from './camel-case';

export const convertToReactDom = (iconId: string, code: string) => {
  const componentTitle = camelCase(iconId);

  // convert attributes like fill-rule into JSX equivalents, e.g. fillRule
  const svgWithAttributesConverted = code.replace(
    /([a-z]+)-([a-z]+)=/g,
    (_, a, b) => `${a}${camelCase(b)}=`,
  );

  const svgWithTitleAndSvgProps = svgWithAttributesConverted.replace(
    /"><path/,
    '" {...svgProps} >{title && <title>{title}</title>}<path',
  );

  const svg = svgWithTitleAndSvgProps.replace(
    / width="64" height="64" /g,
    ` width={size || "1rem"} height={size || "1rem"} `,
  );

  const unformattedCode = `${generatedHeaderTs}
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const ${componentTitle}: React.SFC<Props> = ({
  size,
  title,

  children,

  ...svgProps
}) => {
  return ${svg}
}
`;

  const formattedCodd = prettier.format(unformattedCode, prettierConfig);

  return formattedCodd;
};
