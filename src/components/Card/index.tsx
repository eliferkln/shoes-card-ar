import styles from "./card.module.css";
import Nav from "../Navbar";
import Model from "../Model";
import ModelMen from "../ModelMen";
import ModelHome from "../ModelHome";
import ModelNike from "../ModelNike";
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
      {menuComponent === "nike" && <ModelNike />}
    </div>
  );
}

export default Index;
