import { FC } from "react";
import classNames from "classnames";

import styles from "./CustomTitle.module.scss";

interface ICustomTitle {
  level: string;
  children: JSX.Element | string;
  className?: string;
}

const CustomTitle: FC<ICustomTitle> = ({ level, children, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={classNames(styles.root, styles[`h${level}`], className)}>
      {children}
    </Tag>
  );
};

export default CustomTitle;
