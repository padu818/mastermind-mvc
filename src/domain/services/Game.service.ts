
import { Combination } from "../model/Combination"
import { Game } from "../model/Game";

export const gameService = {
  addCombinationBreaker: (proposeCombination: Combination, game: Game): void => {
    game.addMovement(proposeCombination);
  },
  createGame(){
    return Singleton_game.getInstance();
  }
}


class Singleton_game {
  private static _instance: Game;

  public static getInstance()
  {
    return this._instance || (this._instance = new Game());
  }

}