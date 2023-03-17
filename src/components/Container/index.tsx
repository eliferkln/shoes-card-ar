import React, { useState } from "react";
import styles from "./Container.module.css";
import Card from "../Card";
import CardAdidas from "../CardAdidas";
import CardNb from "../CardNb";
import Footer from "../Footer";
import Button from "../Button";

function Index() {
  const [showCard, setShowCard] = useState<string>("");
  return (
    <div className={styles["container"]}>
      <div className={styles["container__design"]}>
        {!showCard && <Card />}
        {showCard === "nike" && <Card />}
        {showCard === "adidas" && <CardAdidas />}
        {showCard === "nb" && <CardNb />}
        <Button setShowCard={setShowCard} />
        <Footer />
      </div>
    </div>
  );
}

export default Index;
