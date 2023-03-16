import React from "react";
import styles from "./Container.module.css";
import Card from "../Card";
import Footer from "../Footer";
function index() {
  return (
    <div className={styles["container"]}>
      <div className={styles["container__design"]}>
        <Card />
        <Footer />
      </div>
    </div>
  );
}

export default index;
