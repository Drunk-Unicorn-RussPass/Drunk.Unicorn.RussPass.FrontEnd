import { FC, ReactNode } from 'react';
import { RootRoutes } from '@/app/routes';
import { TapBar } from '@/components/TapBar/TapBar';
import { Container } from '@/components/ui/Layout/Container/Container';
import cx from 'classnames';

export type BottomBarProps = {
  currentRoutePath?: RootRoutes;
  topSlot?: ReactNode;
};

export const BottomBar: FC<BottomBarProps> = ({
  currentRoutePath,
  topSlot,
}) => {
  return (
    <div
      className={cx('w-full fixed bottom-0 left-0 right-0 bg-natural-8', {
        'border-t border-natural-7': Boolean(topSlot),
      })}
    >
      {topSlot && (
        <Container>
          <div className={'py-2'}>{topSlot}</div>
        </Container>
      )}
      <TapBar currentRoutePath={currentRoutePath} />
    </div>
  );
};
