import { BottomBar } from '@/components/BottomBar/BottomBar';
import { Header } from '@/components/Header/Header';
import { RootRoutes } from '@/app/routes';

export default function Catalog() {
  return (
    <main className="">
      <Header />
      <BottomBar currentRoutePath={RootRoutes.catalog} />
    </main>
  );
}
