import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { api_link } from "../api_link";
import { CreditDebit } from "./credit_debit";
import TransactionTable from "./transactionTable";
import UserTable from "./userTable";

// 1. Side bar with “Home”, “Transactions”, “Transfer”
export const Dashboard = (props) => {
  // const isAdmin = localStorage.getItem("isAdmin");
  // const name = localStorage.getItem("name");
  // const email = localStorage.getItem("email");
  const [isAdmin, setIsAdmin] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [acc_no, setAcc_no] = useState("");
  const [balance, setBalance] = useState(0);
  const [tab, setTab] = useState(0);

  const [transfer, setTransfer] = useState({
    from: "",
    to: "",
    amount: 0,
  });
  const [total, setTotal] = useState({
    total: 0,
    users: 0,
  });
  const [transactionList, setTransactionList] = useState([]);
  useEffect(() => {
    let temp = localStorage.getItem("isAdmin");
    setEmail(localStorage.getItem("email"));
    setName(localStorage.getItem("name"));
    // setIsAdmin(localStorage.getItem("isAdmin"));
    console.log(temp);
    if (temp === "false") {
      setIsAdmin(false);
      const acc_no = localStorage.getItem("acc_no");
      setTransfer({ ...transfer, from: acc_no });
      setAcc_no(acc_no);
      setBalance(localStorage.getItem("balance"));
    } else setIsAdmin(true);
  }, []);
  useEffect(() => {
    console.log(tab);
    if (
      tab === 2 &&
      (isAdmin === "false" || isAdmin === undefined || isAdmin === false)
    ) {
      axios
        .get(`${api_link}/transactionlist/${acc_no}`)
        .then((res) => {
          console.log(res.data);
          setTransactionList(res.data.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else if (tab === 0 && (isAdmin === "true" || isAdmin)) {
      axios
        .get(`${api_link}/total`)
        .then((res) => {
          console.log(res.data);
          setTotal(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [tab, isAdmin]);
  const handleTransfer = (e) => {
    // e.preventDefault();
    console.log(transfer);

    axios.post(`${api_link}/transaction`, transfer).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="">
      <div className="grid grid-cols-6 gap-4 h-screen px-6">
        {isAdmin === true ? (
          <div className="col-span-1  text-xl flex flex-col gap-10  border-r-2 p-4">
            <div
              className={
                (tab === 0 ? "bg-blue-400 border rounded-2xl " : "") +
                "p-2 cursor-pointer"
              }
              onClick={() => setTab(0)}
            >
              Home
            </div>
            <div
              className={
                (tab === 1 ? "bg-blue-400 border rounded-2xl " : "") +
                "p-2 cursor-pointer"
              }
              onClick={() => setTab(1)}
            >
              Users
            </div>
            <div
              className={
                (tab === 2 ? "bg-blue-400 border rounded-2xl " : "") +
                "p-2 cursor-pointer"
              }
              onClick={() => setTab(2)}
            >
              Credit/Debit
            </div>
          </div>
        ) : (
          <div className="col-span-1  text-xl flex flex-col gap-10  border-r-2 p-4">
            <div
              className={
                (tab === 0 ? "bg-blue-400 border rounded-2xl " : "") +
                "p-2 cursor-pointer"
              }
              onClick={() => setTab(0)}
            >
              Home
            </div>
            <div
              className={
                (tab === 1 ? "bg-blue-400 border rounded-2xl " : "") +
                "p-2 cursor-pointer"
              }
              onClick={() => setTab(1)}
            >
              Transfer
            </div>
            <div
              className={
                (tab === 2 ? "bg-blue-400 border rounded-2xl " : "") +
                "p-2 cursor-pointer"
              }
              onClick={() => setTab(2)}
            >
              Transactions
            </div>
          </div>
        )}
        <div className="col-span-5 p-4">
          <>
            {isAdmin === true ? (
              <>
                {tab === 0 ? (
                  <div className="flex flex-col gap-4 text-left font-bold">
                    <div className="flex flex-col gap-6 justify-start">
                      <div className="text-2xl">Welcome {name}</div>
                      <div className="text-xl">Email: {email}</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {
                        <div className="text-2xl">
                          Total amount in bank: {total.total}
                        </div>
                      }
                      <div className="text-xl">Total users: {total.users}</div>
                    </div>
                  </div>
                ) : tab === 1 ? (
                  <>
                    <div className="flex flex-col gap-4">
                      <div className="text-2xl">User list</div>
                      <div>
                        <UserTable />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col gap-4">
                      <div className="text-2xl">Credit/Debit</div>
                      <div>
                        <CreditDebit />
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                {tab === 0 ? (
                  <div className="flex flex-col gap-4 text-left font-bold">
                    <div className="flex flex-col gap-6 ">
                      <div className="text-2xl">Welcome {name}</div>
                      <div className="text-xl">Email: {email}</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {<div className="text-2xl">Account Number: {acc_no}</div>}
                      <div className="text-xl">Balance: {balance}</div>
                    </div>
                  </div>
                ) : tab === 1 ? (
                  <>
                    <div className="flex flex-col gap-4">
                      <div className="text-2xl">Transfer</div>
                      <div className="flex flex-col gap-6">
                        <TextField
                          required
                          id="outlined-required"
                          label="Receiver Account Number"
                          placeholder="Receiver Account Number"
                          name="to"
                          variant="outlined"
                          type={"text"}
                          value={transfer.to}
                          onChange={(e) =>
                            setTransfer({
                              ...transfer,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        <TextField
                          required
                          id="outlined-required"
                          label="amount"
                          placeholder="amount"
                          name="amount"
                          variant="outlined"
                          type={"number"}
                          value={transfer.amount}
                          onChange={(e) => {
                            setTransfer({
                              ...transfer,
                              [e.target.name]: e.target.value,
                            });
                          }}
                        />
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleTransfer}
                        >
                          Transfer
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col gap-4">
                      <div className="text-2xl">Transactions</div>
                      <div>
                        <TransactionTable data={transactionList} />
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
};
