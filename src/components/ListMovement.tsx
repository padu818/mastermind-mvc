import { FC, useEffect, useState } from "react";
import { TokenGuess } from "../domain/utils/constants";
import { Circle } from "./Cicle";
import { BlackAndWhite } from "./BlackAndWhite";
import { BooleanParameter, MovementView } from "./view/Interfaces";
import { BorderSeparator } from "../utils/components/BorderSeparator";
import { CreatorController } from "../controller/CreatorController";
import { MoveController } from "../controller/MoveController";
import styles from "./component-css/result.module.css";

export const ListMovement: FC<BooleanParameter> = ({ condition }) => {
  const [listMoveView, setListMoveView] = useState<MovementView[]>([]);

  const moveController: MoveController =CreatorController.createMoveController();

  const TitleResult = () => {
    return(
      <div className={styles.title}>
        <h2 className={styles.left}>Combinaciones</h2>
        <h2 className={styles.blackColumn}></h2>
        <h2 className={styles.whiteColumn}></h2>
      </div>
    )
  }

  const PrintListMovement = () => {
    if (listMoveView.length > 0) {

      return (
        <div className={styles.body}>
          <TitleResult/>
          {listMoveView.map((x: MovementView) => (
            <div className={styles.title}>
              {x.combination.tokens.map((token: TokenGuess) => (
                <Circle color={token}></Circle>
              ))}
              <BorderSeparator />
              <BlackAndWhite
                black={x.result.black}
                white={x.result.white}
              ></BlackAndWhite>
            </div>
          ))}
        </div>
      );
    } else {
      return <></>;
    }
  };

  useEffect(() => {
    const newListMoveView: MovementView[] =
      moveController.listCombinationBreaker();
    setListMoveView(newListMoveView);
  }, [condition]);

  return (
    <>
      <PrintListMovement />
    </>
  );
};
