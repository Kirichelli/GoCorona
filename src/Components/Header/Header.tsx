import css from "./Header.module.scss";
const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.header__container}>
        <a href="" className={css.header__logo}>
          <img src="/src/assets/Group 2.svg" alt="Логотип" />
        </a>
        <div className={css.menu}>
          <nav className={css.menu__body}>
            <ul className={css.menu__list}>
              <li className={css.menu__item}>
                <a href="" className={css.menu__link}>
                  HOME
                </a>
              </li>
              <li className={css.menu__item}>
                <a href="" className={css.menu__link}>
                  FEATURES
                </a>
              </li>
              <li className={css.menu__item}>
                <a href="" className={css.menu__link}>
                  SUPPORT
                </a>
              </li>
              <li className={css.menu__item}>
                <a href="" className={css.menu__link}>
                  CONTACT US
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={css.header__button}>
          <a href="" className={css.button}>
            DOWNLOAD
          </a>
          {/* <a href="#open" className="icon-menu">
            <span></span>
          </a>
          <a href="#close" className="close-icon-menu"></a> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
