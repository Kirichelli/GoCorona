import Icon from "./Icon";
import css from "./Main.module.scss";
const Main = () => {
  return (
    <main className={css.main}>
      <section className={css.start}>
        <div className={css.start__container}>
          <div className={css.start__content}>
            <div className={"${css.block-text}"}>
              <h1 className={css["block-text__title"]}>
                Take care of yours family’s <span>health.</span>
              </h1>
              <div className={css["block-text__text"]}>
                All in one destination for COVID-19 health queries. Consult
                10,000+ health workers about your concerns.
              </div>
              <a href="" className={css.button}>
                GET STARTED
              </a>
            </div>
          </div>
          <div className={css.start__image}>
            <img src="/src/assets/main-block/icon.svg" alt="Врач с ребенком" />
          </div>
          <div className={css.start__video}>
            <a href="#" className={css["video-start"]}>
              <div className={css["video-start__icon"]}>
                <img src="/src/assets/play-icon.svg" alt="Кнопка Play" />
              </div>
              <div className={css["video-start__body"]}>
                <div className={css["video-start__title"]}>
                  Stay safe with GoCorona
                </div>
                <div className={css["video-start__text"]}>Watch Video</div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className={css.safe}>
        <div className={css.safe__container}>
          <div className={css.safe__media}>
            <div className={css["media-safe"]}>
              <div className={css["media-safe_image"]}>
                <img src="/src/assets/Daily UI 1.png" alt="" />
              </div>
              <Icon />
            </div>
          </div>
          <div className={css.safe__content}>
            <div className={css["safe-text"]}>
              <h1 className={css["block-text__title"]}>
                Stay safe with Go
                <span style={{ color: "#ec5863" }}>Corona.</span>
              </h1>
              <div className={css["block-text__text"]}>
                24x7 Support and user friendly mobile platform to bring
                healthcare to your fingertips. Signup and be a part of the new
                health culture.
              </div>
              <a href="" className={css.button}>
                Features
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
