import { Game } from "../model/Game";
import { Player } from "../model/Player";

export const playerService = {
  createPlayer(name: string){
    return new Player(name);
  },
  getPlayer(){
    //todo
    const player: Player = new Player("Pedro");
    return player;
  }
}
