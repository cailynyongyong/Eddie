import * as React from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, CssBaseline, Box, Card, CardActions,
    CardContent, Typography, Grid
} from '@mui/material';
import styles from '../../styles/Table.module.css'

/**
 * @headings: array of headers for table
 * @content: 2-D array, rows and cols for table
 * content[i].length must match headings.length
 */
interface Props {
    headings: string[],
    content: (string | number | JSX.Element)[][]
}


export default function CreateTable(props: Props) {

    // Create TableCell component for the headings, styled accordingly
    const headings = props.headings.map((elem, index) => {
        return <TableCell className={styles.heading} align='center'>{elem}</TableCell>
    })

    // Map each row in content to a column
    const content = props.content.map((row, index) => {
        // for each row return a TableRow component
        return <TableRow> {row.map((elem, i) => {
            // each element in a row returned as a TableCell component
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