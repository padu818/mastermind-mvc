import { Dialog } from "@mui/material";
import { FC, useState } from "react";
import styles from "./component-css/header.module.css";
import { GameRules } from "./GameRules";

export const Header: FC = () => {
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  const handleOnClickRules = () => {
    setIsRulesOpen(!isRulesOpen);
  };

  return (
    <>
      <header className={styles.main}>
        <h1>MASTERMIND</h1>
        {/*  <div>
        <IconButton title="Game Rules" onClick={handleOnClickRules}>
            <HelpIcon />
          </IconButton>
        </div> */}
      </header>
      <Dialog
        title="Game Rules"
        open={isRulesOpen}
        onClose={handleOnClickRules}
      >
        <GameRules />
      </Dialog>
    </>
  );
};
