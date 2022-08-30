import { FC } from "react";
import Layout from "../../components/Layout/Layout";

import { ReactComponent as Arrow } from "../../../assets/icon/arrow.svg";
import CustomLink from "../../elements/CustomLink/CustomLink";

import styles from "./CargoPage.module.scss";

const CargoPage: FC = () => {
  return (
    <Layout>
      <>
        <CustomLink path={"/"} className={styles.link}>
          <>
            <Arrow className={styles.linkImg} />
            Вернуться на главную
          </>
        </CustomLink>
        <p>Cargo Page</p>
      </>
    </Layout>
  );
};

export default CargoPage;
