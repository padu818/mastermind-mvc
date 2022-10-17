import { FC } from "react";
import styles from "./component-css/circle.module.css";
import { StringParameter } from "./view/Interfaces";

export const Rectangle: FC<StringParameter> = ({ value }) => {
  
  return (
      <div style={{background: "#b393d3"}} className={styles.circle}>{value}</div>
  );
};
