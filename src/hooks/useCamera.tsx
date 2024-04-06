import {
  ChangeEvent,
  FC,
  PropsWithChildren,
  useId,
  useRef,
  useState,
} from 'react';

export const useCamera = () => {
  const [imgSrc, setImgSrc] = useState<string | ArrayBuffer | null | undefined>(
    null,
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();

  const onChange = (event: ChangeEvent) => {
    // const file = event.target?.files[0];

    // if (!file.type.startsWith('image/')) {
    //   return;
    // }

    const reader = new FileReader();
    reader.onload = function (e) {
      // Пример создания HTML img элемента с выбранным изображением
      const imgSrc = e.target?.result;
      setImgSrc(imgSrc);
    };

    // reader.readAsDataURL(file);
  };

  const onClick = () => {
    console.log('onClick', inputRef.current);
    inputRef.current?.click();
  };

  const Wrapper: FC<PropsWithChildren> = ({ children }) => {
    // @ts-ignore
    return (
      <label>
        {children}
        <input
          id={inputId}
          className={'absolute hidden'}
          accept="image/*"
          // capture="camera"
          onChange={onChange}
          ref={inputRef}
        />
      </label>
      // <label htmlFor={inputId}>
      // </label>
    );
  };

  return [Wrapper, imgSrc, onClick] as [
    FC<PropsWithChildren>,
    string | ArrayBuffer | null | undefined,
    () => void,
  ];
};
