import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { setAccessToken } from "../redux/actions/user";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const userType = useSelector((state) => state.user.userType);
  const [isAdmin, setisAdmin] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (userType === "admin") {
      setisAdmin(true);
    } else {
      setisAdmin(false);
    }
  }, [userType]);

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <div className="min-h-screen">
      <Typography
        variant="h6"
        component="h1"
        align="center"
        className="py-4 italic border-b-2 border-solid border-black"
        style={{ backgroundColor: "#0177FB" }}
      >
        MB
      </Typography>
      {isAdmin ? (
        <div
          className="flex flex-col gap-4 border-r-2 border-slate-400	py-10 px-6 "
          style={{ height: "93vh" }}
        >
          <Typography
            component="h4"
            variant="h6"
            className="cursor-pointer"
            onClick={() => {
              window.location.href = "/";
            }}
            style={{
              color: location.pathname === "/" ? "#0177FB" : "black",
              backgroundColor: location.pathname === "/" ? "#E5F1FF" : "",
              padding: "10px 20px",

              borderRadius: "16px",
            }}
          >
            Home
          </Typography>
          <Typography
            component="h4"
            variant="h6"
            className="cursor-pointer"
            onClick={() => {
              window.location.href = "/allusers";
            }}
            style={{
              color: location.pathname === "/allusers" ? "#0177FB" : "black",
              backgroundColor:
                location.pathname === "/allusers" ? "#E5F1FF" : "",
              padding: "10px 20px",

              borderRadius: "16px",
            }}
          >
            All Users
          </Typography>
          <Typography
            component="h4"
            variant="h6"
            className="cursor-pointer"
            onClick={() => {
              window.location.href = "/creditanddebit";
            }}
            style={{
              color:
                location.pathname === "/creditanddebit" ? "#0177FB" : "black",
              backgroundColor:
                location.pathname === "/creditanddebit" ? "#E5F1FF" : "",
              padding: "10px 20px",

              borderRadius: "16px",
            }}
          >
            Credits/Debits
          </Typography>
          <Typography
            component="h4"
            variant="h6"
            className="cursor-pointer"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Logout
          </Typography>
        </div>
      ) : (
        <div
          className="flex flex-col gap-4 border-r-2 border-slate-400	py-10 px-6"
          style={{ height: "93vh" }}
        >
          <Typography
            component="h4"
            variant="h6"
            className="cursor-pointer"
            onClick={() => {
              window.location.href = "/";
            }}
            style={{
              color: location.pathname === "/" ? "#0177FB" : "black",
              backgroundColor: location.pathname === "/" ? "#E5F1FF" : "",
              padding: "10px 20px",

              borderRadius: "16px",
            }}
          >
            Home
          </Typography>
          <Typography
            component="h4"
            variant="h6"
            className="cursor-pointer"
            onClick={() => {
              window.location.href = "/transfer";
            }}
            style={{
              color: location.pathname === "/transfer" ? "#0177FB" : "black",
              backgroundColor:
                location.pathname === "/transfer" ? "#E5F1FF" : "",
              padding: "10px 20px",
              borderRadius: "16px",
            }}
          >
            Transfer
          </Typography>
          <Typography
            component="h4"
            variant="h6"
            className="cursor-pointer"
            onClick={() => {
              window.location.href = "/transactions";
            }}
            style={{
              color:
                location.pathname === "/transactions" ? "#0177FB" : "black",
              backgroundColor:
                location.pathname === "/transactions" ? "#E5F1FF" : "",
              padding: "10px 20px",

              borderRadius: "16px",
            }}
          >
            Transactions
          </Typography>
          <Typography
            component="h4"
            variant="h6"
            className="cursor-pointer"
            onClick={() => {
              window.location.href = "/login";
              setAccessToken("", dispatch);
            }}
          >
            Logout
          </Typography>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default connect()(Sidebar);
