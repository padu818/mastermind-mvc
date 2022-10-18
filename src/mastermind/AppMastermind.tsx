import { FC, useState } from "react";
import styles from "./appMastermind.module.css";
import { Header } from "./components/Header";
import { Board } from "./components/Board";
import { StartGameController } from "./controller/StartGameController";
import { YesNoDialogPlay } from "./components/YesNoDialogPlay";
import { CreatorController } from "./controller/CreatorController";

export const AppMastermind: FC = () => {
  const startController: StartGameController =
    CreatorController.createStartGameController();

  const [isEndGame, setIsEndGame] = useState(false);

  const Mastermind = () => (
    <div className={styles.mastermind}>
      <Header />
      {!isEndGame ? (
        <Board condition={isEndGame} setCondition={setIsEndGame} />
      ) : (
        <YesNoDialogPlay value={startController.getResult()}></YesNoDialogPlay>
      )}
    </div>
  );

  return (
    <div className={styles.app}>
        <Mastermind />
    </div>
  );
};
