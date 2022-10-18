import { Combination } from "./Combination";

export class Result {
  blacks: number = 0;
  whites: number = 0;
  constructor(proposeCombination: Combination, secretCombination: Combination) {
    this.setBlacks(proposeCombination, secretCombination);
    this.setWhites(proposeCombination, secretCombination);
  }


  toString(){
    return "blacks: "+this.blacks+" | white: " +this.whites;
  }
  isWinner(tamCombination: number){
    return this.blacks === tamCombination;
  }
  setBlacks(proposeCombination: Combination, secretCombination: Combination) {
    let value = 0;
    for (let i = 0; i < secretCombination.length(); i++) {
      if (proposeCombination.equal(secretCombination.getColorPosition(i), i)) {
        value++;
      }
    }
    this.blacks = value;
  }
  setWhites(proposeCombination: Combination, secretCombination: Combination) {
    let value = 0;
    for (let i = 0; i < secretCombination.length(); i++) {
      for (let j = 0; j < proposeCombination.length(); j++) {
        if (
          proposeCombination.equal(secretCombination.getColorPosition(i), j) &&
          i !== j
        ) {
          value++;
        }
      }
    }
    this.whites = value;
  }
  getBlack(){
    return this.blacks;
  }
  getWhite(){
    return this.whites;
  }
  getBlackAndWhite(){
    const black = ""+this.blacks;
    const white = ""+this.whites;
    return {black, white};
  }
}