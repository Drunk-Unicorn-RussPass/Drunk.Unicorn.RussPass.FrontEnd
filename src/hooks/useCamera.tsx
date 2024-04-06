import { ChangeEvent, FC, PropsWithChildren, useId, useState } from 'react';

export const useCamera = () => {
  const [imgSrc, setImgSrc] = useState<string | ArrayBuffer | null | undefined>(
    null,
  );
  const inputId = useId();

  const onChange = (event: ChangeEvent) => {
    const file = event.target?.files[0];

    if (!file.type.startsWith('image/')) {
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      // Пример создания HTML img элемента с выбранным изображением
      const imgSrc = e.target?.result;
      setImgSrc(imgSrc);
    };

    reader.readAsDataURL(file);
  };

  const Wrapper: FC<PropsWithChildren> = ({ children }) => {
    // @ts-ignore
    return (
      <label htmlFor={inputId}>
        {children}
        <input
          id={inputId}
          className={'absolute'}
          accept="image/*"
          capture="camera"
          onChange={onChange}
        />
      </label>
    );
  };

  return [Wrapper, imgSrc] as [FC, string | ArrayBuffer | null | undefined];
};
