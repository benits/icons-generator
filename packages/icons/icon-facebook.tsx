/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconFacebook: React.SFC<Props> = ({
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
      <path d="M45.998 5.388v8.568H40.91c-3.986 0-4.73 1.915-4.73 4.673v6.134h9.494l-1.263 9.606H36.18V59h-9.916V34.369H18v-9.606h8.263v-7.075C26.263 9.478 31.286 5 38.61 5c3.499 0 6.515.26 7.39.388h-.002z" />
    </svg>
  );
};
