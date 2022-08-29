import { FC } from "react";

import { ReactComponent as Logo } from "../../../../../assets/icon/logo.svg";
import { ReactComponent as Plus } from "../../../../../assets/icon/plus.svg";
import Button from "../../../../elements/Button/Button";
import { Link } from "react-router-dom";

import { menuItems } from "../../../../../variables/navBarMenu/navBarMenu";

import styles from "./NavBar.module.scss";
import { EMenuItemRenderTypes } from "../../../../../types/menuItem/menuItem";

const NavBar: FC = () => {
  return (
    <aside className={styles.root}>
      <div className={styles.navHeader}>
        <Logo className={styles.logo} />
        <Button>
          <Plus />
        </Button>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navPart}>
          {menuItems.map(({ id, label, Icon, render, href }) => {
            if (render === EMenuItemRenderTypes.PRODUCTS) {
              return (
                <li key={id}>
                  <Link to={href} className={styles.navLink}>
                    <Icon className={styles.linkImg} />
                    {label}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
        <ul className={styles.navPart}>
          {menuItems.map(({ id, label, Icon, render, href }) => {
            if (render === EMenuItemRenderTypes.ALL) {
              return (
                <li key={id}>
                  <Link to={href} className={styles.navLink}>
                    <Icon className={styles.linkImg} />
                    {label}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
        <ul className={styles.navPart}>
          {menuItems.map(({ id, label, Icon, render, href }) => {
            if (render === EMenuItemRenderTypes.OTHER) {
              return (
                <li key={id}>
                  <Link to={href} className={styles.navLink}>
                    <Icon className={styles.linkImg} />
                    {label}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default NavBar;
