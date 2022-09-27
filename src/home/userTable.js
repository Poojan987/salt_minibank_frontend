import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { api_link } from "../api_link";

export default function UserTable() {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${api_link}/userlist`)
      .then((res) => {
        setRows(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Number </TableCell>
            <TableCell>Name </TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Account number</TableCell>
            <TableCell>Balance</TableCell>
            {/* <TableCell>Date</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                  margin: "12px",
                }}
              >
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.account_num}</TableCell>
                <TableCell>{row.balance}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
