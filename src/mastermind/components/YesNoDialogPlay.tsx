import { FC } from "react";
import { BasicCard } from "../utils/components/BasicCard";
import styles from "./component-css/main.module.css";
import { StringParameter } from "./view/Interfaces";

export const YesNoDialogPlay: FC<StringParameter> = ({value}) => {

  const text :string[] = ["Resultado", value, "Play again"];
  return (
    <div className={styles.main}>
    <BasicCard text= {text}></BasicCard>
    </div>
  )
}