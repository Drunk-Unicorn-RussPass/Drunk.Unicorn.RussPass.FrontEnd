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
import mapImg from '@/assets/img/map.jpg';
import parkImg from '@/assets/img/park.png';
import bridgeImg from '@/assets/img/bridge.png';
import museumImg from '@/assets/img/museum.png';
import nonSoloImg from '@/assets/img/non-solo.png';
import unicornImg from '@/assets/img/unicorn.png';

type RouteActiveProps = {
  params: {
    id: string;
  };
};

const tabs = ['План', 'На карте'];

export default function RouteActive({}: RouteActiveProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [inProgress, setInProgress] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<number>(0);
  const [skippedLocations, setSkippedLocations] = useState<number[]>([]);
  const passedLocationsCount = currentLocation - 1;
  let verifyPassedLocationCount =
    passedLocationsCount - skippedLocations.length;
  verifyPassedLocationCount =
    verifyPassedLocationCount < 0 ? 0 : verifyPassedLocationCount;

  const processTrack: ProcessTrack = {
    trackId: 1,
    kk: passedLocationsCount * 1999,
    countPassedLocations: 0,
    passedCoins: verifyPassedLocationCount * 20,
    passedSecrets: 0,
    steps: passedLocationsCount * 1024,
    processStatus: inProgress
      ? ProcessTrackStatus.inWay
      : ProcessTrackStatus.none,
  };
  let processLocations: LocationProcessType[] = [
    {
      id: 1,
      name: 'Парк Горького',
      address: 'ул Волхонка, 15, Москва ',
      category: 'Парки',
      order: 1,
      image: parkImg.src,
      isVisible: true,
      reward: 20,
      processStatus: LocationProcessStatuses.passed,
      isSecret: false,
    },
    {
      id: 2,
      name: 'Памятник единоржки',
      address: 'ул Волхонка, 15, Москва ',
      category: 'Памятники',
      order: 1,
      image: unicornImg.src,
      isVisible: true,
      reward: 20,
      processStatus: LocationProcessStatuses.verificationProcess,
      isSecret: false,
    },
    {
      id: 3,
      name: 'Крымский мост',
      address: 'ул Волхонка, 15, Москва ',
      category: 'Архитектура',
      order: 1,
      image: bridgeImg.src,
      isVisible: true,
      reward: 20,
      processStatus: LocationProcessStatuses.none,
      isSecret: false,
    },
    {
      id: 4,
      name: 'None solo',
      address: 'ул Волхонка, 15, Москва ',
      category: 'Рестораны',
      order: 1,
      image: nonSoloImg.src,
      isVisible: true,
      reward: 20,
      processStatus: LocationProcessStatuses.none,
      isSecret: false,
    },
    {
      id: 5,
      name: 'Музей парка горького',
      address: 'ул Волхонка, 15, Москва ',
      category: 'Музеи',
      order: 1,
      image: museumImg.src,
      isVisible: true,
      reward: 20,
      processStatus: LocationProcessStatuses.none,
      isSecret: false,
    },
  ];
  processLocations = processLocations.map((location) => {
    let status = LocationProcessStatuses.none;

    if (!currentLocation || location.id > currentLocation) {
      status = LocationProcessStatuses.none;
    } else if (currentLocation === location.id) {
      status = LocationProcessStatuses.inWay;
    } else if (currentLocation > location.id) {
      status = LocationProcessStatuses.passed;
    }

    return {
      ...location,
      processStatus: status,
    };
  });

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
  const onNextLocation = (prevLocationId: number) => {
    setCurrentLocation(prevLocationId + 1);
  };
  const onSkipLocation = (id: number) => {
    //   вызываем метод api
    setSkippedLocations((prev) => [...prev, id]);
    onNextLocation(id);
  };
  const onCheckinUpload = (locationId: number) => {
    onNextLocation(locationId);
  };

  return (
    <main className={'pb-[168px] pt-5'}>
      <Header />
      <Container>
        {processTrack.processStatus !== ProcessTrackStatus.none && (
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

        {processTrack.processStatus !== ProcessTrackStatus.none && (
          <div className={'pt-3 pb-2'}>
            <RouteProgress
              amount={processLocations.length}
              passedCount={currentLocation - 1}
            />
          </div>
        )}

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
            {processTrack.processStatus === ProcessTrackStatus.none &&
              Boolean(secretsAmount) && (
                <div className={'py-3'}>
                  <HiddenPlacesCount count={secretsAmount} />
                </div>
              )}

            <RouteItemsList
              locations={processLocations}
              isFullSecretTrack={false}
              onCheckinUpload={onCheckinUpload}
              onLocationSkip={onSkipLocation}
            />
          </>
        )}
      </Container>
      <BottomBar
        topSlot={
          !isTrackInProcess ? (
            <ControlRouteButton
              onClick={() => {
                setInProgress(true);
                setCurrentLocation(1);
              }}
              inProgress={inProgress}
            />
          ) : null
        }
      />
    </main>
  );
}
