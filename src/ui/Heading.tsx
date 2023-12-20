import React from 'react';

import style from './Heading.module.scss';

export interface IHeading {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary';
}

export function Heading({
  children,
  size,
  color,
}: IHeading): React.JSX.Element {
  const className = `${style.heading} ${style[size]} ${style[color]}`;

  return <h1 className={className}>{children}</h1>;
}
