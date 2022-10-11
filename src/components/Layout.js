import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./layout.css";


function Layout(props) {
  return (
    <div className="bodyStructure">

      <Sidebar />
      <div className="">
        <Header />

        <div className="pb-12">{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;
