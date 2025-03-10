import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Page } from '@/components/Page.tsx';
import { Banner, Modal, Placeholder, Section } from '@telegram-apps/telegram-ui';
import { useForm } from '@mantine/form';
import { Radio } from '@mantine/core';
import { initData, mainButton, miniApp } from '@telegram-apps/sdk-react';


export const MainPage: FC = () => {
  const form = useForm({
    mode: 'controlled',
    initialValues: {
      q1: undefined,
      q2: undefined,
      q3: undefined,
    },
  });
  const user = initData.user();
  const [step, setStep] = useState(0);
  const [isFinished, setFinish] = useState(false);
  const enableButton = (ev: any) => {
    form.setFieldValue(ev.currentTarget.name, ev.currentTarget.value);
    mainButton.setParams({
      isVisible: true,
    });
  }
  const sectionStyle = {
    opacity: 0,
    height: 0,
    overflow: 'hidden',
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
            chat: { telegram_id: initData.user()!.id, },
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
  
  return (
    <Page back={false}>
      {user?.allowsWriteToPm && (
        <form
          onSubmit={form.onSubmit((values) => {
            console.log(values);
          })}
        >
          <Section header="Вопрос 1" style={step === 0 ? undefined : sectionStyle}>
            <Banner
              header="Кого Колобок встретил вторым?"
              subheader="Выберите правильный ответ"
            >
              <Radio.Group
                name="q1"
                withAsterisk
              >
                <Radio
                  label="Медведь"
                  value="Медведь"
                  mb="md"
                  onClick={enableButton}
                />
                <Radio
                  label="Заяц"
                  value="Заяц"
                  mb="md"
                  onClick={enableButton}
                />
                <Radio
                  label="Лиса"
                  value="Лиса"
                  mb="md"
                  onClick={enableButton}
                />
                <Radio
                  label="Волк"
                  value="Волк"
                  mb="md"
                  onClick={enableButton}
                />
              </Radio.Group>
            </Banner>
          </Section>
          
          <Section header="Вопрос 2" style={step === 1 ? undefined : sectionStyle}>
            <Banner
              header="Какой ракеты нет на вооружении России?"
              subheader="Выберите правильный ответ"
            >
              <Radio.Group
                name="q2"
                withAsterisk
              >
                <Radio
                  label="Тополь"
                  value="Тополь"
                  mb="md"
                  onClick={enableButton}
                />
                <Radio
                  label="Багульник"
                  value="Багульник"
                  mb="md"
                  onClick={enableButton}
                />
                <Radio
                  label="Верба"
                  value="Верба"
                  mb="md"
                  onClick={enableButton}
                />
                <Radio
                  label="Баобаб"
                  value="Баобаб"
                  mb="md"
                  onClick={enableButton}
                />
              </Radio.Group>
            </Banner>
          </Section>
          
          <Section header="Вопрос 3" style={step === 2 ? undefined : sectionStyle}>
            <Banner
              header="Что измеряется в м/с²?"
              subheader="Выберите правильный ответ"
            >
              <Radio.Group
                name="q3"
                withAsterisk
              >
                <Radio
                  label="Угловая скорость"
                  value="Угловая скорость"
                  mb="md"
                  onClick={enableButton}
                />
                <Radio
                  label="Ускорение"
                  value="Ускорение"
                  mb="md"
                  onClick={enableButton}
                />
                <Radio
                  label="Скорость света"
                  value="Скорость света"
                  mb="md"
                  onClick={enableButton}
                />
                <Radio
                  label="Сила"
                  value="Сила"
                  mb="md"
                  onClick={enableButton}
                />
              </Radio.Group>
            </Banner>
          </Section>
          {step > 2 && (
            <Placeholder
              header="Опрос завершён!"
              description={isFinished ? 'Данные отправлены, спасибо!' : 'Отправьте данные боту'}
            >
              <PlaceholderImage />
            </Placeholder>
          )}
        </form>
      ) || (
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
      )}
    </Page>
  );
};
