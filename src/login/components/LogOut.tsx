import { FC } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import { LoginController } from "../controller/LoginController";
import { BooleanParameter } from "../utils/interfaces";
import { CreatorController } from "../controller/CreatorController";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const Login: FC = () => {
  const loginController: LoginController =
    CreatorController.createLoginController();


  return (
    <div></div>
  );
};
