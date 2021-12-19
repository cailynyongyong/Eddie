import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import styles from '../../styles/Table.module.css'

interface Props {
    headings: string[],
    content: (string | number | JSX.Element)[][]
}

export default function CreateTable(props: Props) {

    const headings = props.headings.map((elem, index) => {
        return <TableCell className={styles.heading} align='center'>{elem}</TableCell>
    })

    const content = props.content.map((row, index) => {
        return <TableRow> {row.map((elem, i) => {
            return <TableCell align="center">{elem}</TableCell>
        })} </TableRow>
    })

    return (
        <TableContainer component={Paper} className={styles.noShadow}>
            <Table
                className={styles.table}
            >
                <TableHead>
                    <TableRow>
                        {headings}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {content}
                </TableBody>
            </Table>
        </TableContainer>
    );
}