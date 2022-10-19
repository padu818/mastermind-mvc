import { FC } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import { LoginController } from "../controller/LoginController";
import { BooleanParameter } from "../utils/interfaces";
import { CreatorController } from "../controller/CreatorController";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const Login: FC<BooleanParameter> = ({ condition, setCondition }) => {
  const loginController: LoginController =
    CreatorController.createLoginController();

  const handleOnClickSingIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    <SignIn />
  };

  
  const handleOnClickSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    <SignUp />
  };

  const Error = () => {
    return (
      <>
        <h3>Error</h3>
      </>
    );
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        autoComplete="off"
      >
          <Button
            variant="contained"
            size="medium"
            onClick={(e) => handleOnClickSingIn(e)}
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            size="medium"
            onClick={(e) => handleOnClickSignUp(e)}
          >
            Sign out
          </Button>
      </Box>
    </div>
  );
};
