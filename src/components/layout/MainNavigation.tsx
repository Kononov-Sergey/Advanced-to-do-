import { NavLink, Link } from "react-router-dom";
import React from "react";
import classes from "./MainNavigation.module.css";

// comp that separates a nav logic asides, very efficient when you start extend your app

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        My Todo
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/Todos"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              All Todos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-Todo"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Add Todo
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
