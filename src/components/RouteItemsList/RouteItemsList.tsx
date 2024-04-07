import { FC } from 'react';
import { LocationProcessType } from '@/api/types';
import { RouteItem } from '@/components/RouteItem/RouteItem';

export type RouteItemsListProps = {
  locations: LocationProcessType[];
};

export const RouteItemsList: FC<RouteItemsListProps> = ({ locations }) => {
  return (
    <ul className={'flex flex-col'}>
      {locations.map((location) => {
        return (
          <li key={location.id} className={'py-3'}>
            <RouteItem location={location} />
          </li>
        );
      })}
    </ul>
  );
};
