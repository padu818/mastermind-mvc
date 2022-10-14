import { MovementView } from "../components/view/Interfaces";
import { Combination } from "../domain/model/Combination";
import { Game } from "../domain/model/Game";
import { Movement } from "../domain/model/Movement";
import { gameService } from "../domain/services/Game.service";
import { MoveController } from "./MoveController";


export class startGameController {
  private game: Game;
  private static _instance: startGameController;
  constructor() {
    this.game = gameService.createGame(); 
    console.log(this.game.getSecretCombination());
  }
  
  public static getInstance()
  {
    return this._instance || (this._instance = new startGameController());
  }

  getAttempt(){
    return (this.game.getAttempt()+1).toString();
  }


  isEndGame(){
    if(this.game.getAttempt() >= 0){
      return this.game.isEndGame();
    }
    else{
      return false;
    }
  }

  getResult(){
    let isWinner:boolean = this.game.isWinner();
    let stringResult = "";
    if(isWinner){
      stringResult = "Has acertado a la combinacion secreta "+this.game.getSecretCombination() + " en "+this.game.getAttempt()+ " intentos";
    }
    else{
      stringResult = "No has acertado :(";
    }
    return stringResult;
  }

  createGame(){
    this.game = gameService.createGame(); 
  }
  getSecretCombination(){
    return this.game.getSecretCombination();
  }
  addCombinationBreaker(combination: Combination){
    gameService.addCombinationBreaker(combination,this.game);
  }
  listCombinationBreaker(){
    const listMoveView : MovementView[] = [];
    const moveController: MoveController = MoveController.getInstance();
    for(let i = 0; i <= this.game.getAttempt(); i++){
      const move : Movement = this.game.getMovement(i);
      const movementView : MovementView = {
        combination : moveController.addCombination(move.getCombination()),
        result : move.getBlackAndWhite()
      }
      listMoveView.push(movementView);
    }
    return listMoveView;
  }
}