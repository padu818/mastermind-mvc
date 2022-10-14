import { SecretCombination } from "../model/SecretCombination";

export const movementService = {
  getBlackAndWhite: () => {
    return {black:"", white:""};
  },
  createSecretCombination: () => {
    return new SecretCombination();
  }
}