import { FC } from 'react';
import { LocationProcessType } from '@/api/types';
import { RouteItem } from '@/components/RouteItem/RouteItem';

export type RouteItemsListProps = {
  locations: LocationProcessType[];
  isFullSecretTrack: boolean;
  onCheckinUpload: (locationId: number) => void;
  onLocationSkip: (locationId: number) => void;
};

export const RouteItemsList: FC<RouteItemsListProps> = ({
  locations,
  onCheckinUpload,
  onLocationSkip,
  isFullSecretTrack,
}) => {
  return (
    <ul className={'flex flex-col'}>
      {locations.map((location) => {
        return (
          <li key={location.id} className={'py-3'}>
            <RouteItem
              location={location}
              onCheckinUpload={onCheckinUpload}
              onLocationSkip={onLocationSkip}
              isFullSecretTrack={isFullSecretTrack}
            />
          </li>
        );
      })}
    </ul>
  );
};
