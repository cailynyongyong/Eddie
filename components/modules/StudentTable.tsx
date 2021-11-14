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
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));
 
export default function BasicTable() {
  return (
    <   React.Fragment>
      <CssBaseline />
      <Card sx={{ bgcolor: '#F3F3F8', minWidth: 275 }}>
      <CardContent>
        <Typography style={{color:"#2361FF"}} variant="h5" component="div">
          How to subscribe students to chatbot
        </Typography>
        <br/>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <Typography variant="h6">
        Ask students to initate a text conversation with this phone number: 
        </Typography>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <CardActions style={{color:"#212121"}}>
            978-269-7981 <a href="#" className={styles.btn}>Copy</a>
            </CardActions>
          </Item>
        </Grid>
        </Grid>
        </Box>
      </CardContent>
    </Card>
      <br></br>
    
    <TableContainer component={Paper} className={styles.noShadow}>
      <Table className={styles.table} sx={{ minWidth: 900 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={styles.heading} align="center">Name</TableCell>
            <TableCell className={styles.heading} align="center">Email</TableCell>
            <TableCell className={styles.heading} align="center">Phone Number</TableCell>
            <TableCell className={styles.heading} align="center">Messages</TableCell>
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
              <TableCell className={(row.messages ? styles.subscribe : styles.unsubscribe)} align="center"><a href="#">{(row.messages ? "Subscribe" : "Unsubscribe")}</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </React.Fragment>
  );
}