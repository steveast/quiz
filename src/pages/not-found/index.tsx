import React from 'react';
import { Placeholder } from '@telegram-apps/telegram-ui';

export const NotFound = () => {
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
