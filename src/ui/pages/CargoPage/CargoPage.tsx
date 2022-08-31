import { FC } from "react";
import Layout from "../../components/Layout/Layout";

import { ReactComponent as Arrow } from "../../../assets/icon/arrow.svg";
import CustomLink from "../../elements/CustomLink/CustomLink";
import CustomTitle from "../../elements/CustomTitle/CustomTitle";

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
        <CustomTitle level="1" className={styles.title}>
          Cargo Page
        </CustomTitle>
      </>
    </Layout>
  );
};

export default CargoPage;
