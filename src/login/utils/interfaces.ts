import { Dispatch, SetStateAction } from "react";




export interface BooleanParameter {
  condition: boolean,
  setCondition:Dispatch<SetStateAction<boolean>>
}


export interface arrayStringParameter {
  text: string[];
}

export interface StringParameter {
  value: string
}

export interface User{
  username: string,
  password: string,
}