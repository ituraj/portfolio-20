import React from "react";
import Nav from "../Nav/Nav";
import "../../styles/main.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
