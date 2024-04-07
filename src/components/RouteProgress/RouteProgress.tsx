import { FC } from 'react';

export type RouteProgressProps = {
  passedCount: number;
  amount: number;
};

export const RouteProgress: FC<RouteProgressProps> = ({
  passedCount,
  amount,
}) => {
  const itemsList = [];

  for (let i = 0; i < amount; i++) {
    itemsList.push(i < passedCount);
  }

  return (
    <div
      className={
        'w-full flex flex-col rounded-[12px] shadow-sm border border-natural-7 p-[10px]'
      }
    >
      <span className={'flex mb-1.5'}>
        <span>Прогресс</span>
        <span>
          &nbsp;
          {passedCount}/{amount}
        </span>
      </span>

      <ul
        className={`w-full grid gap-1.5`}
        style={{
          gridTemplateColumns: `repeat(${amount}, minmax(0, 1fr))`,
        }}
      >
        {itemsList.map((isPassed, idx) => {
          return (
            <span
              key={`${idx}-${String(isPassed)}`}
              className={
                'h-1.5 block rounded-[12px] ' +
                (isPassed ? 'bg-cyberYellow-1' : 'bg-natural-6')
              }
            />
          );
        })}
      </ul>
    </div>
  );
};
