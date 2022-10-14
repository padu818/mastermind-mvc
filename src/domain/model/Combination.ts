import { Token } from "./Token";


export class Combination {
  
  tokens: Array<Token> = [];
  TAM_COMBINATION = 4;

  constructor() {  
  }

  isTheColorRepeat(): boolean{
      let isRepeat: boolean= false;
      let i = 0;
      do{
        let j = i + 1;
          while (!isRepeat && j < this.tokens.length){
              isRepeat = this.equal( this.tokens[j].getColorCharacter(), i);
              j += 1;
          }
        i += 1;
      } while (!isRepeat && i < this.tokens.length);
      return isRepeat;
    } 
    equal(character: string, index: number): boolean{
      return character === this.tokens[index].getColorCharacter();
    }
    addCombination(value: Array<Token>){
      this.tokens = [];
      for(let i = 0; i < value.length; i++){
        this.tokens.push(value[i]);
      }
    }
    length(): number{
      return this.tokens.length;
    }
    toString(): string{
      let tokenToString = "";
      for(let i = 0; i < this.tokens.length; i++){
        tokenToString += this.tokens[i].getColorCharacter();
      }
      return tokenToString;
    }
    getColorPosition(index: number) : string {
      return this.tokens[index].getColorCharacter();
    }
    getTamMaxCombination(): number{
      return this.TAM_COMBINATION;
    }
    getRangeColors(): string{
      return new Token().getRangeColor();
    }
}