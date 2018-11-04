/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconDownload: React.SFC<Props> = ({
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
      <path d="M53.55 41.82a2.459 2.459 0 0 0-2.45 2.455v7.362a2.459 2.459 0 0 1-2.45 2.454h-34.3a2.459 2.459 0 0 1-2.45-2.454v-7.362a2.459 2.459 0 0 0-2.45-2.455A2.459 2.459 0 0 0 7 44.275v7.362C7 55.703 10.293 59 14.35 59h34.3c4.06 0 7.35-3.3 7.35-7.363v-7.362a2.459 2.459 0 0 0-2.45-2.455z" />
      <path d="M29.755 43.552l.092.093.016.015.016.016.015.016.016.016.016.016c.185.153.367.261.566.352h.031c.26.108.552.185.857.198h.22a2.28 2.28 0 0 0 .857-.198h.031a2.09 2.09 0 0 0 .521-.323l.016-.016.016-.016.015-.016.016-.015.016-.016c.045-.032.076-.077.122-.122l9.785-9.803a2.468 2.468 0 0 0 0-3.468 2.455 2.455 0 0 0-3.462 0l-5.573 5.615V7.454A2.459 2.459 0 0 0 31.51 5a2.459 2.459 0 0 0-2.45 2.454v28.442l-5.62-5.631a2.457 2.457 0 0 0-3.462 0 2.466 2.466 0 0 0 0 3.468l9.786 9.819h-.01z" />
    </svg>
  );
};