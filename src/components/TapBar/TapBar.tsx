import { FC, ReactNode } from 'react';
import cx from 'classnames';
import LogoIcon from '@/assets/icons/logo.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import BurgerIcon from '@/assets/icons/burger.svg';
import RouteIcon from '@/assets/icons/route.svg';
import ActionsIcon from '@/assets/icons/actions.svg';
import { RootRoutes } from '@/app/routes';
import Link from 'next/link';

export type RoutsType = {
  icon: ReactNode;
  name: string;
  path: RootRoutes;
};

const routs: RoutsType[] = [
  {
    icon: <LogoIcon />,
    name: 'Главная',
    path: RootRoutes.main,
  },
  {
    icon: <BurgerIcon />,
    name: 'Каталог',
    path: RootRoutes.catalog,
  },
  {
    icon: <ActionsIcon />,
    name: 'События',
    path: RootRoutes.actions,
  },
  {
    icon: <RouteIcon />,
    name: 'Маршрут',
    path: RootRoutes.routes,
  },
  {
    icon: <HeartIcon />,
    name: 'Избранное',
    path: RootRoutes.favourites,
  },
];

type RouteItemProps = {
  route: RoutsType;
  isSelected?: boolean;
};

const RouteItem: FC<RouteItemProps> = ({ route, isSelected }) => {
  return (
    <li>
      <Link
        href={`/${route.path}`}
        className={cx(
          'flex w-[69px] flex-col items-center text-xs leading-snug',
          {
            'text-natural-1': isSelected,
            'text-natural-4': !isSelected,
          },
        )}
      >
        <span className={'pb-1'}>{route.icon}</span> <span>{route.name}</span>
      </Link>
    </li>
  );
};

export type TapBarProps = {
  currentRoutePath?: RootRoutes;
};

export const TapBar: FC<TapBarProps> = ({ currentRoutePath }) => {
  return (
    <ul className={'grid grid-cols-5 pt-1.5 pb-3 px-[14px]'}>
      {routs.map((route) => {
        return (
          <RouteItem
            route={route}
            key={route.name}
            isSelected={route.path === currentRoutePath}
          />
        );
      })}
    </ul>
  );
};
