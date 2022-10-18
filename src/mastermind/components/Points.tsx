import { FC} from "react";
import { PointParameter } from "./view/Interfaces";

export const Points: FC<PointParameter> = ({ point }) => {
  
  return (
    <>
      <p>Attempt: {point}</p>
    </>
  );
};
