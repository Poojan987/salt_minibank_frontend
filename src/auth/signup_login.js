import { Button, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

import { api_link } from "../api_link";
export const SignupLogin = () => {
  let navigate = useNavigate();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [isLogin, setIsLogin] = React.useState(true);
  const emptyForm = () => {
    setPassword("");
    setUsername("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // login
      axios
        .post(`${api_link}/login`, { email: email, pass: password })
        .then((res) => {
          res.data = res.data.data;
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("name", res.data.name);
          localStorage.setItem("acc_no", res.data.account_num);
          localStorage.setItem("balance", res.data.balance);
          localStorage.setItem("isAdmin", res.data.isAdmin);
          navigate("/home");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      axios
        .post(`${api_link}/signup`, {
          email: email,
          password: password,
          name: username,
        })
        .then((res) => {
          res.data = res.data.data;
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("name", res.data.name);
          localStorage.setItem("acc_no", res.data.account_num);
          localStorage.setItem("balance", res.data.balance);
          localStorage.setItem("isAdmin", res.data.isAdmin);
          navigate("/home");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <div className="flex items-center h-screen justify-center flex-col gap-4">
      <div className="flex flex-col gap-4 border border-blue-400 rounded-md  p-4 w-1/3">
        <div className="flex flex-row gap-4 justify-center ">
          <div
            className={
              isLogin === true
                ? "p-2 rounded-xl text-xl cursor-pointer"
                : "bg-blue-500 p-2 rounded-xl text-white text-xl cursor-pointer"
            }
            onClick={() => {
              setIsLogin(false);
              emptyForm();
            }}
          >
            SignUp
          </div>
          <div
            className={
              isLogin === false
                ? "p-2 rounded-xl text-xl cursor-pointer"
                : "bg-blue-500 p-2 rounded-xl text-white text-xl cursor-pointer"
            }
            onClick={() => {
              setIsLogin(true);
              emptyForm();
            }}
          >
            Login
          </div>
        </div>
        {isLogin === false ? (
          <div className="flex flex-col gap-4">
            <TextField
              required
              id="outlined-required"
              label="email"
              placeholder="email"
              name="email"
              variant="outlined"
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="name"
              placeholder="name"
              name="name"
              variant="outlined"
              type={"text"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="password"
              placeholder="password"
              name="password"
              variant="outlined"
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <TextField
              required
              id="outlined-required"
              label="email"
              placeholder="email"
              name="email"
              variant="outlined"
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              required
              id="outlined-required"
              label="password"
              placeholder="password"
              name="password"
              variant="outlined"
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        )}
        <div>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
