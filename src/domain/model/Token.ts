import { RANGE_COLOR } from "../utils/constants";


export class Token {
  RANGE_COLORS : Array<string> = RANGE_COLOR;
  color : string = "";

  constructor(){}

  setColor(newColor: string){
    this.color = this.RANGE_COLORS.filter(x => x === newColor).length === 0 ? " " : newColor;
  }
  getColorCharacter(): string{
    return this.color;
  }
  getRandomColor(){
    this.setColor(this.RANGE_COLORS[Math.floor(Math.random() * this.RANGE_COLORS.length)])
  }
  getColor(): string {
    return this.color;
  }
  getRangeColor(): string {
    let colors : string = ""
    for(let item in this.RANGE_COLORS){
      colors+= item+",";
    }
    return colors;
  }
}