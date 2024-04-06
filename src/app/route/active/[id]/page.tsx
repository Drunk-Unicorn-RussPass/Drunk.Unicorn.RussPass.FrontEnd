'use client';

import { useState } from 'react';
import { PageTitle } from '@/components/ui/Layout/PageTitle/PageTitle';
import { Header } from '@/components/Header/Header';
import { BottomBar } from '@/components/BottomBar/BottomBar';
import { Container } from '@/components/ui/Layout/Container/Container';
import { Toggler } from '@/components/ui/Toggler/Toggler';
import { EditRouteButton } from '@/components/EditRouteButton/EditRouteButton';
import { HiddenPlacesCount } from '@/components/HiddenPlacesCount/HiddenPlacesCount';
import { LocationProcessStatuses } from '@/apollo/types';
import { StartRouteButton } from '@/components/StartRouteButton/StartRouteButton';
import { RouteItemsList } from '@/components/RouteItemsList/RouteItemsList';

type RouteActiveProps = {
  params: {
    id: string;
  };
};

const tabs = ['План', 'На карте'];

export default function RouteActive({}: RouteActiveProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <main>
      <Header />
      <Container>
        <div className={'pt-4 mb-3'}>
          <PageTitle title={'Отредактируйте маршрут'} />
        </div>

        <div className={'py-2 mb-1.5'}>
          <EditRouteButton onClick={() => {}} />
        </div>

        <Toggler
          variants={tabs}
          onChangeVariant={setActiveTab}
          activeVariant={activeTab}
        />
        <div className={'py-3'}>
          <HiddenPlacesCount count={1} />
        </div>

        <RouteItemsList
          locations={[
            {
              id: 123,
              name: 'Парк Горького',
              address: 'ул Волхонка, 15, Москва ',
              category: 'Парки',
              order: 1,
              image: 'https://fakeimg.pl/64x64',
              isVisible: true,
              reward: 20,
              processStatus: LocationProcessStatuses.noPassed,
            },
            {
              id: 145,
              name: 'Парк Горького',
              address: 'ул Волхонка, 15, Москва ',
              category: 'Парки',
              order: 1,
              image: 'https://fakeimg.pl/64x64',
              isVisible: true,
              reward: 20,
              processStatus: LocationProcessStatuses.inWay,
            },
          ]}
        />
      </Container>
      <BottomBar topSlot={<StartRouteButton onClick={() => {}} />} />
    </main>
  );
}
