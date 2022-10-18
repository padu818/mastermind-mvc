import { Combination } from "./Combination";
import { Token } from "./Token";


export class SecretCombination {
  combination : Combination;
  constructor() {
    this.combination = new Combination();
    this.makeRandomsSecretCombination(); 
  }
  makeRandomsSecretCombination() {
    do {
      this.combination.addCombination(this.makeRandomColor());
    } while (this.combination.isTheColorRepeat());
  }
  getCombination(): Combination {
    return this.combination;
  }
  
  makeRandomColor(): Array<Token> {
    let randomTokens : Array<Token>= [];
    for (let i = 0; i < this.combination.getTamMaxCombination();i++){
      const newToken = new Token();
      newToken.getRandomColor();
      randomTokens.push(newToken);
    }
    return randomTokens;
  }
  toString(): string {
    return this.combination.toString();
  }
  length() : number{
    return this.combination.length();
  }
  getColorPosition(index: number) : string{
    return this.combination.getColorPosition(index);
  }
 addCombination(newTokens : Array<Token>){
  this.combination.addCombination(newTokens);
 }

}

