import {
  ChangeEvent,
  FC,
  PropsWithChildren,
  useId,
  useRef,
  useState,
} from 'react';

type ImgSrcType = string | ArrayBuffer | null | undefined;
type WrapperType = FC<PropsWithChildren>;

export const useCamera = () => {
  const [imgData, setImgData] = useState<{ src: ImgSrcType; name: string }>({
    src: '',
    name: '',
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];

    if (!file?.type.startsWith('image/')) {
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      // Пример создания HTML img элемента с выбранным изображением
      const imgSrc = e.target?.result;

      setImgData({ src: imgSrc, name: file.name });
    };

    reader.readAsDataURL(file);
  };

  const onClick = () => {
    inputRef.current?.click();
  };

  const Wrapper: WrapperType = ({ children }) => {
    return (
      <>
        <label htmlFor={inputId}>{children}</label>
        <input
          style={{
            display: 'none',
          }}
          id={inputId}
          type={'file'}
          accept="image/*"
          capture="environment"
          onChange={onChange}
          ref={inputRef}
        />
      </>
    );
  };

  return [Wrapper, imgData, onClick] as [
    WrapperType,
    { src: ImgSrcType; name: string },
    () => void,
  ];
};
