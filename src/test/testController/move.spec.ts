import "reflect-metadata";
import { MoveController } from "../../controller/MoveController"


describe('readProposeCombination', () => {
  it('should be true', () => {
    const moveController =  MoveController.getInstance();
    const secretCombination = moveController.createSecretCombination();
    console.log(secretCombination.tokens);

    const result = secretCombination.tokens.length > 0;

    expect(result).toEqual(true);
  })

});