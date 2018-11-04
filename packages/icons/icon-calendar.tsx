/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconCalendar: React.SFC<Props> = ({
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
      <path d="M52.834 11.688h-6.772V8.562A1.56 1.56 0 0 0 44.5 7c-.864 0-1.563.698-1.563 1.563v3.124h-9.374V8.563a1.562 1.562 0 1 0-3.126 0v3.124h-9.375V8.563a1.562 1.562 0 1 0-3.125 0v3.124h-6.77A4.166 4.166 0 0 0 7 15.854v36.98A4.167 4.167 0 0 0 11.167 57h41.667A4.166 4.166 0 0 0 57 52.833v-36.98a4.164 4.164 0 0 0-4.166-4.165zm1.041 41.145c0 .575-.467 1.042-1.04 1.042H11.166a1.043 1.043 0 0 1-1.042-1.042v-36.98c0-.573.467-1.04 1.042-1.04h6.77v3.124a1.562 1.562 0 1 0 3.125 0v-3.125h9.375v3.126a1.562 1.562 0 1 0 3.125 0v-3.125h9.376v3.124a1.56 1.56 0 0 0 1.562 1.563c.864 0 1.563-.698 1.563-1.563v-3.125h6.771c.574 0 1.041.468 1.041 1.041v36.98z" />
      <path d="M24.188 25.75h-6.25v4.688h6.25V25.75zm0 7.813h-6.25v4.687h6.25v-4.688zm0 7.812h-6.25v4.688h6.25v-4.688zm10.937 0h-6.25v4.688h6.25v-4.688zm0-7.812h-6.25v4.687h6.25v-4.688zm0-7.813h-6.25v4.688h6.25V25.75zm10.938 15.625h-6.25v4.688h6.25v-4.688zm0-7.812h-6.25v4.687h6.25v-4.688zm0-7.813h-6.25v4.688h6.25V25.75z" />
    </svg>
  );
};
