import React from "react";
import MENU_DATA from "../data/menu.data";
import "../assets/css/NavBar.css";
import { IoIosHelpCircleOutline } from "react-icons/io";

export default function NavBar() {
  function toggle_menu() {
    document.querySelector(".app").classList.toggle("collapse-menu");
  }

  return (
    <nav>
      <header>
        <button onClick={toggle_menu}>{"  <  "}</button>
      </header>
      <ul>
        {MENU_DATA.map((item, index) => {
          return (
            <li key={index}>
              <IoIosHelpCircleOutline />
              <a href="#">{item.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
