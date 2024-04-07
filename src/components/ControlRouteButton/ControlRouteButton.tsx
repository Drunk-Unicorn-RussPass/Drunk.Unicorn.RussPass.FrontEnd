import { FC } from 'react';
import { PauseRouteButton } from '@/components/PauseRouteButton/PauseRouteButton';
import { StartRouteButton } from '@/components/StartRouteButton/StartRouteButton';

export type ControlRouteButtonProps = {
  inProgress?: boolean;
  onClick: () => void;
};

export const ControlRouteButton: FC<ControlRouteButtonProps> = ({
  inProgress,
  onClick,
}) => {
  return inProgress ? (
    <PauseRouteButton onClick={onClick} />
  ) : (
    <StartRouteButton onClick={onClick} />
  );
};
