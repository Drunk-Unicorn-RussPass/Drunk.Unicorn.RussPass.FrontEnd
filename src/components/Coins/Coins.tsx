import { FC } from 'react';
import CoinIcon from '@/assets/icons/coin.svg';
import cx from 'classnames';

export type CoinsProps = {
  withPlaceholder?: boolean;
  count: number;
};

export const Coins: FC<CoinsProps> = ({ withPlaceholder = false, count }) => {
  return (
    <div
      className={cx('flex gap-1  leading-5 items-center', {
        'px-1.5 py-0.5 rounded-[99px] bg-natural-7': withPlaceholder,
      })}
    >
      <CoinIcon />
      {count}
    </div>
  );
};
