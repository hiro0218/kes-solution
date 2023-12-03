import style from '../assets/style.module.scss';
import company from '../assets/company.module.scss';

export default function () {
  return (
    <section id="company-overview" className={style.container}>
      <h2 className={style.heading}>会社概要</h2>
      <div className={style.subContainer}>
        <table className={company.table}>
          <tr>
            <th>会社名</th>
            <td>株式会社KESソリューション</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>
              本社
              <br />
              〒880-0055
              <br />
              宮崎県宮崎市南花ケ島315番地5号
              <br />
              <a href="https://maps.app.goo.gl/4zJd2Mu8oKsWSJW87" target="_blank">
                地図はこちら
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
        </table>
      </div>
    </section>
  );
}
