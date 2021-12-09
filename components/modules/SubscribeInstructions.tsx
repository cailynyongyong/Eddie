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
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';


export default function SubscribeInstructions() {
    
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    }));


    return (
        <Card sx={{ bgcolor: '#F3F3F8', minWidth: 275 }}>
            <CardContent>
                <Typography style={{ color: "#2361FF" }} variant="h5" component="div">
                    How to subscribe students to chatbot
                </Typography>
                <br />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="h6">
                                Ask students to initate a text conversation with this phone number:
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <CardActions style={{ color: "#212121" }}>
                                    978-269-7981 <a href="#" className={styles.btn}>Copy</a>
                                </CardActions>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    )
}