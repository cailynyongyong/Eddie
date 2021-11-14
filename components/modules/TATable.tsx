import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from "../../styles/Table.module.css"
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function createData(
    name : string,
    email : string,
    phone : number,
    questions : number,
) {
    return {name, email, phone, questions}
}

const rows = [
    createData('Johnnie Yu', 'johnnie.yu@nyu.edu', 9782697981, 3),
    createData('Hyerim Yong', 'hy1602@nyu.edu', 3472218153, 5),
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));
 
export default function TATable() {
  return (
    <   React.Fragment>
      <CssBaseline />
      
      <br></br>
    
    <TableContainer component={Paper} className={styles.noShadow}>
      <Table className={styles.table} sx={{ minWidth: 900 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={styles.heading} align="center">Name</TableCell>
            <TableCell className={styles.heading} align="center">Email</TableCell>
            <TableCell className={styles.heading} align="center">Phone Number</TableCell>
            <TableCell className={styles.heading} align="center">Assigned Questions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              className={styles.rows}
              key={row.name}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.questions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
    <Box
        sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
            m: 0,
            width: 900,
            height: 32,},
        }}>
    <Button>Add Teaching Assistant</Button>
    </Box>
    </React.Fragment>
  );
}