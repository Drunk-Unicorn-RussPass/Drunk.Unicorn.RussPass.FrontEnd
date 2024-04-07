'use client';

import { useState } from 'react';
import { Header } from '@/components/Header/Header';
import { BottomBar } from '@/components/BottomBar/BottomBar';
import { Container } from '@/components/ui/Layout/Container/Container';
import { Toggler } from '@/components/ui/Toggler/Toggler';
import { HiddenPlacesCount } from '@/components/HiddenPlacesCount/HiddenPlacesCount';
import {
  LocationProcessStatuses,
  LocationProcessType,
  ProcessTrack,
  ProcessTrackStatus,
} from '@/api/types';
import { RouteItemsList } from '@/components/RouteItemsList/RouteItemsList';
import { RouteProgress } from '@/components/RouteProgress/RouteProgress';
import { ControlRouteButton } from '@/components/ControlRouteButton/ControlRouteButton';
import { RouteAnalyticBar } from '@/components/RouteAnalyticBar/RouteAnalyticBar';
import Image from 'next/image';
import mapImg from '@/assets/img/map.png';

type RouteActiveProps = {
  params: {
    id: string;
  };
};

const tabs = ['План', 'На карте'];

export default function RouteActive({}: RouteActiveProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [inProgress, setInProgress] = useState(false);
  const processTrack: ProcessTrack = {
    trackId: 123,
    kk: 123,
    countPassedLocations: 123,
    passedCoins: 123,
    passedSecrets: 123,
    steps: 123,
    processStatus: inProgress
      ? ProcessTrackStatus.inWay
      : ProcessTrackStatus.none,
  };
  const processLocations: LocationProcessType[] = [
    {
      id: 12366,
      name: 'Парк Горького',
      address: 'ул Волхонка, 15, Москва ',
      category: 'Парки',
      order: 1,
      image: 'http://fakeimg.pl/64x64',
      isVisible: true,
      reward: 20,
      processStatus: LocationProcessStatuses.passed,
      isSecret: false,
    },
    {
      id: 145,
      name: 'Парк Горького',
      address: 'ул Волхонка, 15, Москва ',
      category: 'Парки',
      order: 1,
      image: 'http://fakeimg.pl/64x64',
      isVisible: true,
      reward: 20,
      processStatus: LocationProcessStatuses.verificationProcess,
      isSecret: true,
    },
    {
      id: 123,
      name: 'Парк Горького',
      address: 'ул Волхонка, 15, Москва ',
      category: 'Парки',
      order: 1,
      image: 'http://fakeimg.pl/64x64',
      isVisible: true,
      reward: 20,
      processStatus: LocationProcessStatuses.none,
      isSecret: true,
    },
    {
      id: 123996,
      name: 'Парк Горького',
      address: 'ул Волхонка, 15, Москва ',
      category: 'Парки',
      order: 1,
      image: 'http://fakeimg.pl/64x64',
      isVisible: true,
      reward: 20,
      processStatus: LocationProcessStatuses.none,
      isSecret: false,
    },
  ];
  const secretsAmount = (() => {
    let amount = 0;

    processLocations.forEach((processLocation) => {
      if (processLocation.isSecret) {
        amount++;
      }
    });

    return amount;
  })();
  const isTrackInProcess =
    processTrack.processStatus === ProcessTrackStatus.inWay;

  return (
    <main className={'pb-[168px] pt-5'}>
      <Header />
      <Container>
        {/*<div className={'pt-4 mb-3'}>*/}
        {/*  <PageTitle title={'Отредактируйте маршрут'} />*/}
        {/*</div>*/}

        {/*<div className={'py-2 mb-1.5'}>*/}
        {/*  <EditRouteButton onClick={() => {}} />*/}
        {/*</div>*/}
        {!(processTrack.processStatus !== ProcessTrackStatus.inWay) && (
          <div className={'pb-5'}>
            <RouteAnalyticBar
              coins={processTrack.passedCoins}
              amountSecret={secretsAmount}
              kk={processTrack.kk}
              passedSecret={processTrack.passedSecrets}
              steps={processTrack.steps}
            />
          </div>
        )}

        <Toggler
          variants={tabs}
          onChangeVariant={setActiveTab}
          activeVariant={activeTab}
        />

        <div className={'pt-3 pb-2'}>
          <RouteProgress
            amount={4}
            passedCount={processTrack.countPassedLocations}
          />
        </div>

        {activeTab === tabs[1] ? (
          <div
            style={{
              width: 'calc(100% + 32px)',
            }}
            className={'relative w-full h-[526px] my-3 mx-[-16px]'}
          >
            <Image src={mapImg} alt={'map'} layout={'fill'} />
          </div>
        ) : (
          <>
            {processTrack.processStatus === ProcessTrackStatus.none && (
              <div className={'py-3'}>
                <HiddenPlacesCount count={secretsAmount} />
              </div>
            )}

            <RouteItemsList locations={processLocations} />
          </>
        )}
      </Container>
      <BottomBar
        topSlot={
          !isTrackInProcess ? (
            <ControlRouteButton
              onClick={() => {
                setInProgress(true);
              }}
              inProgress={inProgress}
            />
          ) : null
        }
      />
    </main>
  );
}
