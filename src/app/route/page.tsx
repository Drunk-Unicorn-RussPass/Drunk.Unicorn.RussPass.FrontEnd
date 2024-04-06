import { BottomBar } from '@/components/BottomBar/BottomBar';
import { Header } from '@/components/Header/Header';
import { RootRoutes } from '@/app/routes';

export default function Route() {
  return (
    <main className="">
      <Header />
      <BottomBar currentRoutePath={RootRoutes.routes} />
    </main>
  );
}
