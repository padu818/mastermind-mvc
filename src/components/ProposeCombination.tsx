import {FC, useState } from "react";
import { CombinationBreakerController } from "../controller/CombinationBreakerController";
import { ProposeCombinationParameter } from "./view/Interfaces";
import { ErrorCombination } from "./Error";
import styles from '../utils/components/component-css/input.module.css';
import { Button, TextField } from "@mui/material";
import { CreatorController } from "../controller/CreatorController";

export const ProposeCombination: FC<ProposeCombinationParameter> = ({
  eventBoolean,
  setEventBoolean,
  makeBreakerCombination,
  setMakeBreakerCombination,
}) => {
  const [errorText, setErrorText] = useState<string[]>([]);
  const [eventError, setEventError] = useState(true);
  const combinationBreakerController: CombinationBreakerController = CreatorController.createCombinationBreakerController();

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      !combinationBreakerController.validateInputCombination(
        makeBreakerCombination
      )
    ) {
      setErrorText(combinationBreakerController.getErrorText());
      setEventError(false);
    } else {
      setErrorText([]);
      combinationBreakerController.putCombinationBreaker(
        makeBreakerCombination
      );
      setEventBoolean(!eventBoolean);
      setEventError(true);
    }
  };

  const error = () => {
    if (!eventError) {
      return <ErrorCombination text={errorText}></ErrorCombination>;
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMakeBreakerCombination(e.target.value);
  };

  return (
    <div>
      <form autoComplete="on">
        <TextField
          id="input-combination"
          type="text"
          label={""}
          variant="standard"
          className={styles.input}
          required={true}
          onChange={handleOnChange}
          value={makeBreakerCombination}
          InputProps={{
            className:styles.colorInput,
          }}
        />
        <Button className={styles.colorInput} onClick={(e) => handleOnClick(e)}>Send</Button>
      </form>
      <>{error()}</>
    </div>
  );
};
