import { Box, Radio, Image } from '@mantine/core';
import { Banner, Section } from '@telegram-apps/telegram-ui';

interface ISection2Props {
  step: number;
  enableButton: any;
}

type IProps = ISection2Props;

export const Section2 = ({ step, enableButton }: IProps) => {
  const sectionStyle = {
    opacity: 0,
    height: 0,
    overflow: 'hidden',
  }
  return (
    <Box>
      <Section header="Вопрос 1" style={step === 0 ? undefined : sectionStyle}>
        <Image src="/quiz/questions/q1.jpg" />
        <Banner
          style={{ border: 'none' }}
          header="Как Сильвестр НЕ называл Гену в сериале 'СашаТаня'?"
          subheader="Выберите правильный ответ"
        >
          <Radio.Group
            name="q1"
            withAsterisk
          >
            <Radio
              label="Пятикантроп"
              value="Пятикантроп"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Орк"
              value="Орк"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Гремлин"
              value="Гремлин"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Квазимодо"
              value="Квазимодо"
              mb="md"
              onClick={enableButton}
            />
          </Radio.Group>
        </Banner>
      </Section>
      <Section header="Вопрос 2" style={step === 1 ? undefined : sectionStyle}>
        <Image src="/quiz/questions/q2.jpg" />
        <Banner
          header={'В сериале "Мир! Дружба! Жвачка!" главные герои Санька и Женька в угнанной тачке включают радио и поют: "Стоп холодильник, стоп морозильник!". Какой припев у этой песни?'}
          subheader="Выберите правильный ответ"
        >
          <Radio.Group
            name="q2"
            withAsterisk
          >
            <Radio
              label="Стоп будильник!"
              value="Стоп будильник!"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Вперёд кипятильник!"
              value="Вперёд кипятильник!"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="It's my life"
              value="It's my life"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="What is love?"
              value="What is love?"
              mb="md"
              onClick={enableButton}
            />
          </Radio.Group>
        </Banner>
      </Section>
      
      <Section header="Вопрос 3" style={step === 2 ? undefined : sectionStyle}>
        <Image src="/quiz/questions/q3.jpg" />
        <Banner
          header={'В какой последовательности происходили события после бокальчика вина, выпитого Катей в сериале "Идеальная семья"?'}
          subheader="Выберите правильный ответ"
        >
          <Radio.Group
            name="q3"
            withAsterisk
          >
            <Radio
              label="Выпила антидепрессанты"
              value="Выпила антидепрессанты"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Спрыгнула с балкона второго этажа"
              value="Спрыгнула с балкона второго этажа"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Украла соседскую собаку"
              value="Украла соседскую собаку"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Врезалась в дерево на гольфкаре"
              value="Врезалась в дерево на гольфкаре"
              mb="md"
              onClick={enableButton}
            />
          </Radio.Group>
        </Banner>
      </Section>
      
      <Section header="Вопрос 4" style={step === 3 ? undefined : sectionStyle}>
        <Image src="/quiz/questions/q4.jpg" />
        <Banner
          header={'Кадр из какого сериала ты видишь?'}
          subheader="Выберите правильный ответ"
        >
          <Radio.Group
            name="q4"
            withAsterisk
          >
            <Radio
              label="Гусар"
              value="Гусар"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Идеальная семья"
              value="Идеальная семья"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="СашаТаня"
              value="СашаТаня"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Иванько"
              value="Иванько"
              mb="md"
              onClick={enableButton}
            />
          </Radio.Group>
        </Banner>
      </Section>
      
      <Section header="Вопрос 5" style={step === 4 ? undefined : sectionStyle}>
        <Image src="/quiz/questions/q5.jpg" />
        <Banner
          header={'В сезоне «Реальные пацаны. Бой за наследство» Колян заплатил Эдику за поцелуй с бомжихой. Сколько?'}
          subheader="Выберите правильный ответ"
        >
          <Radio.Group
            name="q5"
            withAsterisk
          >
            <Radio
              label="1 000 000 рублей"
              value="1 000 000 рублей"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="1 000 000 долларов"
              value="1 000 000 долларов"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="100 000 рублей"
              value="100 000 рублей"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="990 000 рублей"
              value="990 000 рублей"
              mb="md"
              onClick={enableButton}
            />
          </Radio.Group>
        </Banner>
      </Section>
      
      <Section header="Вопрос 6" style={step === 5 ? undefined : sectionStyle}>
        <Image src="/quiz/questions/q6.jpg" />
        <Banner
          header={'Герои какого сериала перед тобой?'}
          subheader="Выберите правильный ответ"
        >
          <Radio.Group
            name="q6"
            withAsterisk
          >
            <Radio
              label="Иванько"
              value="Иванько"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Идеальная семья"
              value="Идеальная семья"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Патриот"
              value="Патриот"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Ольга"
              value="Ольга"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="САШАТАНЯ"
              value="САШАТАНЯ"
              mb="md"
              onClick={enableButton}
            />
          </Radio.Group>
        </Banner>
      </Section>
      
      <Section header="Вопрос 7" style={step === 6 ? undefined : sectionStyle}>
        <Image src="/quiz/questions/q7.jpg" />
        <Banner
          header={'Из какого сериала эта цитата?'}
          subheader="Выберите правильный ответ"
        >
          <Radio.Group
            name="q7"
            withAsterisk
          >
            <Radio
              label="Патриот"
              value="Патриот"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Ольга"
              value="Ольга"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Иванько"
              value="Иванько"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Гусар"
              value="Гусар"
              mb="md"
              onClick={enableButton}
            />
          </Radio.Group>
        </Banner>
      </Section>
      
      <Section header="Вопрос 8" style={step === 7 ? undefined : sectionStyle}>
        <Image src="/quiz/questions/q8.jpg" />
        <Banner
          header={'Как называлось агентство детских праздников, в котором работали Гера и Стас в сериале "Патриот"?'}
          subheader="Выберите правильный ответ"
        >
          <Radio.Group
            name="q8"
            withAsterisk
          >
            <Radio
              label="Капризка"
              value="Капризка"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Сюрпризка"
              value="Сюрпризка"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Сюрприз"
              value="Сюрприз"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Каприз"
              value="Каприз"
              mb="md"
              onClick={enableButton}
            />
          </Radio.Group>
        </Banner>
      </Section>
      
      <Section header="Вопрос 9" style={step === 8 ? undefined : sectionStyle}>
        <Image src="/quiz/questions/q9.jpg" />
        <Banner
          header={'Из какого сериала этот предмет?'}
          subheader="Выберите правильный ответ"
        >
          <Radio.Group
            name="q9"
            withAsterisk
          >
            <Radio
              label="Игра на выживание"
              value="Игра на выживание"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Беспринципные"
              value="Беспринципные"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Колл-центр"
              value="Колл-центр"
              mb="md"
              onClick={enableButton}
            />
            <Radio
              label="Перевал Дятлова"
              value="Перевал Дятлова"
              mb="md"
              onClick={enableButton}
            />
          </Radio.Group>
        </Banner>
      </Section>
    </Box>
  );
};
