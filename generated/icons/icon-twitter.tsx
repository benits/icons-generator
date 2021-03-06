/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconTwitter: React.SFC<Props> = ({
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
      <path d="M59 15.227a23.836 23.836 0 0 1-5.55 5.74c.035.482.035.964.035 1.443 0 14.68-11.136 31.59-31.49 31.59C15.726 54 9.9 52.178 5 49.015c.89.103 1.748.138 2.673.138 5.174 0 9.937-1.753 13.742-4.743a11.093 11.093 0 0 1-10.35-7.7c.687.104 1.371.172 2.09.172.994 0 1.988-.139 2.913-.379a11.097 11.097 0 0 1-8.875-10.896v-.139a11.142 11.142 0 0 0 5.002 1.41 11.105 11.105 0 0 1-4.934-9.246c0-2.064.548-3.954 1.509-5.604a31.423 31.423 0 0 0 22.82 11.619 12.6 12.6 0 0 1-.274-2.544C31.316 14.985 36.25 10 42.384 10c3.186 0 6.066 1.34 8.085 3.507a21.75 21.75 0 0 0 7.024-2.682 11.064 11.064 0 0 1-4.866 6.118c2.228-.24 4.386-.86 6.373-1.718v.002z" />
    </svg>
  );
};
