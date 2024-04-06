import { FC } from 'react';
import IncognitoIcon from '@/assets/icons/incognito.svg';
import { Coins } from '@/components/Coins/Coins';

export type HiddenPlacesCountProps = {
  count: number;
};

export const HiddenPlacesCount: FC<HiddenPlacesCountProps> = ({ count }) => {
  return (
    <div
      className={
        'w-full h-[48px] flex items-center justify-between rounded-[12px] px-3 bg-pink-1/[0.5] text-pink-3'
      }
    >
      <div className={'flex gap-2'}>
        <IncognitoIcon />
        <span>
          Спрятано {count} {count < 2 ? 'секретное место' : 'секретных мест'}
        </span>
      </div>

      <Coins count={count * 20} />
    </div>
  );
};
