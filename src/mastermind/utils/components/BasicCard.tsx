import styles from "../../components/component-css/main.module.css";
import { arrayStringParameter } from '../../components/view/Interfaces';
import { FC } from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export const BasicCard: FC<arrayStringParameter> = ({text}) => {
  const TITLE_POSITION = 0;
  const PARAGRAPH_POSITION = 1;
  const BOTTON_TEXT = 2;
  return (
    <>
      <CardContent>
        <Typography variant="h5" className={styles.main}>
         {text[TITLE_POSITION]}
        </Typography>
        <Typography variant="body2" className={styles.main}>
          {text[PARAGRAPH_POSITION]}
        </Typography>
      </CardContent>
      <CardActions className={styles.main}>
        <Button style={{color:"#553c9a"}} size="small"onClick={() => window.location.reload()}>{text[BOTTON_TEXT]}</Button>
      </CardActions>
    </>
  );
}