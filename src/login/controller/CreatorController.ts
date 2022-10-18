
import { LoginController } from "./LoginController";



export const CreatorController = {
  createLoginController (): LoginController {
    return new LoginController();
    //todo
  }
}
