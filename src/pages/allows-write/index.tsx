import { useEffect, useMemo, useState } from 'react';
import { Modal, Placeholder } from '@telegram-apps/telegram-ui';
import { mainButton, on } from '@telegram-apps/sdk-react';
import Sender from '@/helpers/Sender.ts';
import { Navigate } from 'react-router-dom';
import { IStore } from '@/components/App.tsx';

export const AllowsWrite = (props: IStore) => {
  const [isAllowed, setAllowed] = useState(false);
  const sender = useMemo(() => new Sender(), []);
  
  useEffect(() => {
    const clickListener = () => {
      sender.send('web_app_request_write_access');
    };
    sender.subscribe(
      on('write_access_requested', ({ status }) => {
        if (status === 'allowed') {
          setAllowed(true);
          props.setStore({ user: { allowsWriteToPm: true } } as any);
          mainButton.setParams({
            isVisible: false,
          });
        }
      })
    );
    sender.send('web_app_request_write_access');
    mainButton.setParams({
      isVisible: true,
      text: 'Получить разрешение'
    });
    mainButton.onClick(clickListener);
    
    return () => {
      sender.off();
      mainButton.offClick(clickListener);
    };
  }, []);
  
  if (isAllowed) {
    return <Navigate to="/" replace />;
  }
  
  return (
    <Modal
      open
    >
      <Placeholder
        description="Необходимо подписаться на бота чтобы продолжить."
        header="Quiz: пройти опрос"
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
    </Modal>
  );
};
