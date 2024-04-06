import { FC } from 'react';

export type PageTitleProps = {
  title: string;
};

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return <h1 className={'text-2xl font-protoGrotesk'}>{title}</h1>;
};
