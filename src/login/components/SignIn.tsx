import { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import { LoginController } from "../controller/LoginController";
import { BooleanParameter } from "../utils/interfaces";
import { CreatorController } from "../controller/CreatorController";
import { Link } from "react-router-dom";
import { VIEW_HOME_PATH, VIEW_MASTERMIND_PATH } from "../../config/routing/path";
import { serviceLogin } from "../../injection/serviceLogin";

export const SignIn: FC = () => {
  const loginController: LoginController =
    CreatorController.createLoginController();
  
    const [condition, setCondition] = useState(true);

  const handleOnClick = () => {
    serviceLogin.logIn();
  };

  const Error = () => {
    return (
      <>
        <h3>Error</h3>
        <p>todo</p>
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
        <div>
          <TextField
            id="input-username"
            type="text"
            label={"Username"}
            variant="standard"
            required={true}
          />
          <TextField
            id="outlined-password-input"
            type="password"
            label="Password"
            variant="standard"
            required={true}
          />
          <Button
            href={VIEW_HOME_PATH}
            variant="contained"
            size="medium"
            onClick={handleOnClick}
          >
            Send
          </Button>
        </div>
      </Box>
      <>{condition ? <></> : <Error />}</>
    </div>
  );
};
