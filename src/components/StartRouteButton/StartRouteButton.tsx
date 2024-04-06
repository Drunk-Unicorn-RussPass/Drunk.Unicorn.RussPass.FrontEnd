import { FC } from 'react';
import { BaseButtons } from '@/components/ui/Buttons/BaseButton/BaseButtons';

export type StartRouteButtonProps = {
  onClick: () => void;
};

export const StartRouteButton: FC<StartRouteButtonProps> = ({ onClick }) => {
  return (
    <BaseButtons
      className={'w-full flex h-12 items-center gap-2 justify-center'}
      variant={'primary'}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.23445 20.6251C5.94665 20.6246 5.66394 20.5491 5.41414 20.4062C4.85164 20.0874 4.50195 19.4687 4.50195 18.797V5.20321C4.50195 4.52961 4.85164 3.91274 5.41414 3.59399C5.66989 3.44701 5.96043 3.37142 6.25539 3.37513C6.55034 3.37884 6.83889 3.46171 7.09086 3.61508L18.7088 10.5695C18.951 10.7213 19.1506 10.9321 19.2889 11.1822C19.4273 11.4322 19.4999 11.7134 19.4999 11.9991C19.4999 12.2849 19.4273 12.566 19.2889 12.8161C19.1506 13.0662 18.951 13.277 18.7088 13.4288L7.08898 20.3851C6.83112 20.541 6.53577 20.6239 6.23445 20.6251Z"
          fill="black"
        />
      </svg>
      <span className={'text-base font-semibold'}>Начать маршрут</span>
    </BaseButtons>
  );
};
