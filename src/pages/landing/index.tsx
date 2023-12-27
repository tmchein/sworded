import style from './styles.module.css';
import SquaredVector from '../../assets/squared-vector.svg';
import SwordedLogo from '../../assets/lock-keyhole.svg';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <main className={style.root_container}>
      <article className={style.main_content_container}>
        <section className={style.hero_container}>
          <div
            className={`${style.blurred_circles_container} ${style.fade_in}`}
          >
            <div className={`${style.blurred_circle} ${style.white}`} />
            <div className={`${style.blurred_circle} ${style.green}`} />
          </div>
          <img
            src={SquaredVector}
            className={`${style.squared_background} ${style.fade_in}`}
            alt="background"
          />
          <img
            style={{ width: '113px', height: '113px' }}
            src={SwordedLogo}
            className={`${style.sworded_logo} ${style.top_to_bottom}`}
            alt="logo"
          />
          <h1 className={style.fade_in}>Where Strength Meets Simplicity</h1>
        </section>
        <Link className={`${style.CTA} ${style.bottom_top}`} to="/demo">
          New to Sworded? Check out our demo →
        </Link>
      </article>
    </main>
  );
}
