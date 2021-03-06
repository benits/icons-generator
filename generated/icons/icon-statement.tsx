/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconStatement: React.SFC<Props> = ({
  size,
  title,

  children,

  ...svgProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || '1rem'}
      height={size || '1rem'}
      viewBox="0 0 64 64"
      {...svgProps}
    >
      {title && <title>{title}</title>}
      <path d="M39.42 28.315h7.42V24.55h-7.42v3.764zM32 24.548H17.14v3.764H32v-3.764zm7.42 11.276h7.42v-3.746h-7.42v3.746zm7.44-22.549H17.14v3.764h29.72v-3.764zM32 32.078H17.14v3.764H32v-3.764zM6 2v60.136h3.72l7.42-5.647 7.379 5.647L32 56.51l7.42 5.647 7.42-5.647 7.42 5.647H58V2.002L6 2zm48.28 56.39l-7.42-5.646-7.42 5.647L32 52.744l-7.42 5.647-7.44-5.647-7.42 5.647V5.764h44.56V58.39zM32 39.589H17.14v3.764H32v-3.764zm7.42 3.764h7.42v-3.764h-7.42v3.764z" />
    </svg>
  );
};
