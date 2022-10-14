import { FC, useEffect, useState } from "react";
import { TokenGuess } from "../domain/utils/constants";
import { startGameController } from "../controller/StartGameController";
import { Circle } from "./Cicle";
import { BlackAndWhite } from "./BlackAndWhite";
import { BooleanParameter, MovementView } from "./view/Interfaces";
import { BorderSeparator } from "../utils/components/BorderSeparator";

export const ListMovement: FC<BooleanParameter> = ({ condition }) => {
  const [listMoveView, setListMoveView] = useState<MovementView[]>([]);

  const startController: startGameController =
    startGameController.getInstance();

  const PrintListMovement = () => {
    if (listMoveView.length > 0) {
      return (
        <div>
          <h1>Combinaciones</h1>
          {listMoveView.map((x: MovementView) => (
            <div>
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
      startController.listCombinationBreaker();
    setListMoveView(newListMoveView);
  }, [condition]);

  return (
    <>
      <PrintListMovement />
    </>
  );
};
