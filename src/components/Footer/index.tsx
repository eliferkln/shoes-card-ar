import React from "react";
import styles from "./Footer.module.css";

function index() {
  return (
    <div className={styles["footer"]}>
      {" "}
      <h6>Designed & Developed by</h6>{" "}
      <a href="https://reactfiberportfoliowebsite.vercel.app/">
        <h5>Hanife Erkalan</h5>
      </a>
      &copy; {new Date().getFullYear()}
    </div>
  );
}

export default index;
