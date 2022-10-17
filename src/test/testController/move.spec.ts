import "reflect-metadata";
import { CreatorController } from "../../controller/CreatorController";
import { MoveController } from "../../controller/MoveController"


describe('readProposeCombination', () => {
  it('should be true', () => {
    const moveController =  CreatorController.createMoveController();
    const secretCombination = moveController.game.getSecretCombination();
    console.log(secretCombination);

    const result = secretCombination.length > 0;

    expect(result).toEqual(true);
  })

});