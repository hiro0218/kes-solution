import style from '../assets/style.module.scss';
import philosophyStyle from '../assets/philosophy.module.scss';

export default function () {
  return (
    <section id="philosophy" className={style.container}>
      <h2 className={style.heading}>経営理念</h2>
      <div className={[style.subContainer, philosophyStyle.container].join(' ')}>
        <p className={philosophyStyle.phrase}>
          明朗、
          <wbr />
          喜働、
          <wbr />
          愛和を
          <wbr />
          基本とし、
          <wbr />
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
        <div className={philosophyStyle.companyPolicyContainer}>
          <h3 className={philosophyStyle.companyPolicyHeading}>社是</h3>
          <p className={philosophyStyle.companyPolicyParagraph}>
            無心不敬<small>（人信なくんば敬せず）</small>
          </p>
          <p className={philosophyStyle.companyPolicyParagraph}>心配するな工夫せよ</p>
        </div>
      </div>
    </section>
  );
}
