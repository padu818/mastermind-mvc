import { FC, useEffect, useState } from "react";
import { StartGameController } from "../controller/StartGameController";
import { ListMovement } from "./ListMovement";
import styles from "./component-css/main.module.css";
import { Points } from "./Points";
import { ProposeCombination } from "./ProposeCombination";
import { BooleanParameter } from "./view/Interfaces";
import { CreatorController } from "../controller/CreatorController";


export const Board: FC<BooleanParameter> = ({setCondition}) => {
  const [eventChange, setEventChange] = useState(true);
  const [makeBreakerCombination, setMakeBreakerCombination] = useState<string>("");

  const startController : StartGameController = CreatorController.createStartGameController();
  useEffect(() =>{
    setCondition(startController.isEndGame());
  },[eventChange])

  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <ProposeCombination
          eventBoolean={eventChange}
          setEventBoolean={setEventChange}
          makeBreakerCombination={makeBreakerCombination}
          setMakeBreakerCombination={setMakeBreakerCombination}
        ></ProposeCombination>
        <ListMovement
          condition={eventChange}
          setCondition={setEventChange}
        /> 
        <Points point={startController.getAttempt()}></Points>
      </main>
    </div>
  );
};

