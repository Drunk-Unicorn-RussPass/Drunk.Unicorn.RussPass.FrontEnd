import { FC } from 'react';
import { BaseButtons } from '@/components/ui/Buttons/BaseButton/BaseButtons';

export type PauseRouteButtonProps = {
  onClick: () => void;
};

export const PauseRouteButton: FC<PauseRouteButtonProps> = ({ onClick }) => {
  return (
    <BaseButtons
      onClick={onClick}
      className={'w-full flex px-4 py-3 justify-between text-base'}
      variant={'secondary'}
    >
      <span>Вы в пути до точки</span>

      <svg
        width="34"
        height="24"
        viewBox="0 0 34 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="2" height="24" fill="#D9D9D9" />
        <path
          d="M19.75 20.25H17.5C17.3011 20.25 17.1103 20.171 16.9697 20.0303C16.829 19.8897 16.75 19.6989 16.75 19.5V4.5C16.75 4.30109 16.829 4.11032 16.9697 3.96967C17.1103 3.82902 17.3011 3.75 17.5 3.75H19.75C19.9489 3.75 20.1397 3.82902 20.2803 3.96967C20.421 4.11032 20.5 4.30109 20.5 4.5V19.5C20.5 19.6989 20.421 19.8897 20.2803 20.0303C20.1397 20.171 19.9489 20.25 19.75 20.25ZM26.5 20.25H24.25C24.0511 20.25 23.8603 20.171 23.7197 20.0303C23.579 19.8897 23.5 19.6989 23.5 19.5V4.5C23.5 4.30109 23.579 4.11032 23.7197 3.96967C23.8603 3.82902 24.0511 3.75 24.25 3.75H26.5C26.6989 3.75 26.8897 3.82902 27.0303 3.96967C27.171 4.11032 27.25 4.30109 27.25 4.5V19.5C27.25 19.6989 27.171 19.8897 27.0303 20.0303C26.8897 20.171 26.6989 20.25 26.5 20.25Z"
          fill="black"
        />
      </svg>
    </BaseButtons>
  );
};
