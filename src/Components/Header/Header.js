import React from "react";
import { Navbar, NavList, NavIcons, NavLogoSection, NavLogo } from "../UI"; // Use the same names you exported
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
export function Header() {
  return (
    <Navbar>
      <NavLogoSection>
        <NavLogo></NavLogo>
        <span>CandleLeaf</span>
      </NavLogoSection>
      <NavList>
        <li>Discovery</li>
        <li>About</li>
        <li>Contact Us</li>
      </NavList>
      <NavIcons>
        <FaRegUser />
        <AiOutlineShoppingCart />
      </NavIcons>
    </Navbar>
  );
}
