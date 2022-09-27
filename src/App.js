import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SignupLogin } from "./auth/signup_login";
import { Dashboard } from "./home/dashboard";

function App() {
  return (
    <div className="App">
      {/* sing up / login*/}
      {/* home: admin & normal */}
      {/*     1. Side bar with “Home”, “Transactions”, “Transfer” */}
      {/*     1. A sidebar with the following: “Home”, “Users”, “Credit/Debit” */}
      {/* <div className="px-4 m-24">adsf</div> */}
      <Router>
        <Routes>
          <Route path="/about">{/* <About /> */}</Route>
          <Route path="/home" element={<Dashboard />}></Route>
          <Route path="/" element={<SignupLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
