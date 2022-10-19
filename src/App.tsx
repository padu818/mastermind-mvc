import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import { AppMastermind } from "./mastermind/AppMastermind";
import { VIEW_HOME_PATH, VIEW_MASTERMIND_PATH, VIEW_SIGNIN_PATH, VIEW_SIGNUP_PATH } from "./config/routing/path";
import { SignIn } from "./login/components/SignIn";
import { SignUp } from "./login/components/SignUp";
import { Menu } from "./components/views/Menu";
import { serviceLogin } from "./injection/serviceLogin";

export const App: FC = () => {

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(serviceLogin.isLogin());
  })


  return (
    <div className={styles.app}>
    <Routes>
      <Route path={VIEW_HOME_PATH} element={<Menu/> }></Route>
      <Route path={VIEW_SIGNIN_PATH} element={<SignIn/>} ></Route>
      <Route path={VIEW_SIGNUP_PATH} element={<SignUp/>}></Route>
      <Route path={VIEW_MASTERMIND_PATH} element={<AppMastermind/>} ></Route>
    </Routes>
    </div>
  );
};
