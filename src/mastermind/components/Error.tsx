
import { Alert, AlertTitle } from "@mui/material";
import { FC } from "react";
import { arrayStringParameter } from "./view/Interfaces";


export const ErrorCombination : FC<arrayStringParameter> = ({text}) => {
  return (
    <>
  <Alert severity="error" className="App-main-error">
    <AlertTitle>Error</AlertTitle>
    <ul>
      {
        text.map( x => <li>{x}</li>)
      }
    </ul>
  </Alert>
    </>
  )
}