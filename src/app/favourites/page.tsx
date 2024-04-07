import { BottomBar } from '@/components/BottomBar/BottomBar';
import { Header } from '@/components/Header/Header';
import { RootRoutes } from '@/app/routes';
import { redirect } from 'next/navigation';

export default function Favourites() {
  redirect(RootRoutes.routes);
  return (
    <main className="">
      <Header />
      <BottomBar currentRoutePath={RootRoutes.favourites} />
    </main>
  );
}
