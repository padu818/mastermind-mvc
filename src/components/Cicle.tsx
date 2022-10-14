import { FC } from "react";
import styles from "./component-css/circle.module.css";
import { ColorID, COLORS, TokenGuess } from "../domain/utils/constants";

export const Circle: FC<{ color: TokenGuess }> = ({ color }) => {
  let colorCss = Object.keys(COLORS) as ColorID[];
  colorCss = colorCss.filter((x: ColorID) => x == color);

  return (
    <div
      style={{ background: `${COLORS[colorCss[0]]}` }}
      className={styles.circle}
    >
      {color}
    </div>
  );
};
