import { FC } from "react";
import Input from "../../../../elements/Input/Input";

import styles from "./SearchForm.module.scss";

const SearchForm: FC = () => {
  return (
    <form className={styles.root}>
      <div className={styles.inputWrapper}>
        <Input
          id="searchInput"
          name="searchInput"
          placeholder="Найти коносамент, груз, заказ и др."
          className={styles.searchInput}
        />
      </div>
    </form>
  );
};

export default SearchForm;
