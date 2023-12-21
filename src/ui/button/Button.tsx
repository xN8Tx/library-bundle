import React, { MouseEvent, ReactNode } from 'react';

import style from './Button.module.scss';
import '../../scss/index.scss';

export interface IButton {
  children: ReactNode;
  color: 'primary' | 'secondary';
  onClick: (event?: MouseEvent<HTMLButtonElement>) => unknown;
  disabled?: boolean;
}

export default function Button({
  children,
  color,
  onClick,
  disabled = false,
}: IButton) {
  const className = `${style.Button} ${style[color]}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
