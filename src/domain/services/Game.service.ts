
import { Combination } from "../model/Combination"
import { Game } from "../model/Game";

export const gameService = {
  addCombinationBreaker: (proposeCombination: Combination, game: Game): void => {
    game.addMovement(proposeCombination);
  },
  createGame(){
    return new Game();
  }
}