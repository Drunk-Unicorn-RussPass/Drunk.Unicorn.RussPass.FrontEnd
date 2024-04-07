import { FC, useState } from 'react';
import { LocationProcessStatuses, LocationProcessType } from '@/api/types';
import { BaseButtons } from '@/components/ui/Buttons/BaseButton/BaseButtons';
import { CheckInSidebar } from '@/components/CheckInSidebar/CheckInSidebar';
import Image from 'next/image';
import IncognitoIcon from '@/assets/icons/incognito.svg';
import { Coins } from '@/components/Coins/Coins';

const RouteItemSceleton: FC = () => {
  return (
    <div className={'flex flex-col gap-1'}>
      <div>
        <svg
          width="90"
          height="12"
          viewBox="0 0 90 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="6" height="6" fill="#D9D9D9" />
          <rect y="6" width="6" height="6" fill="#C1C1C1" />
          <rect x="6" width="6" height="6" fill="#C1C1C1" />
          <rect x="6" y="6" width="6" height="6" fill="#E4E4E4" />
          <rect x="12" width="6" height="6" fill="#E4E4E4" />
          <rect x="12" y="6" width="6" height="6" fill="#D9D9D9" />
          <rect x="18" width="6" height="6" fill="#C1C1C1" />
          <rect x="18" y="6" width="6" height="6" fill="#E4E4E4" />
          <rect x="24" width="6" height="6" fill="#E4E4E4" />
          <rect x="24" y="6" width="6" height="6" fill="#D9D9D9" />
          <rect x="30" width="6" height="6" fill="#E4E4E4" />
          <rect x="30" y="6" width="6" height="6" fill="#C1C1C1" />
          <rect x="36" width="6" height="6" fill="#E4E4E4" />
          <rect x="36" y="6" width="6" height="6" fill="#D9D9D9" />
          <rect x="42" width="6" height="6" fill="#E4E4E4" />
          <rect x="42" y="6" width="6" height="6" fill="#D9D9D9" />
          <rect x="48" width="6" height="6" fill="#C1C1C1" />
          <rect x="48" y="6" width="6" height="6" fill="#E4E4E4" />
          <rect x="54" width="6" height="6" fill="#E4E4E4" />
          <rect x="54" y="6" width="6" height="6" fill="#D9D9D9" />
          <rect x="60" width="6" height="6" fill="#C1C1C1" />
          <rect x="60" y="6" width="6" height="6" fill="#E4E4E4" />
          <rect x="66" width="6" height="6" fill="#E4E4E4" />
          <rect x="66" y="6" width="6" height="6" fill="#D9D9D9" />
          <rect x="72" width="6" height="6" fill="#C1C1C1" />
          <rect x="72" y="6" width="6" height="6" fill="#E4E4E4" />
          <rect x="78" width="6" height="6" fill="#C1C1C1" />
          <rect x="78" y="6" width="6" height="6" fill="#E4E4E4" />
          <rect x="84" width="6" height="6" fill="#E4E4E4" />
          <rect x="84" y="6" width="6" height="6" fill="#D9D9D9" />
        </svg>
      </div>

      <div>
        <svg
          width="108"
          height="18"
          viewBox="0 0 108 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="6" height="6" fill="#D9D9D9" />
          <rect y="6" width="6" height="6" fill="#C1C1C1" />
          <rect y="12" width="6" height="6" fill="#E4E4E4" />
          <rect x="6" width="6" height="6" fill="#C1C1C1" />
          <rect x="6" y="6" width="6" height="6" fill="#E4E4E4" />
          <rect x="6" y="12" width="6" height="6" fill="#D9D9D9" />
          <rect x="12" width="6" height="6" fill="#E4E4E4" />
          <rect x="12" y="6" width="6" height="6" fill="#D9D9D9" />
          <rect x="12" y="12" width="6" height="6" fill="#C1C1C1" />
          <rect x="18" width="6" height="6" fill="#C1C1C1" />
          <rect x="18" y="6" width="6" height="6" fill="#E4E4E4" />
          <rect x="18" y="12" width="6" height="6" fill="#D9D9D9" />
          <rect x="24" width="6" height="6" fill="#E4E4E4" />
          <rect x="24" y="6" width="6" height="6" fill="#D9D9D9" />
          <rect x="24" y="12" width="6" height="6" fill="#C1C1C1" />
          <rect x="30" width="6" height="6" fill="#E4E4E4" />
          <rect x="30" y="6" width="6" height="6" fill="#C1C1C1" />
          <rect x="30" y="12" width="6" height="6" fill="#D9D9D9" />
          <rect x="36" width="6" height="6" fill="#E4E4E4" />
          <rect x="36" y="6" width="6" height="6" fill="#D9D9D9" />
          <rect x="36" y="12" width="6" height="6" fill="#C1C1C1" />
          <rect x="42" width="6" height="6" fill="#E4E4E4" />
          <rect x="42" y="6" width="6" height="6" fill="#D9D9D9" />
          <rect x="42" y="12" width="6" height="6" fill="#C1C1C1" />
          <rect x="48" width="6" height="6" fill="#C1C1C1" />
          <rect x="48" y="6" width="6" height="6" fill="#E4E4E4" />
          <rect x="48" y="12" width="6" height="6" fill="#D9D9D9" />
          <rect x="54" width="6" height="6" fill="#E4E4E4" />
          <rect x="54" y="6" width="6" height="6" fill="#D9D9D9" />
          <rect x="54" y="12" width="6" height="6" fill="#C1C1C1" />
          <rect x="60" width="6" height="6" fill="#C1C1C1" />
          <rect x="60" y="6" width="6" height="6" fill="#E4E4E4" />
          <rect x="60" y="12" width="6" height="6" fill="#D9D9D9" />
          <rect x="66" width="6" height="6" fill="#E4E4E4" />
          <rect x="66" y="6" width="6" height="6" fill="#D9D9D9" />
          <rect x="66" y="12" width="6" height="6" fill="#C1C1C1" />
          <rect x="72" width="6" height="6" fill="#C1C1C1" />
          <rect x="72" y="6" width="6" height="6" fill="#E4E4E4" />
          <rect x="72" y="12" width="6" height="6" fill="#D9D9D9" />
          <rect x="78" width="6" height="6" fill="#C1C1C1" />
          <rect x="78" y="6" width="6" height="6" fill="#E4E4E4" />
          <rect x="78" y="12" width="6" height="6" fill="#D9D9D9" />
          <rect x="84" width="6" height="6" fill="#E4E4E4" />
          <rect x="84" y="6" width="6" height="6" fill="#D9D9D9" />
          <rect x="84" y="12" width="6" height="6" fill="#C1C1C1" />
          <rect x="90" width="6" height="6" fill="#C1C1C1" />
          <rect x="90" y="6" width="6" height="6" fill="#E4E4E4" />
          <rect x="90" y="12" width="6" height="6" fill="#D9D9D9" />
          <rect x="96" width="6" height="6" fill="#C1C1C1" />
          <rect x="96" y="6" width="6" height="6" fill="#E4E4E4" />
          <rect x="96" y="12" width="6" height="6" fill="#D9D9D9" />
          <rect x="102" width="6" height="6" fill="#D9D9D9" />
          <rect x="102" y="6" width="6" height="6" fill="#C1C1C1" />
          <rect x="102" y="12" width="6" height="6" fill="#E4E4E4" />
        </svg>
      </div>
    </div>
  );
};

const LocationStatusBadge: FC<{ status: LocationProcessStatuses }> = ({
  status,
}) => {
  switch (status) {
    case LocationProcessStatuses.none || LocationProcessStatuses.inWay: {
      return null;
    }

    case LocationProcessStatuses.verificationProcess: {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="12" fill="#F5F5F5" />
          <path
            d="M15.3008 16.6998L11.0008 12.3998V6.9998H13.0008V11.5998L16.7008 15.2998L15.3008 16.6998ZM2.85078 16.0748C2.63411 15.5915 2.45911 15.0915 2.32578 14.5748C2.19245 14.0581 2.10078 13.5331 2.05078 12.9998H4.07578C4.12578 13.3498 4.19661 13.6998 4.28828 14.0498C4.37995 14.3998 4.49245 14.7415 4.62578 15.0748L2.85078 16.0748ZM2.05078 10.9998C2.10078 10.4665 2.19245 9.9373 2.32578 9.4123C2.45911 8.8873 2.64245 8.38314 2.87578 7.8998L4.62578 8.8998C4.49245 9.23314 4.37995 9.5748 4.28828 9.9248C4.19661 10.2748 4.12578 10.6331 4.07578 10.9998H2.05078ZM6.17578 20.1498C5.72578 19.8165 5.30911 19.454 4.92578 19.0623C4.54245 18.6706 4.18411 18.2498 3.85078 17.7998L5.60078 16.7998C5.83411 17.0998 6.07995 17.379 6.33828 17.6373C6.59661 17.8956 6.87578 18.1415 7.17578 18.3748L6.17578 20.1498ZM5.62578 7.1748L3.85078 6.1748C4.18411 5.7248 4.54245 5.30814 4.92578 4.9248C5.30911 4.54147 5.72578 4.18314 6.17578 3.8498L7.17578 5.6248C6.89245 5.85814 6.62161 6.10397 6.36328 6.3623C6.10495 6.62064 5.85911 6.89147 5.62578 7.1748ZM11.0008 21.9498C10.4674 21.8998 9.93828 21.8081 9.41328 21.6748C8.88828 21.5415 8.38411 21.3581 7.90078 21.1248L8.90078 19.3748C9.23411 19.5081 9.57578 19.6206 9.92578 19.7123C10.2758 19.804 10.6341 19.8748 11.0008 19.9248V21.9498ZM8.90078 4.6248L7.90078 2.8748C8.38411 2.64147 8.88828 2.45814 9.41328 2.3248C9.93828 2.19147 10.4674 2.0998 11.0008 2.0498V4.0748C10.6341 4.1248 10.2758 4.19564 9.92578 4.2873C9.57578 4.37897 9.23411 4.49147 8.90078 4.6248ZM13.0008 21.9498V19.9248C13.3674 19.8748 13.7258 19.804 14.0758 19.7123C14.4258 19.6206 14.7674 19.5081 15.1008 19.3748L16.1008 21.1248C15.6174 21.3581 15.1133 21.5415 14.5883 21.6748C14.0633 21.8081 13.5341 21.8998 13.0008 21.9498ZM15.1008 4.6248C14.7674 4.49147 14.4258 4.37897 14.0758 4.2873C13.7258 4.19564 13.3674 4.1248 13.0008 4.0748V2.0498C13.5341 2.0998 14.0633 2.19147 14.5883 2.3248C15.1133 2.45814 15.6174 2.64147 16.1008 2.8748L15.1008 4.6248ZM17.8258 20.1498L16.8258 18.3748C17.1091 18.1415 17.3799 17.8956 17.6383 17.6373C17.8966 17.379 18.1424 17.1081 18.3758 16.8248L20.1508 17.8248C19.8174 18.2748 19.4591 18.6956 19.0758 19.0873C18.6924 19.479 18.2758 19.8331 17.8258 20.1498ZM18.3758 7.1748C18.1424 6.89147 17.8966 6.62064 17.6383 6.3623C17.3799 6.10397 17.1091 5.85814 16.8258 5.6248L17.8258 3.8498C18.2758 4.16647 18.6924 4.51647 19.0758 4.8998C19.4591 5.28314 19.8091 5.6998 20.1258 6.1498L18.3758 7.1748ZM19.9258 10.9998C19.8758 10.6331 19.8049 10.2748 19.7133 9.9248C19.6216 9.5748 19.5091 9.23314 19.3758 8.8998L21.1258 7.8748C21.3424 8.3748 21.5216 8.8873 21.6633 9.4123C21.8049 9.9373 21.9008 10.4665 21.9508 10.9998H19.9258ZM21.1258 16.0998L19.3758 15.0998C19.5091 14.7665 19.6216 14.4248 19.7133 14.0748C19.8049 13.7248 19.8758 13.3665 19.9258 12.9998H21.9508C21.9008 13.5331 21.8091 14.0623 21.6758 14.5873C21.5424 15.1123 21.3591 15.6165 21.1258 16.0998Z"
            fill="#A6A6A6"
          />
        </svg>
      );
    }

    case LocationProcessStatuses.passed: {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="12" fill="#FFCF08" />
          <path
            d="M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
            fill="white"
          />
        </svg>
      );
    }

    default: {
      return null;
    }
  }
};

const SecretSlot: FC = () => {
  return (
    <div
      className={
        'w-full flex gap-2 items-center py-2 px-3 text-xs text-pink-3 font-medium bg-pink-2'
      }
    >
      <IncognitoIcon />
      <span>Вам открылось секретное место!</span>
    </div>
  );
};

type BaseRouteItemProps = {
  location: LocationProcessType;
  compactMode?: boolean;
  isFullSecretTrack: boolean;
};

const BaseRouteItem: FC<BaseRouteItemProps> = ({
  location,
  compactMode = false,
  isFullSecretTrack,
}) => {
  const isBlured =
    location.processStatus === LocationProcessStatuses.none &&
    isFullSecretTrack;

  return (
    <div className={'flex gap-4 relative'}>
      <div className={'relative'}>
        <Image
          alt={'image'}
          width={64}
          height={64}
          src={location.image}
          className={'size-[64px] rounded-[12px]'}
        />

        <div
          className={'absolute bottom-[-8px] left-[50%] translate-x-[-50%] '}
        >
          <Coins count={location.reward} withPlaceholder />
        </div>
      </div>

      <div className={'flex flex-col justify-between'}>
        {isBlured ? (
          <RouteItemSceleton />
        ) : (
          <>
            <div className={'text-natural-3 text-xs'}>
              <span>{location.category}</span>
            </div>
            <h3>{location.name}</h3>
            <span className={'text-natural-3 text-xs'}>{location.address}</span>
          </>
        )}
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
              strokeWidth="1.6"
            />
            <path
              d="M10.7871 16.007C10.7871 16.4489 11.1453 16.807 11.5871 16.807C12.0289 16.807 12.3871 16.4489 12.3871 16.007C12.3871 15.5652 12.0289 15.207 11.5871 15.207C11.1453 15.207 10.7871 15.5652 10.7871 16.007Z"
              stroke="#A6A6A6"
              strokeWidth="1.6"
            />
            <path
              d="M15.2077 16.007C15.2077 16.4489 15.5659 16.807 16.0077 16.807C16.4495 16.807 16.8077 16.4489 16.8077 16.007C16.8077 15.5652 16.4495 15.207 16.0077 15.207C15.5659 15.207 15.2077 15.5652 15.2077 16.007Z"
              stroke="#A6A6A6"
              strokeWidth="1.6"
            />
          </svg>
        </div>
      )}

      {!compactMode && (
        <div
          className={
            'absolute size-6 flex items-center justify-center rounded-full text-xs top-[-8px] left-[-8px] shadow-sm'
          }
        >
          <LocationStatusBadge status={location.processStatus} />
        </div>
      )}
    </div>
  );
};

export type RouteItem = {
  location: LocationProcessType;
  isFullSecretTrack: boolean;
  onCheckinUpload: (locationId: number) => void;
  onLocationSkip: (locationId: number) => void;
};

const buttonStyles = 'w-full h-9 flex items-center justify-center';

export const RouteItem: FC<RouteItem> = ({
  location,
  isFullSecretTrack,
  onCheckinUpload,
  onLocationSkip,
}) => {
  const [inCheckIn, setInCheckIn] = useState(false);

  if (!location.isVisible) {
    return null;
  }

  if (location.processStatus !== LocationProcessStatuses.inWay) {
    return (
      <BaseRouteItem
        location={location}
        isFullSecretTrack={isFullSecretTrack}
      />
    );
  }

  return (
    <>
      <div
        className={
          'w-full flex flex-col rounded-[12px] bg-natural-7 overflow-hidden'
        }
      >
        {location.isSecret && <SecretSlot />}
        <div className={'p-3 pt-2'}>
          <div className={'w-full flex items-center justify-between'}>
            <span className={'text-xs text-natural-3'}>
              Вы в пути до точки:
            </span>

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
                strokeWidth="1.6"
              />
              <path
                d="M10.7871 16.007C10.7871 16.4489 11.1453 16.807 11.5871 16.807C12.0289 16.807 12.3871 16.4489 12.3871 16.007C12.3871 15.5652 12.0289 15.207 11.5871 15.207C11.1453 15.207 10.7871 15.5652 10.7871 16.007Z"
                stroke="#A6A6A6"
                strokeWidth="1.6"
              />
              <path
                d="M15.2077 16.007C15.2077 16.4489 15.5659 16.807 16.0077 16.807C16.4495 16.807 16.8077 16.4489 16.8077 16.007C16.8077 15.5652 16.4495 15.207 16.0077 15.207C15.5659 15.207 15.2077 15.5652 15.2077 16.007Z"
                stroke="#A6A6A6"
                strokeWidth="1.6"
              />
            </svg>
          </div>

          <div className={'mb-3'}>
            <BaseRouteItem
              location={location}
              compactMode
              isFullSecretTrack={isFullSecretTrack}
            />
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
              onClick={() => onLocationSkip(location.id)}
              variant={'secondary'}
            >
              Пропустить
            </BaseButtons>
          </div>
        </div>
      </div>

      <CheckInSidebar
        isOpen={inCheckIn}
        onClose={() => setInCheckIn(false)}
        locationName={location.name}
        locationId={location.id}
        onCheckinUpload={onCheckinUpload}
        onLocationSkip={onLocationSkip}
      ></CheckInSidebar>
    </>
  );
};
