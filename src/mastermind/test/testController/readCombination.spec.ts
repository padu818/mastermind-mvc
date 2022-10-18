import { CombinationBreakerController } from "../../controller/CombinationBreakerController";
import { CreatorController } from "../../controller/CreatorController";

describe("readProposeCombination", () => {
  it("should be true", () => {
    const controllerCombination =CreatorController.createCombinationBreakerController();

    const result = controllerCombination.validateInputCombination("rgyb");

    expect(result).toEqual(true);
  });

  it("should be false", () => {
    const controllerCombination = CreatorController.createCombinationBreakerController();

    const result = controllerCombination.validateInputCombination("r");

    expect(result).toEqual(false);
  });

  it("should be false", () => {
    const controllerCombination = CreatorController.createCombinationBreakerController();

    const result = controllerCombination.validateInputCombination("rgyy");

    expect(result).toEqual(false);
  });

  it("should be false", () => {
    const controllerCombination = CreatorController.createCombinationBreakerController();

    const result = controllerCombination.validateInputCombination("rpyb");

    expect(result).toEqual(false);
  });

  it("should get string of 1 element", () => {
    const controllerCombination = CreatorController.createCombinationBreakerController();

    const result = controllerCombination.validateInputCombination("rgyy");

    expect(result).toEqual(false);
  });
});
