import { FC } from "react";
import SearchForm from "../SearchForm/SearchForm";
import HeaderUserInfo from "./components/HeaderUserInfo";

import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.root}>
      <SearchForm />
      <HeaderUserInfo />
    </header>
  );
};

export default Header;
