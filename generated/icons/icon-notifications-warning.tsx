/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconNotificationsWarning: React.SFC<Props> = ({
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
      <path d="M58.525 49.89L34.833 10.6a3.309 3.309 0 0 0-5.666 0L5.474 49.89a3.308 3.308 0 0 0 2.834 5.017H55.69a3.309 3.309 0 0 0 2.834-5.017zm-26.507-27.3c1.36 0 2.512.768 2.512 2.13 0 4.15-.489 10.117-.489 14.268 0 1.082-1.186 1.535-2.023 1.535-1.117 0-2.059-.453-2.059-1.535 0-4.151-.488-10.117-.488-14.269 0-1.36 1.116-2.128 2.547-2.128zm.035 25.713c-1.535 0-2.687-1.256-2.687-2.686a2.665 2.665 0 0 1 2.687-2.686c1.43 0 2.651 1.22 2.651 2.686 0 1.43-1.221 2.686-2.651 2.686z" />
    </svg>
  );
};
