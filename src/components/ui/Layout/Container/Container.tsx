import { FC, PropsWithChildren } from 'react';
import cx from 'classnames';

export type ContainerProps = {
  className?: string;
};

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
}) => {
  return <div className={cx('w-full px-4', className)}>{children}</div>;
};
