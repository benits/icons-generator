/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconNotificationsError: React.SFC<Props> = ({
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
        d="M32 59c14.912 0 27-12.088 27-27S46.912 5 32 5 5 17.088 5 32s12.088 27 27 27zm13.3-36.696l-9.697 9.697 9.697 9.697a2.551 2.551 0 0 1-3.607 3.606l-9.696-9.696-9.697 9.696a2.55 2.55 0 1 1-3.607-3.607l9.694-9.694-9.678-9.555a2.595 2.595 0 1 1 3.66-3.682l9.628 9.628 9.696-9.697a2.55 2.55 0 1 1 3.607 3.607z"
      />
    </svg>
  );
};
