import { FC } from "react";

import CustomLink from "../../../../elements/CustomLink/CustomLink";

import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.root}>
      <p>© 2022 ООО “Компания”, Все права защищены.</p>
      <div className={styles.linkWrapper}>
        <CustomLink path={"/"} className={styles.link}>
          Вопрос-ответ
        </CustomLink>
        <CustomLink path={"/"} className={styles.link}>
          Политика конфиденциальности
        </CustomLink>
        <CustomLink path={"/"} className={styles.link}>
          История обновлений
        </CustomLink>
      </div>
    </footer>
  );
};

export default Footer;
