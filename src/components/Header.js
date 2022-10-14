import { Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";

const Header = () => {
  // Make the checkbox checked if the user is admin

  return (
    <div
      className="py-4 border-b-2 border-solid border-black"
      style={{
        backgroundColor: "#0177FB",
        color: "white",
      }}
    >
      <h1>
        <Typography variant="h6" component="h1" align="center">
          Mini Bank
        </Typography>
      </h1>
    </div>
  );
};

export default connect()(Header);
