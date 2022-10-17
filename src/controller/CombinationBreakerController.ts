import { Combination } from "../domain/model/Combination";
import { Game } from "../domain/model/Game";
import { combinationService } from "../domain/services/Combination.service";
import { gameService } from "../domain/services/Game.service";
import { ErrorCombination } from "../domain/utils/ErrorText";


export class CombinationBreakerController {
  isCorrect = false;
  errorText: string[] = [];
  game: Game;
  
  constructor(game: Game) {
    this.game = game;
  }
  
  getIsCorrect() {
    return this.isCorrect;
  }

  getErrorText() {
    console.log(this.errorText);
    return this.errorText;
  }

  validateInputCombination(tokens: string) {
    const combination: Combination =
      combinationService.createCombination(tokens);
    let arrayBoolean = this.validateCombination(combination);
    if (this.isTheCombinationCorrect(arrayBoolean)) {
      return true;
    } else {
      this.setErrorText(arrayBoolean);
      return false;
    }
  }

  putCombinationBreaker(tokens: string) {
    const combination: Combination =
      combinationService.createCombination(tokens);
      gameService.addCombinationBreaker(combination,this.game);
  }

  setErrorText(arrayBoolean: boolean[]) {
    this.errorText = [];
    for (let i = 0; i < arrayBoolean.length; i++) {
      if (!arrayBoolean[i]) {
        this.errorText.push(ErrorCombination[i]);
      }
    }
  }

  isTheColorRight(combination: Combination): boolean {
    let condition = true;
    let index = 0;
    while (condition && index < combination.length()) {
      condition = this.containRangeColor(index, combination);
      index += 1;
    }
    return condition;
  }
  containRangeColor(index: number, combination: Combination): boolean {
    return combination.getColorPosition(index) !== " ";
  }
  isTheSizeRight(combination: Combination): boolean {
    return combination.getTamMaxCombination() === combination.length();
  }
  validateCombination(combination: Combination): Array<boolean> {
    let arrayBooleanCondition: Array<boolean> = [];
    arrayBooleanCondition.push(this.isTheSizeRight(combination));
    arrayBooleanCondition.push(this.isTheColorRight(combination));
    arrayBooleanCondition.push(!combination.isTheColorRepeat());
    return arrayBooleanCondition;
  }
  isTheCombinationCorrect(arrayBooleanCondination: boolean[]) {
    let index = 0;
    while (
      arrayBooleanCondination[index] &&
      index < arrayBooleanCondination.length
    ) {
      index++;
    }
    return index < arrayBooleanCondination.length ? false : true;
  }
}
