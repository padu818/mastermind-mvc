import { FC} from "react";
import { COMBINATION_SIZE, RANGE_COLOR } from "../domain/utils/constants";
import styles from "./component-css/header.module.css";
export const GameRules: FC = () => {
  
  return (
    <div className={styles.rules}>
    <h3>Objetivos</h3>
      <p>Se ha generado una combinacion secreta de 4 colores diferentes y se debe 
        adivinar esa combinacion en maximo 10 intentos para ganar.
      </p>
      <p>
        La combinacion de colores está formado por la letra inicial de cada color, por lo que se
        deberá escribir un combinación de 4 caracteres, en la que no se podrá repetir el mismo color.
        El rango de colores permitido es el siguiente: {RANGE_COLOR}
      </p>
      <p>
        Luego de elegir la combinacion se mostrará la elegida junto con la respuesta.
        En la columna "black" se visualizará un numero que representa los colores que se acertó en la posicion, y en la columna "white" 
        se visualizará el número de colores que se adivinó, pero en erronea posicion.
        Si el numero es 0, significa que se deberá probar con otros colores.
      </p>
      <p>
        Se gana cuando la cantidad de colores que se adivinan en la posicion correcta son {COMBINATION_SIZE}.
      </p>
    </div>
  );
};
