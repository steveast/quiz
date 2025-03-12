import React from 'react';
import { Modal, Placeholder } from '@telegram-apps/telegram-ui';

interface IAllowsWriteProps {

}

type IProps = IAllowsWriteProps;

export const AllowsWrite = (props: IProps) => {
  React.useEffect(() => {

  }, []);
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
