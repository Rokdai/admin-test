import { FC } from "react";

import classNames from "classnames";

import styles from "./Input.module.scss";

interface IInput {
  id: string;
  name: string;
  placeholder?: string;
  value?: string;
  type?: string;
  className?: string;
  onChange?: () => void;
}

const Input: FC<IInput> = ({
  id,
  name,
  placeholder,
  type = "text",
  value,
  className,
  onChange,
}) => {
  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      className={classNames(styles.root, className)}
      onChange={onChange}
    />
  );
};

export default Input;
