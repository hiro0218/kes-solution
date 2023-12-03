import style from '../assets/style.module.scss';
import businessStyle from '../assets/business.module.scss';

import { ReactComponent as BusinessSVG1 } from '../assets/images/business-1.svg';
import { ReactComponent as BusinessSVG2 } from '../assets/images/business-2.svg';
import { ReactComponent as BusinessSVG3 } from '../assets/images/business-3.svg';

export default function () {
  return (
    <section id="business-overview" className={style.container}>
      <h2 className={style.heading}>事業概要</h2>
      <div className={style.subContainer}>
        <div className={businessStyle.businessList}>
          <div className={businessStyle.businessItem}>
            <div className={businessStyle.businessIcon}>
              <BusinessSVG1 width={120} />
            </div>
            <h3 className={businessStyle.businessHeading}>コンサルティング</h3>
            <p>
              お客様の視点に立ったITコンサルティングをご提供いたします。
              <br />
              環境から、システム構築に関するプロジェクトマネジメントをご提供いたします。
            </p>
          </div>
          <div className={businessStyle.businessItem}>
            <div className={businessStyle.businessIcon}>
              <BusinessSVG2 width={120} />
            </div>
            <h3 className={businessStyle.businessHeading}>技術支援、ソフトウェア開発</h3>
            <p>
              設計常駐や一括での受託など、ご希望に沿った形式で承ります。
              <br />
              各種業務ソフト、Web開発システムをご提供いたします。
            </p>
          </div>
          <div className={businessStyle.businessItem}>
            <div className={businessStyle.businessIcon}>
              <BusinessSVG3 width={120} />
            </div>
            <h3 className={businessStyle.businessHeading}>ネットワーク構築、サーバ設定</h3>
            <p>
              ネットワークを元にサーバシステムの構築をご提供いたします。
              <br />
              LAN・WANにおける工事、構築、設定、運用、管理をご提供いたします。
            </p>
          </div>
        </div>
      </div>
      <div className={style.subContainer}>
        <h3 className={businessStyle.businessTechHeading}>利用技術</h3>
        <h4 className={businessStyle.businessTechSubHeading}>開発言語</h4>
        <ul className={businessStyle.businessTechInlineList}>
          <li>PHP</li>
          <li>C# .NET</li>
          <li>Java</li>
          <li>C++</li>
          <li>C</li>
        </ul>
        <h4 className={businessStyle.businessTechSubHeading}>データベース</h4>
        <ul className={businessStyle.businessTechInlineList}>
          <li>SQL Server</li>
          <li>Oracle</li>
          <li>MySQL</li>
        </ul>
      </div>
    </section>
  );
}
