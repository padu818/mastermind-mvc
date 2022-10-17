import { Combination } from "./Combination";
import { Movement } from "./Movement";
import { SecretCombination } from "./SecretCombination";

export class Board {
  BOARD_FULL : Number = 10;
  listMovement : Array<Movement> = [];
  secretCombination : SecretCombination;
  constructor() {
    this.secretCombination = new SecretCombination();
  }

  isTheBoardFull(): boolean{
    return this.listMovement.length >= this.BOARD_FULL;
  }
  addMovement(proposeCombination: Combination) {
    this.listMovement.push(new Movement( this.secretCombination.getCombination(),proposeCombination));
  }
  isEndGame(): boolean{
      return this.isTheBoardFull() || this.isWinner() ;
  }
  getAttempt(): number{
      return this.listMovement.length-1;
  }
  getLastMovement(): Movement{
      return this.listMovement[this.getAttempt()];
  }
  getMovement(position: number): Movement{
      return  this.listMovement[position];
  }
  isWinner(): boolean{
      return this.getLastMovement().isWinner();
  }
  getSecretCombination(): string{
    return this.secretCombination.toString();
  }

}