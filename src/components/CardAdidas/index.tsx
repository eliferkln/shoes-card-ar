import styles from "./card.module.css";
import Nav from "../NavAdidas";
import Model from "../ModelAdidas";
import ModelMen from "../ModelAdidasMen";
import ModelNike from "../ModelAdidasWomen";
import React, { useState } from "react";

function Index() {
  const [menuComponentAdidas, setMenuComponentAdidas] = useState<string>("");

  return (
    <div className={styles["card"]}>
      <Nav setMenuComponentAdidas={setMenuComponentAdidas} />
      {!menuComponentAdidas && <Model />}

      {menuComponentAdidas === "women" && <ModelNike />}
      {menuComponentAdidas === "men" && <ModelMen />}
      {menuComponentAdidas === "adidas" && <Model />}
    </div>
  );
}

export default Index;
