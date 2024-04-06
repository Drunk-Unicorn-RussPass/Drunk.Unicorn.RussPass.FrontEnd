import { FC } from 'react';
import { BaseButtons } from '@/components/ui/Buttons/BaseButton/BaseButtons';
import EditIcon from '@/assets/icons/edit.svg';

export type EditRouteButtonProps = {
  onClick: () => void;
};

export const EditRouteButton: FC<EditRouteButtonProps> = ({ onClick }) => {
  return (
    <BaseButtons
      onClick={onClick}
      className={'w-full h-[48px] flex items-center gap-2 px-3'}
      variant={'secondary'}
    >
      <EditIcon /> <span>Редактировать маршрут</span>
    </BaseButtons>
  );
};
