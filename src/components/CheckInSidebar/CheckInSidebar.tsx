import React, { FC } from 'react';
import Sheet from 'react-modal-sheet';
import { Container } from '@/components/ui/Layout/Container/Container';
import { BaseButtons } from '@/components/ui/Buttons/BaseButton/BaseButtons';
import { useCamera } from '@/hooks/useCamera';

export type CheckInSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CheckInSidebar: FC<CheckInSidebarProps> = ({
  isOpen,
  onClose,
}) => {
  const [CameraWrapper, imgSrc, onClick] = useCamera();

  // @ts-ignore
  return (
    <div>
      <Sheet isOpen={isOpen} onClose={onClose}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Container className={'h-full'}>
              <div className={'w-full flex flex-col h-full pb-5'}>
                <div className={'w-full flex items-center justify-center'}>
                  <svg
                    width="120"
                    height="110"
                    viewBox="0 0 120 110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.2477 87.5025C23.2431 87.5025 16.1231 82.3773 13.5374 74.747L13.3626 74.172C12.7527 72.1515 12.4972 70.4522 12.4972 68.752V34.6606L0.367068 75.1518C-1.19297 81.1074 2.36212 87.2819 8.32688 88.927L85.6445 109.633C86.585 109.878 87.5527 110.002 88.5246 110.003C93.5042 110.003 98.0545 106.698 99.33 101.827L103.835 87.5025H31.2477ZM44.9984 35.0011C50.5138 35.0011 54.998 30.5158 54.998 25.0006C54.998 19.4853 50.5138 15 44.9984 15C39.4829 15 34.9978 19.4856 34.9978 25.0006C34.9978 30.5156 39.4831 35.0011 44.9984 35.0011Z"
                      fill="#D9D9D9"
                    />
                    <path
                      d="M107.499 0H32.4971C25.6077 0 19.9971 5.61061 19.9971 12.5009V67.5017C19.9971 74.3923 25.6077 80.0027 32.4971 80.0027H107.499C114.39 80.0027 120 74.3923 120 67.5017V12.5009C120 5.61061 114.39 0 107.499 0ZM32.4971 10.0006H107.499C108.88 10.0006 109.999 11.1204 109.999 12.5009V47.9968L94.2044 29.566C92.5288 27.6012 90.1037 26.5509 87.4988 26.4916C84.9089 26.5061 82.4788 27.656 80.8189 29.6464L62.248 51.9365L56.1979 45.9012C52.7783 42.4815 47.2129 42.4815 43.7978 45.9012L29.9976 59.6968V12.5007C29.9976 11.1202 31.1175 10.0006 32.4971 10.0006Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                </div>

                <div className={'w-full mt-auto'}>
                  <CameraWrapper>
                    <BaseButtons
                      className={'w-full h-12 text-base font-semibold'}
                      onClick={onClick}
                      centeredContent
                    >
                      <span>Снять фото</span>
                    </BaseButtons>
                  </CameraWrapper>
                  {/*<BaseButtons onClick={() => {}}>*/}
                  {/*  Проп*/}
                  {/*</BaseButtons>*/}
                </div>
              </div>
            </Container>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
};
