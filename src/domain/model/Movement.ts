import { Combination } from "./Combination";
import { Result } from "./Result";


export class Movement {
  combination: Combination;
  result : Result;

  constructor(secretCombination: Combination, proposeCombination: Combination) {
    this.combination = proposeCombination;
    console.log(secretCombination.toString())
    this.result = new Result(proposeCombination, secretCombination);
  }
  isWinner(): boolean{
    return this.result.isWinner(this.combination.length());
  }
  getBlackAndWhite(){
    return this.result.getBlackAndWhite();
  }
  getCombination(){
    return this.combination.toString();
  }
}