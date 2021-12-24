import * as React from 'react';
import { Paper, Box, Card, CardActions, 
        CardContent, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import styles from '../../styles/Table.module.css';


// Div containing instructions for students to subscribe
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
                            {/* Eddie's number for students to subscribe to */}
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