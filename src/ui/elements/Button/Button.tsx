import { FC } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

interface IButton {
  children: JSX.Element | string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: FC<IButton> = ({ children, className, type, onClick }) => {
  return (
    <button
      className={classNames(styles.root, className)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
