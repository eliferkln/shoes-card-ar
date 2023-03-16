import React from "react";
import styles from "./Navbar.module.css";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { CiShop } from "react-icons/ci";

function index() {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar__logo"]}>
        <h2>NIKE</h2>
      </div>

      <div className={styles["navbar__menu"]}>
        <ul>
          <li>home</li>
          <li>men</li>
          <li>women</li>
          <li>kids</li>
        </ul>
      </div>
      <div className={styles["navbar__icon"]}>
        <ul>
          <li>
            <AiOutlineSearch />
          </li>
          <li>
            <BiMessage />
          </li>
          <li>
            <AiOutlineShoppingCart />
          </li>
          <li>
            <CiShop />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default index;
