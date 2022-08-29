import { FC } from "react";

import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.root}>
      <p>© 2022 ООО “Компания”, Все права защищены.</p>
      <div className={styles.linkWrapper}>
        <Link to={"/"} className={styles.link}>
          Вопрос-ответ
        </Link>
        <Link to={"/"} className={styles.link}>
          Политика конфиденциальности
        </Link>
        <Link to={"/"} className={styles.link}>
          История обновлений
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
