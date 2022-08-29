import { FC } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import styles from "./Layout.module.scss";

interface ILayout {
  children: JSX.Element;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className={styles.root}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
