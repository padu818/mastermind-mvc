import { FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import { LoginController } from "../controller/LoginController";
import { BooleanParameter } from "../utils/interfaces";
import { CreatorController } from "../controller/CreatorController";

export const SignUp: FC<BooleanParameter> = ({ condition, setCondition }) => {
  const loginController: LoginController =
    CreatorController.createLoginController();

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCondition(!condition);
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
          <TextField
            id="outlined-password-input"
            type="password"
            label="Repeat password"
            variant="standard"
            required={true}
          />
          <Button
            variant="contained"
            size="medium"
            onClick={(e) => handleOnClick(e)}
          >
            Send
          </Button>
        </div>
      </Box>
      <>{condition ? <></> : <Error />}</>
    </div>
  );
};
