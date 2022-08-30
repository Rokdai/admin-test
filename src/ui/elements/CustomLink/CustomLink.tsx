import { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import styles from "./CustomLink.module.scss";

interface ILink {
  path: string;
  children: JSX.Element | string;
  className?: string;
}

const CustomLink: FC<ILink> = ({ path, children, className }) => {
  return (
    <Link to={path} className={classNames(styles.root, className)}>
      {children}
    </Link>
  );
};

export default CustomLink;
