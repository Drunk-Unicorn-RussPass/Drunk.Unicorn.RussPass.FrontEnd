import { FC, useState } from 'react';
import {
  LocationProcessStatuses,
  LocationProcessType,
  LocationType,
} from '@/apollo/types';
import { BaseButtons } from '@/components/ui/Buttons/BaseButton/BaseButtons';
import { CheckInSidebar } from '@/components/CheckInSidebar/CheckInSidebar';
import Image from 'next/image';

export type BaseRouteItemProps = {
  location: LocationProcessType;
  compactMode?: boolean;
};

const BaseRouteItem: FC<BaseRouteItemProps> = ({
  location,
  compactMode = false,
}) => {
  return (
    <div className={'flex gap-4 relative'}>
      <Image
        alt={'image'}
        src={location.image}
        className={'size-[64px] rounded-[12px]'}
      />

      <div className={'flex flex-col justify-between'}>
        <div className={'text-natural-3 text-xs'}>
          <span>{location.category}</span>
        </div>
        <h3>{location.name}</h3>
        <span className={'text-natural-3 text-xs'}>{location.address}</span>
      </div>

      {!compactMode && (
        <div className={'ml-auto'}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.6143 16.007C19.6143 16.4489 19.9724 16.807 20.4143 16.807C20.8561 16.807 21.2143 16.4489 21.2143 16.007C21.2143 15.5652 20.8561 15.207 20.4143 15.207C19.9724 15.207 19.6143 15.5652 19.6143 16.007Z"
              stroke="#A6A6A6"
              stroke-width="1.6"
            />
            <path
              d="M10.7871 16.007C10.7871 16.4489 11.1453 16.807 11.5871 16.807C12.0289 16.807 12.3871 16.4489 12.3871 16.007C12.3871 15.5652 12.0289 15.207 11.5871 15.207C11.1453 15.207 10.7871 15.5652 10.7871 16.007Z"
              stroke="#A6A6A6"
              stroke-width="1.6"
            />
            <path
              d="M15.2077 16.007C15.2077 16.4489 15.5659 16.807 16.0077 16.807C16.4495 16.807 16.8077 16.4489 16.8077 16.007C16.8077 15.5652 16.4495 15.207 16.0077 15.207C15.5659 15.207 15.2077 15.5652 15.2077 16.007Z"
              stroke="#A6A6A6"
              stroke-width="1.6"
            />
          </svg>
        </div>
      )}

      {!compactMode && (
        <div
          className={
            'absolute size-6 flex items-center justify-center bg-natural-8 rounded-full text-xs top-[-8px] left-[-8px] shadow-sm'
          }
        >
          {location.order}
        </div>
      )}
    </div>
  );
};

export type RouteItem = {
  location: LocationProcessType;
};

const buttonStyles = 'w-full h-9 flex items-center justify-center';

export const RouteItem: FC<RouteItem> = ({ location }) => {
  const [inCheckIn, setInCheckIn] = useState(false);

  if (location.processStatus !== LocationProcessStatuses.inWay) {
    return <BaseRouteItem location={location} />;
  }

  return (
    <>
      <div
        className={'w-full flex flex-col rounded-[12px] bg-natural-7 p-3 pt-2'}
      >
        <div className={'w-full flex items-center justify-between'}>
          <span className={'text-xs text-natural-3'}>Вы в пути до точки:</span>

          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.6143 16.007C19.6143 16.4489 19.9724 16.807 20.4143 16.807C20.8561 16.807 21.2143 16.4489 21.2143 16.007C21.2143 15.5652 20.8561 15.207 20.4143 15.207C19.9724 15.207 19.6143 15.5652 19.6143 16.007Z"
              stroke="#A6A6A6"
              stroke-width="1.6"
            />
            <path
              d="M10.7871 16.007C10.7871 16.4489 11.1453 16.807 11.5871 16.807C12.0289 16.807 12.3871 16.4489 12.3871 16.007C12.3871 15.5652 12.0289 15.207 11.5871 15.207C11.1453 15.207 10.7871 15.5652 10.7871 16.007Z"
              stroke="#A6A6A6"
              stroke-width="1.6"
            />
            <path
              d="M15.2077 16.007C15.2077 16.4489 15.5659 16.807 16.0077 16.807C16.4495 16.807 16.8077 16.4489 16.8077 16.007C16.8077 15.5652 16.4495 15.207 16.0077 15.207C15.5659 15.207 15.2077 15.5652 15.2077 16.007Z"
              stroke="#A6A6A6"
              stroke-width="1.6"
            />
          </svg>
        </div>

        <div className={'mb-3'}>
          <BaseRouteItem location={location} compactMode />
        </div>

        <div className={'w-full flex flex-col gap-1'}>
          <BaseButtons
            className={buttonStyles}
            onClick={() => setInCheckIn(true)}
          >
            Я на месте
          </BaseButtons>
          <BaseButtons
            className={buttonStyles + ' border border-natural-5'}
            onClick={() => {}}
            variant={'secondary'}
          >
            Пропустить
          </BaseButtons>
        </div>
      </div>

      <CheckInSidebar
        isOpen={inCheckIn}
        onClose={() => setInCheckIn(false)}
      ></CheckInSidebar>
    </>
  );
};
