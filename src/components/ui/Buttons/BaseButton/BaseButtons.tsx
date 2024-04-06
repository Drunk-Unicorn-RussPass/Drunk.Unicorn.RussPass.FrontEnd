import { FC, PropsWithChildren } from 'react';
import cx from 'classnames';

export type BaseButtonsProps = {
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick: () => void;
};

export const BaseButtons: FC<PropsWithChildren<BaseButtonsProps>> = ({
  children,
  variant = 'primary',
  className,
  onClick,
}) => {
  return (
    <button
      className={cx(className, 'rounded-[12px]', {
        'bg-natural-7': variant === 'secondary',
        'bg-cyberYellow-1': variant === 'primary',
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
