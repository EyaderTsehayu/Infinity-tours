import React from "react";
import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import "./MainNavigation.css";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const MainNavigation = () => {
  return (
    <React.Fragment>
      <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <h2 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h2>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
