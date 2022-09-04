import React from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout: React.FC<{ children: JSX.Element }> = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
