/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconPlus: React.SFC<Props> = ({
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
      <path d="M35.111 28V3.556a3.556 3.556 0 1 0-7.111 0V28H3.556a3.556 3.556 0 1 0 0 7.111H28v25.333a3.556 3.556 0 1 0 7.111 0V35.111h25.333a3.556 3.556 0 1 0 0-7.111H35.111z" />
    </svg>
  );
};
