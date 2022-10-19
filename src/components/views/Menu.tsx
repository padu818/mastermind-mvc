import { Button } from "@mui/material";
import { FC, useEffect, useState } from "react";
import {
  VIEW_HOME_PATH,
  VIEW_MASTERMIND_PATH,
  VIEW_SIGNIN_PATH,
  VIEW_SIGNUP_PATH,
} from "../../config/routing/path";
import { serviceLogin } from "../../injection/serviceLogin";
import { BooleanParameter } from "../utils/interface";


export const Menu: FC= () => {

  const [isLogin, setIsLogin] = useState(serviceLogin.isLogin());

  const handleOnClick = () => {
    serviceLogin.logOut();
    setIsLogin(serviceLogin.isLogin());
  };

  useEffect(() => {
    setIsLogin(serviceLogin.isLogin());
  },[])

  return (
    <div>
      {isLogin ? (
        <div>
          <Button onClick={handleOnClick}>
            Sign Out
          </Button>
          <p>
            <Button href={VIEW_MASTERMIND_PATH}>Mastermind</Button>
          </p>
        </div>
      ) : (
        <div>
          <p>
            <Button href={VIEW_SIGNIN_PATH} >Sign In</Button>
          </p>
          <p>
            <Button href={VIEW_SIGNUP_PATH}>Sign Up</Button>
          </p>
        </div>
      )}
    </div>
  );
};
