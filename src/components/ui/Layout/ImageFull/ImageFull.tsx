import { FC } from 'react';
import Image from 'next/image';

export type ImageFullProps = {
  src: string;
  alt: string;
  className: string;
};

export const ImageFull: FC<ImageFullProps> = ({ src, alt, className }) => {
  return (
    <div className={'relative w-full ' + className}>
      <Image src={src} alt={alt} layout={'fill'} />
    </div>
  );
};
