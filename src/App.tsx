import { FC, useEffect, useState } from "react";
import styles from "./app.module.css";
import { Header } from "./components/Header";
import { Board } from "./components/Board";
import { startGameController } from "./controller/StartGameController";
import { YesNoDialogPlay } from "./components/YesNoDialogPlay";

export const App: FC = () => {
  const startController: startGameController =
    startGameController.getInstance();

  const [isEndGame, setIsEndGame] = useState(false);

  useEffect(() => {
    setIsEndGame(startController.isEndGame());
  }, [startController.isEndGame()]);

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
