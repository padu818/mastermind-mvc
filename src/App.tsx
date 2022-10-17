import { FC, useState } from "react";
import styles from "./app.module.css";
import { Header } from "./components/Header";
import { Board } from "./components/Board";
import { StartGameController } from "./controller/StartGameController";
import { YesNoDialogPlay } from "./components/YesNoDialogPlay";
import { CreatorController } from "./controller/CreatorController";

export const App: FC = () => {
  const startController: StartGameController = CreatorController.createStartGameController();

  const [isEndGame, setIsEndGame] = useState(false);


  return (
    <div className={styles.app}>
      <div className={styles.mastermind}>
        <Header />
        {!isEndGame ? (
          <Board condition={isEndGame} setCondition={setIsEndGame} />
        ) : (
          <YesNoDialogPlay
            value={startController.getResult()}
          ></YesNoDialogPlay>
        )}
      </div>
    </div>
  );
};
