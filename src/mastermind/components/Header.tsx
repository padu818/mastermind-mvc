import { Dialog, IconButton } from "@mui/material";
import { FC, useState } from "react";
import styles from "./component-css/header.module.css";
import { GameRules } from "./GameRules";
import HelpIcon from '@mui/icons-material/Help';

export const Header: FC = () => {
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  const handleOnClickRules = () => {
    setIsRulesOpen(!isRulesOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <h1>MASTERMIND</h1>
       <div>
        <IconButton title="Game Rules" onClick={handleOnClickRules}>
            <HelpIcon className={styles.iconRules}/>
          </IconButton>
        </div> 
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
