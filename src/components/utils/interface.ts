import { Dispatch, SetStateAction } from "react";

export interface BooleanParameter {
  condition: boolean,
  setCondition:Dispatch<SetStateAction<boolean>>
}
