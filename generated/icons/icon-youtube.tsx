/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconYoutube: React.SFC<Props> = ({
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
      <path d="M26.428 39.368l14.584-7.937-14.584-8.033v15.97zM32 12c11.36 0 18.894.57 18.894.57 1.054.128 3.374.128 5.423 2.414 0 0 1.657 1.715 2.14 5.651.571 4.603.542 9.206.542 9.206v4.318s.03 4.603-.542 9.206c-.483 3.905-2.14 5.651-2.14 5.651-2.05 2.255-4.369 2.255-5.423 2.382 0 0-7.534.602-18.894.602-14.042-.127-18.352-.57-18.352-.57-1.204-.224-3.918-.16-5.967-2.414 0 0-1.657-1.746-2.14-5.651C4.971 38.762 5 34.159 5 34.159V29.84s-.03-4.603.542-9.206c.483-3.936 2.14-5.651 2.14-5.651 2.05-2.286 4.369-2.286 5.423-2.413 0 0 7.534-.571 18.894-.571H32z" />
    </svg>
  );
};
