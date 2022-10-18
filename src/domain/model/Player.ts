import { GameHistory } from "../utils/interface";
import { Game } from "./Game";


export class Player {

  private name: string;
/*   private listHistory: GameHistory[] = []; */

  constructor(name: string){
    this.name = name;
  }

  setName(newName: string){
    this.name = newName;
  }
/* 
  addMatch(newGame: Game){
    const saveGameHistory : GameHistory = {
      game:newGame,
      date: new Date()
    }
    this.listHistory.push(saveGameHistory);
  }

  getListHistory() : GameHistory[]{
    return this.listHistory;
  } */

  getName(): string{
    return this.name;
  }

}


