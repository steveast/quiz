import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Page } from '@/components/Page.tsx';
import { Placeholder } from '@telegram-apps/telegram-ui';
import { useForm } from '@mantine/form';
import { mainButton, miniApp, useLaunchParams } from '@telegram-apps/sdk-react';
import { Navigate } from 'react-router-dom';
import { IStore } from '@/components/App.tsx';
import { Section1 } from '@/pages/main-page/section1.tsx';
import { Section2 } from '@/pages/main-page/section2.tsx';


export const MainPage: FC = (props: IStore) => {
  const form = useForm({
    mode: 'controlled',
    initialValues: {
      q1: undefined,
      q2: undefined,
      q3: undefined,
    },
  });
  const lp = useLaunchParams();
  const user = props.store.user;
  const [step, setStep] = useState(0);
  const [isFinished, setFinish] = useState(false);
  const enableButton = (ev: any) => {
    form.setFieldValue(ev.currentTarget.name, ev.currentTarget.value);
    mainButton.setParams({
      isVisible: true,
    });
  }
  
  const PlaceholderImage = () => (
    <img
      alt="Telegram sticker"
      src="https://xelene.me/telegram.gif"
      style={{
        display: 'block',
        width: 144,
        height: 144,
      }}
    />
  );
  const stepIncrease = () => {
    setStep((prev) => prev + 1);
    mainButton.setParams({
      isVisible: false,
    });
  }
  
  useEffect(() => {
    mainButton.setParams({
      hasShineEffect: true,
      isEnabled: true,
      isVisible: false,
      text: 'Продолжить'
    });
    mainButton.onClick(stepIncrease);
  }, []);
  
  useEffect(() => {
    if (step === 3 && !form.submitting) {
      mainButton.setParams({
        isVisible: true,
        text: 'Отправить'
      });
      mainButton.offClick(stepIncrease);
      form.setSubmitting(true);
      mainButton.onClick(() => {
        fetch('https://dashboard.fstrk.io/api/partners/push-messages/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'bot-key': '5306b774-7c17-4e0e-aa18-505177447ede',
          },
          body: JSON.stringify({
            chat: { telegram_id: props.store.user!.id, },
            content: {
              type: "NODE",
              node: {
                name: "Прошел квиз"
              },
              get_params: form.values,
            }
          }),
        }).then(() => {
          setFinish(true);
          miniApp.close();
        })
      });
    }
  }, [step]);
  
  if (!user?.allowsWriteToPm) {
    return <Navigate to="/allows-write" replace />;
  }
  
  if (!lp.startParam) {
    return <Navigate to="/not-found" replace />;
  }
  
  return (
    <Page back={false}>
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values);
        })}
      >
        {lp.startParam === 'quiz1' && <Section1 step={step} enableButton={enableButton} />}
        {lp.startParam !== 'quiz2' && <Section2 step={step} enableButton={enableButton} />}
        
        
        {(
          (step > 2 && lp.startParam === 'quiz1')
          || (step > 8 && lp.startParam === 'quiz2')
          || (step > 1 && lp.startParam === 'quiz3')
        ) && (
          <Placeholder
            header="Опрос завершён!"
            description={isFinished ? 'Данные отправлены, спасибо!' : 'Отправьте данные боту'}
          >
            <PlaceholderImage />
          </Placeholder>
        )}
      </form>
    </Page>
  );
};
