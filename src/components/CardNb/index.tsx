import styles from "./card.module.css";
import Nav from "../NavNb";
import Model from "../ModelNb";
import ModelMen from "../ModelNbMen";
import ModelNike from "../ModelNbWomen";
import React, { useState } from "react";

function Index() {
  const [menuComponentNb, setMenuComponentNb] = useState<string>("");

  return (
    <div className={styles["card"]}>
      <Nav setMenuComponentNb={setMenuComponentNb} />
      {!menuComponentNb && <Model />}

      {menuComponentNb === "women" && <ModelMen />}
      {menuComponentNb === "men" && <ModelNike />}
      {menuComponentNb === "nb" && <Model />}
    </div>
  );
}

export default Index;
