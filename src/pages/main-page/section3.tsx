import { Box, Radio } from '@mantine/core';
import { Banner, Section } from '@telegram-apps/telegram-ui';

interface ISection3Props {
  step: number;
  enableButton: any;
}

type IProps = ISection3Props;

export const Section3 = ({ step, enableButton }: IProps) => {
  const sectionStyle = {
    opacity: 0,
    height: 0,
    overflow: 'hidden',
  }
  return (
    <Box>
      <Section header="Вопрос 1" style={step === 0 ? undefined : sectionStyle}>
        <iframe
          width="100%"
          height="315"
          src="https://rutube.ru/play/embed/2fee7a6a37dfe70a95a48bff59d140df"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          allowFullScreen
        ></iframe>
        <Banner
          style={{ border: 'none' }}
          header="Какой жанр у песни?"
          subheader="Выберите правильный ответ"
        >
          <Radio.Group
            name="q1"
            withAsterisk
          >
            <Radio
              label="Которок"
              value="Которок"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Кошкопопс"
              value="Кошкопопс"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Мяусан"
              value="Мяусан"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Мякоджаз"
              value="Мякоджаз"
              mb="md"
              onClick={enableButton}
            />
          </Radio.Group>
        </Banner>
      </Section>
    </Box>
  );
};
