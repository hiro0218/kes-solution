import { Section } from '@/components/Layout';

import BusinessSVG1 from '@/assets/images/business-1.svg';
import BusinessSVG2 from '@/assets/images/business-2.svg';
import BusinessSVG3 from '@/assets/images/business-3.svg';

export const BusinessOverview = () => {
  return (
    <Section id="business-overview">
      <h2>事業概要</h2>
      <div>
        <div>
          <div>
            <div>
              <BusinessSVG1 width={120} />
            </div>
            <h3>コンサルティング</h3>
            <p>
              お客様の視点に立ったITコンサルティングをご提供いたします。
              <br />
              環境から、システム構築に関するプロジェクトマネジメントをご提供いたします。
            </p>
          </div>
          <div>
            <div>
              <BusinessSVG2 width={120} />
            </div>
            <h3>技術支援、ソフトウェア開発</h3>
            <p>
              設計常駐や一括での受託など、ご希望に沿った形式で承ります。
              <br />
              各種業務ソフト、Web開発システムをご提供いたします。
            </p>
          </div>
          <div>
            <div>
              <BusinessSVG3 width={120} />
            </div>
            <h3>ネットワーク構築、サーバ設定</h3>
            <p>
              ネットワークを元にサーバシステムの構築をご提供いたします。
              <br />
              LAN・WANにおける工事、構築、設定、運用、管理をご提供いたします。
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>利用技術</h3>
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
      </div>
    </Section>
  );
};
