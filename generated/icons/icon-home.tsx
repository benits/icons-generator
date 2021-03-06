/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconHome: React.SFC<Props> = ({
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
      <path d="M61.449 25.009L33.362 2.549a2.09 2.09 0 0 0-2.824 0l.002-.003-27.982 22.46a1.908 1.908 0 0 0 2.699 2.698l.522-.418v30.97A3.744 3.744 0 0 0 9.523 62h44.944a3.744 3.744 0 0 0 3.744-3.744V27.264l.522.419a1.908 1.908 0 1 0 2.718-2.679l-.002.005zM37.545 58.26H26.313V42.765a2.09 2.09 0 0 1 2.092-2.091h7.048a2.09 2.09 0 0 1 2.091 2.09v15.497zm16.92-1.883a1.884 1.884 0 0 1-1.884 1.883H41.31V41.156a4.184 4.184 0 0 0-4.183-4.182h-10.27a4.184 4.184 0 0 0-4.183 4.182v17.105H11.402a1.884 1.884 0 0 1-1.884-1.883V24.509L32 6.19l22.482 18.237V56.38l-.017-.002z" />
    </svg>
  );
};
