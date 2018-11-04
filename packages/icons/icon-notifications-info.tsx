/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconNotificationsInfo: React.SFC<Props> = ({
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
        fillRule="evenodd"
        d="M32 59c14.912 0 27-12.088 27-27S46.912 5 32 5 5 17.088 5 32s12.088 27 27 27zm-3-37.5c0-.636.168-1.232.465-1.746A3.5 3.5 0 1 1 29 21.5zm7 21a3.5 3.5 0 1 1-7 0v-11a3.5 3.5 0 1 1 7 0v11z"
      />
    </svg>
  );
};
