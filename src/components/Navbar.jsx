import React from "react";
import { NavLink } from "react-router-dom";
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md";

const Navbar = ({ containerStyles, toggleMenu }) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to={"/Navbar"}
        onClick={toggleMenu}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdHomeFilled /> Home
        </div>
      </NavLink>
      <NavLink
        to={"/Navbar/about"}
        onClick={toggleMenu}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdCategory /> About
        </div>
      </NavLink>
      <NavLink
        to={"/Navbar/contact"}
        onClick={toggleMenu}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdShop2 /> Contact
        </div>
      </NavLink>
      <NavLink
        to={"/Navbar/shop"}
        onClick={toggleMenu}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdContacts /> Shop
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
