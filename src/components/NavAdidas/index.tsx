import React from "react";
import styles from "./Navbar.module.css";
import { IProps } from "./IProps";
import { GrNext } from "react-icons/gr";

const index: React.FC<IProps> = ({ setMenuComponentAdidas }) => {
  const ComponentName = (name: string) => {
    setMenuComponentAdidas(name);
    console.log("state çalıştı", name);
  };
  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar__logo"]}>
        <h2>ADIDAS</h2>
      </div>

      <div className={styles["navbar__menu"]}>
        <ul>
          <li onClick={() => ComponentName("adidas")}>Adidas</li>
          <li onClick={() => ComponentName("men")}>Men</li>
          <li onClick={() => ComponentName("women")}>Women</li>

          {/* <li>
            <GrNext />
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default index;
