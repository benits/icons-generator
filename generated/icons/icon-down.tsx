/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconDown: React.SFC<Props> = ({
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
      <path d="M32.06 40.046L8.739 18.016c-1.086-1.16-2.85-1.146-3.93.01-1.08 1.157-1.08 3.05.011 4.195l25.226 23.837c.023.025.017.066.034.089a2.668 2.668 0 0 0 2.003.853 2.631 2.631 0 0 0 1.989-.864c.027-.026.017-.067.038-.096l25.085-23.977c1.08-1.17 1.075-3.049-.017-4.205-1.086-1.146-2.85-1.146-3.93.01L32.06 40.045l.002.002z" />
    </svg>
  );
};
