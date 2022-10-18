import { FC } from "react";
import { Result } from "./view/Interfaces";
import { ResultCombination } from "./Result";
import styles from "./component-css/result.module.css";

export const BlackAndWhite: FC<Result> = ({ black, white }) => {

  return (
    <div className={styles.result}>
    <ResultCombination value={black} ></ResultCombination>
    <ResultCombination value={white} ></ResultCombination>
    </div>
  );
};
