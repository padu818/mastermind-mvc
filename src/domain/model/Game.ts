import { Board } from './Board';
import { Combination } from './Combination';


export class Game {

  board : Board;

  constructor() {
    this.board = new Board();
  }
  addMovement(proposeCombination : Combination) {
    this.board.addMovement(proposeCombination);
  }
  isEndGame() {
    return this.board.isEndGame();
  }
  getAttempt() {
    return this.board.getAttempt();
  }
  getMovement(position: number) {
    return this.board.getMovement(position);
  }
  isWinner() {
    return this.board.isWinner();
  }
  getSecretCombination(): string{
    return this.board.getSecretCombination();
  }
}