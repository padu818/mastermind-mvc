import { Combination } from "../domain/model/Combination";
import { Game } from "../domain/model/Game";
import { gameService } from "../domain/services/Game.service";


export class StartGameController {
  private game: Game;
  
  constructor(game:Game) {
    this.game = game; 
  }

  getAttempt(){
    return (this.game.getAttempt()+1).toString();
  }


  isEndGame(){
    if(this.game.getAttempt() > 0){
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
      stringResult = "Has acertado a la combinacion secreta "+this.game.getSecretCombination() + " en "+(this.game.getAttempt()+1)+ " intentos";
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
}