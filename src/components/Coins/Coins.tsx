import { FC } from 'react';
import CoinIcon from '@/assets/icons/coin.svg';
import cx from 'classnames';

export type CoinsProps = {
  withPlaceholder?: boolean;
  count: number;
  withPlus?: boolean;
  big?: boolean;
};

export const Coins: FC<CoinsProps> = ({
  withPlaceholder = false,
  count,
  withPlus,
  big,
}) => {
  return (
    <div
      className={cx('flex gap-1  leading-5 items-center', {
        'px-1.5 py-0.5 rounded-[99px] bg-natural-7': withPlaceholder,
      })}
    >
      {withPlus && <span className={'pb-[3px]'}>+</span>}
      {big ? (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4832 1.6665H9.31055V18.3332H11.4832C15.1781 18.3332 18.001 14.4932 18.001 9.99984C18.001 5.50643 15.1781 1.6665 11.4832 1.6665Z"
            fill="#E6B900"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.51782 1.6665C5.82283 1.6665 3 5.50643 3 9.99984C3 14.4932 5.82283 18.3332 9.51782 18.3332C13.2128 18.3332 16.0356 14.4932 16.0356 9.99984C16.0356 5.50643 13.2128 1.6665 9.51782 1.6665Z"
            fill="#FFCF08"
          />
          <path
            d="M9.35538 6.02093C9.41365 5.87388 9.61986 5.87388 9.67814 6.02093L10.5229 8.15253C10.5456 8.21003 10.5968 8.25114 10.6574 8.26071L12.6852 8.58067C12.8196 8.60188 12.8789 8.76373 12.7904 8.86808L11.3062 10.6185C11.2736 10.657 11.259 10.7078 11.2663 10.758L11.6117 13.1397C11.633 13.2866 11.4753 13.3921 11.3495 13.3151L9.60692 12.2479C9.55151 12.2139 9.482 12.2139 9.4266 12.2479L7.68397 13.3151C7.55827 13.3921 7.40054 13.2866 7.42183 13.1397L7.76723 10.758C7.7745 10.7078 7.75994 10.657 7.7273 10.6185L6.24312 8.86808C6.15464 8.76373 6.21389 8.60188 6.34832 8.58067L8.37613 8.26071C8.43675 8.25114 8.48788 8.21003 8.51066 8.15253L9.35538 6.02093Z"
            fill="#CCA500"
          />
        </svg>
      ) : (
        <CoinIcon />
      )}
      {count}
    </div>
  );
};
