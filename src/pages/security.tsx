import { MainContainer } from '@/components/Layout';
import Head from 'next/head';
import { Clause } from '@/components/Security/Clause';
import { LeadParagraph, PageHeading, PageSection } from '@/components/Page';

export default function Security() {
  return (
    <>
      <Head>
        <title>株式会社KESソリューション - 情報セキュリティ基本方針</title>
      </Head>
      <MainContainer>
        <PageSection>
          <PageHeading>情報セキュリティ基本方針</PageHeading>
          <LeadParagraph>
            KESソリューションは、お客様の信頼を保持しより良いサービスを提供していく為、お預かりしている情報資産に対して適切な安全対策を実施致します。
            <br />
            当社はIT情報処理サービス企業としての社会的責任を認識し、全従業員がセキュリティに対し高い意識をもち、業務遂行する事が重要であると考えます。
          </LeadParagraph>
          <LeadParagraph>
            ここに「情報セキュリティ基本方針」を定め、保有する情報資産の適切な保護対策を実施するための指針と致します。
          </LeadParagraph>
          <Clause.List>
            <Clause.Item>
              <b>【情報セキュリティの定義】</b>
              <br /> 情報セキュリティとは、情報の機密性・完全性・可用性を維持することと定義する。
            </Clause.Item>
            <Clause.Item>
              <b>【適用範囲】</b>
              <br /> 当社の管理下にある、すべての業務活動に関わる情報を対象とする。
            </Clause.Item>
            <Clause.Item>
              <b>【情報セキュリティの目標】</b>
              <br /> 特定された全てのリスクを受容可能な水準以下とする事を目標とする。
            </Clause.Item>
            <Clause.Item>
              <b>【法令等の遵守】</b>
              <br /> 情報セキュリティに関する法令及び守秘義務等の契約事項を遵守する。
            </Clause.Item>
            <Clause.Item>
              <b>【管理者の任命と義務】</b>
              <br /> 当社は、情報セキュリティ管理責任者を設置し、ISO推進室を組織するものとする。
              ISO推進室は、情報セキュリティの状況を管理し、レベルの維持を確実にする。
            </Clause.Item>
            <Clause.Item>
              <b>【セキュリティ対策】</b>
              <br />
              当社は取り扱う情報に応じて、リスクアセスメントに基づき情報セキュリティ対策を講じるものとする。
            </Clause.Item>
            <Clause.Item>
              <b>【従業員の義務】</b>
              <br />
              役員及び契約社員を含む全従業員は、「情報セキュリティ基本方針」、「情報セキュリティマニュアル」および情報セキュリティの手順に準じて行動しなければならない。違反した場合には、就業規則に定める罰則を適用するものとする。
            </Clause.Item>
            <Clause.Item>
              <b>【個人情報保護】</b>
              <br />
              当社は、個人情報保護法における個人情報保護に関するガイドラインに準じて個人情報を管理するものとする。
            </Clause.Item>
            <Clause.Item>
              <b>【機密情報管理】</b>
              <br /> 当社は、不正競争防止法に準じて顧客及び当社の秘密情報を管理するものとする。
            </Clause.Item>
            <Clause.Item>
              <b>【著作権保護】</b>
              <br />
              当社は、著作権法に準じて著作物を管理するものとする。
            </Clause.Item>
            <Clause.Item>
              <b>【セキュリティ教育】</b>
              <br />
              情報セキュリティに対する認識向上の為、すべての役員及び従業員に対して定期的に情報セキュリティ教育を実施する。教育活動は、ISO推進室で推進を図るものとする。
            </Clause.Item>
            <Clause.Item>
              <b>【見直し】</b>
              <br /> 情報セキュリティ基本方針は、マネジメントレビュー時に見直すこととする。
            </Clause.Item>
          </Clause.List>
        </PageSection>
      </MainContainer>
    </>
  );
}
