import { Dispatch, SetStateAction } from "react";
import { TokenGuess } from "../../domain/utils/constants";

export interface Result {
  black: string;
  white: string;
}

export interface CombinationView {
  tokens: TokenGuess[];
}

export interface MovementView {
  combination: CombinationView;
  result: Result;
}

export interface ProposeCombinationParameter {
  eventBoolean: boolean,
  setEventBoolean:Dispatch<SetStateAction<boolean>>,
  makeBreakerCombination:string,
  setMakeBreakerCombination:Dispatch<SetStateAction<string>>
}

export interface BooleanParameter {
  condition: boolean,
  setCondition:Dispatch<SetStateAction<boolean>>
}

export interface PointParameter {
  point:string
}


export interface MovementParameter {
  makeBreakerCombination:string,
  setMakeBreakerCombination:Dispatch<SetStateAction<string>>
  eventBoolean: boolean,
  listCombination: CombinationView[],
  setListCombination: Dispatch<SetStateAction<CombinationView[]>>,
}

export interface arrayStringParameter {
  text: string[];
}

export interface StringParameter {
  value: string
}

export interface ListCombinationParameter {
  listCombination: CombinationView[]
}

export interface User{
  username: string,
  password: string,
}