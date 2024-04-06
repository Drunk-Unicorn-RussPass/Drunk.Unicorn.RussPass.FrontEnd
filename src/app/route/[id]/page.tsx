'use client';

import { FC, useState } from 'react';
import { PageTitle } from '@/components/ui/Layout/PageTitle/PageTitle';
import { Header } from '@/components/Header/Header';
import { BottomBar } from '@/components/BottomBar/BottomBar';
import { Container } from '@/components/ui/Layout/Container/Container';
import { Toggler } from '@/components/ui/Toggler/Toggler';
import { EditRouteButton } from '@/components/EditRouteButton/EditRouteButton';

type Props = {
  id: number;
};

const tabs = ['План', 'На карте'];

export default function Page({ id }: Props) {
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
      </Container>
      <BottomBar />
    </main>
  );
}
