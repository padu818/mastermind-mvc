import { FC } from "react";
import { Result } from "./view/Interfaces";
import { Rectangle } from "./Rectangle";


export const BlackAndWhite: FC<Result> = ({ black, white }) => {

  return (
    <>
    <Rectangle value={black}></Rectangle>
    <Rectangle value={white} ></Rectangle>
    </>
  );
};
