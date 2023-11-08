import React from "react";
import { Navbar } from "../UI"; // Use the same names you exported
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
export function Header() {
  return (
    <Navbar>
      <div className="NavLogoSection">
        <img src="/img/logo.png" alt="logo" />
      </div>
      <ul className="NavList">
        <li>Discovery</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <div className="NavIcons">
        <FaRegUser />
        <AiOutlineShoppingCart />
      </div>
    </Navbar>
  );
}
