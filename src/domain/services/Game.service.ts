
import { Combination } from "../model/Combination"
import { Game } from "../model/Game";
import { Player } from "../model/Player";
import { playerService } from "./Player.service";

export const gameService = {
  addCombinationBreaker: (proposeCombination: Combination, game: Game): void => {
    game.addMovement(proposeCombination);
  },
  createGame(){
    return Singleton_game.getInstance(playerService.getPlayer());
  }
}


class Singleton_game {
  private static _instance: Game;

  public static getInstance(player:Player)
  {
    return this._instance || (this._instance = new Game(player));
  }

}