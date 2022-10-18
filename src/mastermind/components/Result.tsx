import { FC } from "react";
import styles from "./component-css/result.module.css";
import { StringParameter } from "./view/Interfaces";

export const ResultCombination: FC<StringParameter> = ({ value }) => {
  
  return (
      <div className={styles.element}>{value}</div>
  );
};
