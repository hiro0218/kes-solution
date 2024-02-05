import Head from 'next/head';
import { MainContainer } from '@/components/Layout';
import { PageHeading, PageSection, PageParagraph, Signature } from '@/components/Page';

export default function Message() {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_COMPANY_NAME} - 代表挨拶</title>
      </Head>
      <MainContainer>
        <PageSection>
          <PageHeading>代表挨拶</PageHeading>
          <PageParagraph>
            皆様、私どもの会社のウェブサイトをご覧いただき、誠にありがとうございます。
            <br />
            株式会社KESソリューションは、2008年7月に設立されて以来、ソフトウェア開発での革新的な取り組みを通じてお客様にソフトウェア開発での価値を提供し続けてまいりました。
          </PageParagraph>
          <PageParagraph>
            私たちは、どんな時代でも、お客様に愛され新しい事に挑戦続けられる事を追求しソフトウェア開発やシステムサービスを通じてお客様が解決しようとしている問題を解決するこ
            とに全力を尽くしています。
            <br />
            私たちの目指すところは、IT（ソフトウェア開発）通じて日々技術の最前線に立ち、新たなソリューションを創出し続けています。
            <br />
            私たちのソフトウェア開発技術が、お客様のビジネスをより良くする一助となれば幸いです。
          </PageParagraph>
          <PageParagraph>今後とも株式会社KESソリューションをどうぞよろしくお願い申し上げます。</PageParagraph>
          <Signature>
            代表取締役　菊地 信<br />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/signature-president.png" alt="" height="20" />
          </Signature>
        </PageSection>
      </MainContainer>
    </>
  );
}
