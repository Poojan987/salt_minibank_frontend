import { Button, TextField } from "@mui/material";
import axios from "axios";
import React from "react";

import { api_link } from "../api_link";
export const CreditDebit = () => {
  const [acc_num, setAcc_num] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  //   const [email, setEmail] = React.useState("");

  const [debit, setDebit] = React.useState(false);
  const emptyForm = () => {
    setAmount("");
    setAcc_num("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const link = debit
      ? `${api_link}/update/debit`
      : `${api_link}/update/credit`;
    axios
      .post(link, {
        acc_num: acc_num,
        amount: amount,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex items-center  justify-center flex-col gap-4">
      <div className="flex flex-row gap-4 justify-between">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setDebit(false);
            emptyForm();
          }}
        >
          Credit
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setDebit(true);
            emptyForm();
          }}
        >
          Debit
        </Button>
      </div>

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
            value={acc_num}
            onChange={(e) => setAcc_num(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="amount"
            placeholder="amount"
            name="amount"
            variant="outlined"
            type={"number"}
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {debit === false ? "Credit" : "Debit"}
          </Button>
        </div>
      </div>
    </div>
  );
};
