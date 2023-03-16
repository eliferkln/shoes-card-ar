import React from "react";
import styles from "./card.module.css";
import Nav from "../Navbar";
import Model from "../Model";

function index() {
  return (
    <div className={styles["card"]}>
      <Nav />
      <Model />
    </div>
  );
}

export default index;
