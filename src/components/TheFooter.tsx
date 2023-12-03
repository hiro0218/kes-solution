import style from '../assets/style.module.scss';
import footerStyle from '../assets/footer.module.scss';

export default function () {
  return (
    <footer className={`${style.container} ${footerStyle.container}`}>
      <p>
        <small>&copy; 株式会社KESソリューション</small>
      </p>
    </footer>
  );
}
