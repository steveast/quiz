import React from 'react';
import { IStore } from '@/components/App.tsx';
import { Placeholder } from '@telegram-apps/telegram-ui';

interface INotFoundProps extends IStore {

}

type IProps = INotFoundProps;

export const NotFound = (props: IProps) => {
  React.useEffect(() => {

  }, []);
  return (
    <Placeholder
      description="Вы перешли по ссылке без параметров"
      header="Такой страницы нет"
    >
      <img
        alt="Telegram sticker"
        src="https://xelene.me/telegram.gif"
        style={{
          display: 'block',
          height: '144px',
          width: '144px'
        }}
      />
    </Placeholder>
  );
};
