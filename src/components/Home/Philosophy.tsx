import { Section as _Section } from '@/components/Layout';
import styled from '@emotion/styled';

export const Philosophy = () => {
  return (
    <Section id="philosophy">
      <h2 className="sr-only">経営理念</h2>
      <PhilosophyText>
        <p>
          明朗、
          <wbr />
          喜働、
          <wbr />
          愛和を
          <wbr />
          基本とし、
          <br />
          お客様に
          <wbr />
          よろこばれる
          <wbr />
          会社になろう。
          <br />
          利益を
          <wbr />
          もって
          <wbr />
          発展し社会に
          <wbr />
          貢献しよう。
        </p>
      </PhilosophyText>
    </Section>
  );
};

const Section = styled(_Section)`
  padding-top: 0;
  padding-bottom: 0;
  height: 500px;
`;

const PhilosophyText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 2px;
  width: 960px;
  height: 100%;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    width: 100%;
    font-size: 1.6rem;
  }
`;
