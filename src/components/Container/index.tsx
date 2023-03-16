import React from "react";
import styles from "./Container.module.css";
import Card from "../Card";
function index() {
  return (
    <div className={styles["container"]}>
      <Card />
    </div>
  );
}

export default index;
