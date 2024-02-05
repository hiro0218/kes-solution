import { Section } from '@/components/Layout';
import styled from '@emotion/styled';
import { Heading } from './Heading';

import { gray } from '@radix-ui/colors';

export const CompanyOverview = () => {
  return (
    <Section id="company-overview">
      <Heading>会社概要</Heading>
      <TableSection>
        <table>
          <tbody>
            <tr>
              <th>会社名</th>
              <td>株式会社KESソリューション</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>
                <b>本社</b>
                <br />
                〒880-0055
                <br />
                宮崎県宮崎市南花ケ島315番地5号
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d846.4167130476571!2d131.42758282957143!3d31.94280106184309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3538b0ba738e59cd%3A0x54236f4915caae9d!2z5qCq5byP5Lya56S-77yr77yl77yz44K944Oq44Ol44O844K344On44Oz!5e0!3m2!1sja!2sjp!4v1704633339961!5m2!1sja!2sjp"
                  width="100%"
                  height="450"
                  allowFullScreen={undefined}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
                <a href="https://maps.app.goo.gl/4zJd2Mu8oKsWSJW87" target="_blank">
                  地図はこちら（Google マップ）
                </a>
              </td>
            </tr>
            <tr>
              <th>設立</th>
              <td>2008年8月</td>
            </tr>
            <tr>
              <th>代表</th>
              <td>代表取締役 菊地 信</td>
            </tr>
            <tr>
              <th>事業内容</th>
              <td>
                <ol>
                  <li>ソフトウェアの受託開発</li>
                  <li>クラウドシステムの開発</li>
                  <li>各種システムの開発・販売</li>
                </ol>
              </td>
            </tr>
            <tr>
              <th>取引銀行</th>
              <td>宮崎銀行、鹿児島銀行</td>
            </tr>
            <tr>
              <th>
                主要取引先
                <br />
                <small>（アルファベット順・敬称略）</small>
              </th>
              <td>
                <ul>
                  <li>アクト情報サービス株式会社</li>
                  <li>株式会社システムブリッジ</li>
                  <li>株式会社スカイコム</li>
                  <li>株式会社ソフトテックス</li>
                  <li>株式会社デンサン</li>
                  <li>株式会社ひむか流通ネットワーク</li>
                  <li>日本情報クリエイト株式会社</li>
                  <li>各自治体・民間企業他</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </TableSection>
    </Section>
  );
};

const TableSection = styled.div`
  margin-top: 1rem;

  table {
    width: 100%;
    max-width: 100%;
    border-spacing: 0;
    border-collapse: collapse;

    small {
      font-weight: 400;
    }

    tr + tr {
      border-top: 1px solid ${gray.gray6};
    }

    th {
      width: 30%;
      padding: 1.5rem 1rem;
      text-align: left;
      vertical-align: top;
    }

    td {
      padding: 1.5rem 1rem;
      text-align: left;
    }
  }
`;

const Map = styled.div`
  margin: 1rem 0 0.5rem;

  iframe {
    display: block;
    width: 100%;
  }
`;
