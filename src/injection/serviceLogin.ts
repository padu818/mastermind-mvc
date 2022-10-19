import { LogIn } from "../login/domain/model/LogIn";


export const serviceLogin = {

  isLogin(){
    return LogIn.getInstance().isLogIn;
  },
  logOut(){
    LogIn.getInstance().logOut();
  },
  logIn(){
    LogIn.getInstance().logIn();
  }
}


