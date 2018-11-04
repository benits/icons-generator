/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconClose: React.SFC<Props> = ({
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
      <path
        stroke="#000"
        d="M37.084 31.646L36.73 32l.354.354 18.844 18.844a3.345 3.345 0 0 1-4.73 4.73L32.353 37.084 32 36.73l-.354.354-18.844 18.844a3.345 3.345 0 0 1-4.73-4.73l18.844-18.844.356-.356-.358-.354L8.097 13.067A3.43 3.43 0 1 1 12.931 8.2l18.715 18.715.354.354.353-.354L51.198 8.072a3.345 3.345 0 0 1 4.73 4.73L37.084 31.646z"
      />
    </svg>
  );
};
