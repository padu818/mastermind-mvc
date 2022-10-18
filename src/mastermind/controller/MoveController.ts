import { ColorID, TokenGuess } from "../domain/utils/constants";
import { CombinationView, MovementView } from "../components/view/Interfaces";
import { Game } from "../domain/model/Game";
import { Movement } from "../domain/model/Movement";

export class MoveController {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  addCombination(combination: String): CombinationView {
    let newTokens: TokenGuess[] = [];
    for (let i = 0; i < combination.length; i++) {
      newTokens.push(combination[i] as ColorID);
    }
    let newCombination: CombinationView = {
      tokens: newTokens,
    };
    return newCombination;
  }
  listCombinationBreaker() {
    const listMoveView: MovementView[] = [];
    for (let i = 0; i <= this.game.getAttempt(); i++) {
      const move: Movement = this.game.getMovement(i);
      const movementView: MovementView = {
        combination: this.addCombination(move.getCombination()),
        result: move.getBlackAndWhite(),
      };
      listMoveView.push(movementView);
    }
    return listMoveView;
  }
}
