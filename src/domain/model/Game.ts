import { Id } from '../utils/id';
import { Board } from './Board';
import { Combination } from './Combination';
import { Player } from './Player';


export class Game {

  private board : Board;
  private player: Player;

  constructor(player: Player) {
    this.player = player;
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