import { FC } from "react";

import { ReactComponent as Logo } from "../../../../../assets/icon/logo.svg";
import { ReactComponent as Plus } from "../../../../../assets/icon/plus.svg";
import Button from "../../../../elements/Button/Button";

import { menuItems } from "../../../../../variables/navBarMenu/navBarMenu";

import styles from "./NavBar.module.scss";
import { EMenuItemRenderTypes } from "../../../../../types/menuItem/menuItem";
import CustomLink from "../../../../elements/CustomLink/CustomLink";

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
                  <CustomLink path={href} className={styles.navLink}>
                    <>
                      <Icon className={styles.linkImg} />
                      {label}
                    </>
                  </CustomLink>
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
                  <CustomLink path={href} className={styles.navLink}>
                    <>
                      <Icon className={styles.linkImg} />
                      {label}
                    </>
                  </CustomLink>
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
                  <CustomLink path={href} className={styles.navLink}>
                    <>
                      <Icon className={styles.linkImg} />
                      {label}
                    </>
                  </CustomLink>
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
