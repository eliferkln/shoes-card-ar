import styles from "./card.module.css";
import Nav from "../Navbar";
import Model from "../Model";
import ModelMen from "../ModelMen";
import ModelHome from "../ModelHome";
import React, { useState } from "react";

function Index() {
  const [menuComponent, setMenuComponent] = useState<string>("");
  console.log("boşş", menuComponent);
  return (
    <div className={styles["card"]}>
      <Nav setMenuComponent={setMenuComponent} />
      {!menuComponent && <ModelHome />}
      {menuComponent === "home" && <ModelHome />}
      {menuComponent === "women" && <Model />}
      {menuComponent === "men" && <ModelMen />}
    </div>
  );
}

export default Index;
