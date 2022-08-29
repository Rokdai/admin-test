import { FC } from "react";
import Button from "../../../../../elements/Button/Button";

import { ReactComponent as Out } from "../../../../../../assets/icon/out.svg";

import styles from "./HeaderUserInfo.module.scss";

const HeaderUserInfo: FC = () => {
  return (
    <div className={styles.root}>
      <span className={styles.role}>Менеджер</span>
      <Button className={styles.button}>ИИ</Button>
      <Button className={styles.button}>
        <Out />
      </Button>
    </div>
  );
};

export default HeaderUserInfo;
