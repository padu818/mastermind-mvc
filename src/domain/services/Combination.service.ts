import { Combination } from "../model/Combination";
import { Token } from "../model/Token";

export const combinationService = {
  createCombination: (tokens: string): Combination => {
    const newTokens: Token[] = [];
    for (let i = 0; i < tokens.length; i++) {
      newTokens.push(new Token());
      newTokens[i].setColor(tokens[i])
    }
    const combination = new Combination();
    combination.addCombination(newTokens);
    return combination;
  },
};
