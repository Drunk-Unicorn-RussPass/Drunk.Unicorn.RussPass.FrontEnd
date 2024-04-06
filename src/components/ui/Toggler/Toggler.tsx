import { FC } from 'react';
import cx from 'classnames';

export type TogglerProps = {
  variants: string[];
  activeVariant: string;
  onChangeVariant: (newVariant: string) => void;
};

export const Toggler: FC<TogglerProps> = ({
  variants,
  activeVariant,
  onChangeVariant,
}) => {
  return (
    <div
      className={
        'w-full flex gap-1 p-1 rounded-[12px] bg-natural-6 font-semibold'
      }
    >
      {variants.map((variant) => {
        return (
          <button
            className={cx('w-full flex justify-center py-2 rounded-[8px]', {
              'bg-natural-8 shadow-sm': variant === activeVariant,
            })}
            key={variant}
            onClick={() => onChangeVariant(variant)}
          >
            {variant}
          </button>
        );
      })}
    </div>
  );
};
