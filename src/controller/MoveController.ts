import { ColorID, TokenGuess } from "../domain/utils/constants";
import { CombinationView } from "../components/view/Interfaces";
import { SecretCombination } from "../domain/model/SecretCombination";
import { movementService } from "../domain/services/Movement.service";

export class MoveController {
  private static _instance: MoveController;
  public static getInstance() {
    return this._instance || (this._instance = new MoveController());
  }

  addCombination(combination: String): CombinationView {
    let newTokens: TokenGuess[] = [];
    for (let i = 0; i < combination.length; i++) {
      newTokens.push(combination[i] as ColorID);
    }
    let newCombination: CombinationView = {
      tokens: newTokens,
    };
    return newCombination;
  }
  createSecretCombination(): CombinationView {
    const secretCombination: SecretCombination =
      movementService.createSecretCombination();
    let newTokens: TokenGuess[] = [];
    for (let i = 0; i < secretCombination.length(); i++) {
      newTokens.push(secretCombination.toString()[i] as ColorID);
    }
    let newCombination: CombinationView = {
      tokens: newTokens,
    };
    return newCombination;
  }
}
