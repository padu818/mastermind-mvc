import { App } from "../../App";
import { SignIn } from "../../login/components/SignIn";
import { SignUp } from "../../login/components/SignUp";
import { AppMastermind } from "../../mastermind/AppMastermind";
import { VIEW_HOME_PATH, VIEW_MASTERMIND_PATH, VIEW_SIGNIN_PATH, VIEW_SIGNUP_PATH } from "./path";

const VIEW_SIGNUP = {
  element:{SignUp},
  path:VIEW_SIGNUP_PATH,
  isPrivate:false
};

 const VIEW_SIGNIN ={
  element:{SignIn},
  path:VIEW_SIGNIN_PATH,
  isPrivate:false
};

 const VIEW_MASTERMIND = {
  element:{AppMastermind},
  path:VIEW_MASTERMIND_PATH,
  isPrivate:true
};

/* const VIEW_HOME = {
  element:{App},
  path:VIEW_HOME_PATH,
  isPrivate:true
}; */

export const routes = [VIEW_SIGNUP,VIEW_SIGNIN,VIEW_MASTERMIND];

