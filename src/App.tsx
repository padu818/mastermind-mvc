import { FC, useState } from "react";
import styles from "./app.module.css";
import { Login } from "./login/components/Login";
import { AppMastermind } from "./mastermind/AppMastermind";

export const App: FC = () => {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className={styles.app}>
      {!isLogin ? (
        <Login condition={isLogin} setCondition={setIsLogin} />
      ) : (
        <AppMastermind />
      )}
    </div>
  );
};
