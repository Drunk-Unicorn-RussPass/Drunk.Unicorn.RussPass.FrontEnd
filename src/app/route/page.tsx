import { BottomBar } from '@/components/BottomBar/BottomBar';
import { Header } from '@/components/Header/Header';
import { RootRoutes } from '@/app/routes';
import { PageTitle } from '@/components/ui/Layout/PageTitle/PageTitle';
import { Container } from '@/components/ui/Layout/Container/Container';

export default function Route() {
  return (
    <main className="">
      <Header />
      <Container>
        <div className={'mb-[10px] mt-4'}>
          <PageTitle title={'Маршруты'} />
        </div>
        <p className={'mb-3'}>
          Проходи маршруты, разгадывай секретные места и получай за это бонусы и
          награды
        </p>
        <div className={'flex w-full justify-center'}></div>
      </Container>
      <BottomBar currentRoutePath={RootRoutes.routes} />
    </main>
  );
}
