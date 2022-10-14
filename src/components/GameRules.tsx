import { FC} from "react";
import { RANGE_COLOR } from "../domain/utils/constants";
import styles from "./component-css/main.module.css";
export const GameRules: FC = () => {
  
  return (
    <div className={styles.main}>
    <h3>Objetivos</h3>
      <p>Se ha generado una combinacion secreta de 4 colores diferentes y usted debe 
        adivinar esa combinacion en maximo 10 intentos para ganar.
      </p>
      <p>
        La combinacion de colores está formado por la letra inicial de cada color, por lo que
        deberá escribir un texto de 4 caracteres, en la que no podrás repetir el mismo color.
        El rango de colores permitido es el siguiente: {RANGE_COLOR}
      </p>
      <p>
        Luego de elegir la combinacion se les mostrará la combinacion elegida junto con la respuesta.
        El primer numero representa los colores que acertaste en la posicion, y la segunda es la cantidad de colores que adivinaste 
        pero en erronea posicion.
        Si el numero es 0, significa que no has acertado al color.
      </p>
    </div>
  );
};
