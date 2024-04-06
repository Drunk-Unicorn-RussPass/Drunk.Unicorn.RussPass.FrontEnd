import { FC, ReactNode } from 'react';
import cx from 'classnames';
import LogoIcon from '@/assets/icons/logo.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import BurgerIcon from '@/assets/icons/burger.svg';
import RouteIcon from '@/assets/icons/route.svg';
import { RootRoutes } from '@/app/routes';

export type RoutsType = {
  icon: ReactNode;
  name: string;
  path: string;
  id: RootRoutes;
};

const routs: RoutsType[] = [
  {
    icon: <LogoIcon />,
    name: 'Главная',
    path: '/',
    id: RootRoutes.main,
  },
  {
    icon: <BurgerIcon />,
    name: 'Каталог',
    path: '/',
    id: RootRoutes.catalog,
  },
  {
    icon: <RouteIcon />,
    name: 'Маршрут',
    path: '/',
    id: RootRoutes.routes,
  },
  {
    icon: <HeartIcon />,
    name: 'Избранное',
    path: '/',
    id: RootRoutes.favourites,
  },
];

type RouteItemProps = {
  route: RoutsType;
  isSelected?: boolean;
};

const RouteItem: FC<RouteItemProps> = ({ route, isSelected }) => {
  return (
    <li
      className={cx('flex flex-col items-center text-xs leading-snug', {
        'text-natural-1': isSelected,
        'text-natural-4': !isSelected,
      })}
    >
      <span className={'pb-1'}>{route.icon}</span> <span>{route.name}</span>
    </li>
  );
};

export type TapBarProps = {
  currentRouteId?: RootRoutes;
};

export const TapBar: FC<TapBarProps> = ({ currentRouteId }) => {
  return (
    <ul className={'grid grid-cols-4 pt-1.5 pb-3'}>
      {routs.map((route) => {
        return (
          <RouteItem
            route={route}
            key={route.name}
            isSelected={route.id === currentRouteId}
          />
        );
      })}
    </ul>
  );
};
