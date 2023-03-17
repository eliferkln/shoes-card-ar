import React from "react";
import styles from "./Navbar.module.css";
import { IProps } from "./IProps";
import { GrNext } from "react-icons/gr";

const index: React.FC<IProps> = ({ setMenuComponent }) => {
  const ComponentName = (name: string) => {
    setMenuComponent(name);
    console.log("state çalıştı", name);
  };
  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar__logo"]}>
        <h2>NIKE</h2>
      </div>

      <div className={styles["navbar__menu"]}>
        <ul>
          <li onClick={() => ComponentName("home")}>home</li>
          <li onClick={() => ComponentName("men")}>men</li>
          <li onClick={() => ComponentName("women")}>women</li>
          <li onClick={() => ComponentName("nike")}>nike</li>
          {/* <li>
            <GrNext />
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default index;
