/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconWarning: React.SFC<Props> = ({
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
        d="M32 59c14.912 0 27-12.088 27-27S46.912 5 32 5 5 17.088 5 32s12.088 27 27 27zm-3.598-41.4a3.6 3.6 0 0 1 3.602-3.6 3.598 3.598 0 0 1 3.598 3.6v18a3.598 3.598 0 1 1-7.2 0v-18zm7.2 28.8a3.598 3.598 0 1 1-7.2 0c0-1.107.5-2.097 1.285-2.757a3.589 3.589 0 0 1 2.317-.843c.926 0 1.77.35 2.406.925a3.594 3.594 0 0 1 1.192 2.674z"
      />
    </svg>
  );
};
