import { gameService } from "../domain/services/Game.service";
import { CombinationBreakerController } from "./CombinationBreakerController";
import { MoveController } from "./MoveController";
import { StartGameController } from "./StartGameController";


export const CreatorController = {

  createStartGameController() : StartGameController{
    return new StartGameController(gameService.createGame());
  },
  createCombinationBreakerController () : CombinationBreakerController {
    return new CombinationBreakerController(gameService.createGame());
  },
  createMoveController () : MoveController {
    return new MoveController(gameService.createGame());
  }
}














/*
export const ACHIEVEMENT_REPOSITORY = Symbol('ACHIEVEMENT_REPOSITORY')
export const HTTP_CLIENT = Symbol('HTTP_CLIENT')

*/