import { FC } from 'react';
import { Container } from '@/components/ui/Layout/Container/Container';
import HeaderLogoIcon from '@/assets/icons/header-logo.svg';
import UserIcon from '@/assets/icons/user.svg';
import { Coins } from '@/components/Coins/Coins';

export type HeaderProps = {};

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className={'w-full h-[48px]'}>
      <div
        className={
          'w-full fixed top-0 left-0 right-0 py-1.5 bg-natural-8 shadow-sm'
        }
      >
        <Container>
          <div className={'flex justify-between'}>
            <HeaderLogoIcon />

            <div className={'flex items-center'}>
              <Coins count={100} withPlaceholder={true} />
              <UserIcon />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
