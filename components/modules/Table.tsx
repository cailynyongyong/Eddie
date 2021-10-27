import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from "../../styles/Table.module.css"

function createData(
    name : string,
    email : string,
    phone : number,
    messages : boolean,
) {
    return {name, email, phone, messages}
}

const rows = [
    createData('Rachel Kindangen', 'rmk461@nyu.edu', 9782697981, true),
    createData('Pedro Velasquez', 'pv850@nyu.edu', 3472218153, false),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} className={styles.noShadow}>
      <Table className={styles.table} sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={styles.heading}>Name</TableCell>
            <TableCell className={styles.heading} align="right">Email</TableCell>
            <TableCell className={styles.heading} align="right">Phone Number</TableCell>
            <TableCell className={styles.heading} align="right">Messages</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              className={styles.rows}
              key={row.name}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell className={(row.messages ? styles.subscribe : styles.unsubscribe)} align="right"><a href="#">{(row.messages ? "Subscribe" : "Unsubscribe")}</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}