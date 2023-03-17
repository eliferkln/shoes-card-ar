import React from "react";
import styles from "./Button.module.css";
import { IProps } from "./IProps";

const index: React.FC<IProps> = ({ setShowCard }) => {
  const ComponentName = (name: string) => {
    setShowCard(name);
    console.log("state çalıştı", name);
  };
  return (
    <div className={styles["button"]}>
      <ul>
        <li onClick={() => ComponentName("nike")}>NIKE</li>
        <li onClick={() => ComponentName("adidas")}>Adidas</li>
        <li onClick={() => ComponentName("nb")}>New Balance</li>
      </ul>
    </div>
  );
};

export default index;
