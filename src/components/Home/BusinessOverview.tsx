import { Section } from '@/components/Layout';
import styled from '@emotion/styled';
import { Heading } from './Heading';
import { gray } from '@radix-ui/colors';

export const BusinessOverview = () => {
  return (
    <Section id="business-overview">
      <Heading>事業概要</Heading>
      <BusinessContainer>
        <BusinessCard>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="business-1.svg" width="240" height="180" alt="" />
          </figure>
          <BusinessCardHeading>コンサルティング</BusinessCardHeading>
          <p>
            お客様の視点に立ったITコンサルティングをご提供いたします。
            <br />
            環境から、システム構築に関するプロジェクトマネジメントをご提供いたします。
          </p>
        </BusinessCard>
        <BusinessCard>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="business-2.svg" width="240" height="180" alt="" />
          </figure>
          <BusinessCardHeading>
            技術支援、
            <wbr />
            ソフトウェア開発
          </BusinessCardHeading>
          <p>
            設計常駐や一括での受託など、ご希望に沿った形式で承ります。
            <br />
            各種業務ソフト、Web開発システムをご提供いたします。
          </p>
        </BusinessCard>
        <BusinessCard>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="business-3.svg" width="240" height="180" alt="" />
          </figure>
          <BusinessCardHeading>
            ネットワーク構築、
            <wbr />
            サーバ設定
          </BusinessCardHeading>
          <p>
            ネットワークを元にサーバシステムの構築をご提供いたします。
            <br />
            LAN・WANにおける工事、構築、設定、運用、管理をご提供いたします。
          </p>
        </BusinessCard>
      </BusinessContainer>

      <UseTechnology>
        <h3>利用技術</h3>
        <p>案件で利用した技術の事例の一部です。</p>
        <h4>開発言語</h4>
        <ul>
          <li>PHP</li>
          <li>C# .NET</li>
          <li>Java</li>
          <li>C++</li>
          <li>C</li>
        </ul>
        <h4>データベース</h4>
        <ul>
          <li>SQL Server</li>
          <li>Oracle</li>
          <li>MySQL</li>
        </ul>
      </UseTechnology>
    </Section>
  );
};

const BusinessContainer = styled.div`
  display: grid;
  grid-template-rows: subgrid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5rem;
  margin-top: 1rem;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const BusinessCard = styled.div`
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  border-radius: 0.85rem;
  padding: 1rem 1.5rem;

  @media screen and (max-width: 767px) {
    display: block;

    & + & {
      margin-top: 1rem;
    }

    p {
      text-align: center;
    }
  }

  figure {
    text-align: center;
  }

  p {
    margin-top: 1rem;
    font-size: 0.9rem;
  }
`;

const BusinessCardHeading = styled.h3`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.6;
  letter-spacing: 1px;
  text-align: center;
`;

const UseTechnology = styled.div`
  margin-top: 2.5rem;

  h3 {
    font-weight: 700;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    line-height: 1.8;
  }

  h4 {
    margin-top: 1rem;
    font-weight: 500;
    color: ${gray.gray12};
  }

  ul {
    display: flex;
    margin-top: 0.5rem;

    > * + * {
      margin-left: 0.5rem;
    }
  }

  li {
    padding: 0.25em 0.5em;
    line-height: 1.5;
    font-size: 0.9rem;
    background-color: ${gray.gray3};
    border-radius: 0.25em;
  }
`;
