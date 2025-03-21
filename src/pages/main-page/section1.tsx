import { Box, Radio } from '@mantine/core';
import { Banner, Section } from '@telegram-apps/telegram-ui';

interface ISection1Props {
  step: number;
  enableButton: any;
}

type IProps = ISection1Props;

export const Section1 = ({ step, enableButton }: IProps) => {
  const sectionStyle = {
    opacity: 0,
    height: 0,
    overflow: 'hidden',
  }
  return (
    <Box>
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
          header="Что добавляют в щи по старым русским рецептам?"
          subheader="Выберите правильный ответ"
        >
          <Radio.Group
            name="q2"
            withAsterisk
          >
            <Radio
              label="Простокваша"
              value="Простокваша"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Морковь"
              value="Морковь"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Свёкла"
              value="Свёкла"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Квас"
              value="Квас"
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
    </Box>
  );
};
