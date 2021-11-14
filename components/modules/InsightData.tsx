import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Graph} from "../constants/global";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

export default function BasicGrid() {
  return (
<   React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ flexGrow: 3}}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Grid item xs={14} >
        <Typography style={{color:"#212121"}} gutterBottom variant="h4" component="div">
                Insights
              </Typography>
          </Grid>
      <Grid container spacing={4}>
        <Grid item xs={14} >
          <Item>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography style={{color:"#2361FF"}} gutterBottom variant="h5" component="div">
                Top Topics Asked
              </Typography>
              <Typography variant="h6" gutterBottom>
                Concepts that were most difficult for students to understand
              </Typography>
              <Box
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 0,
                    width: 500,
                    height: 32,
                    },
                }}
                >
              <Button style={{justifyContent: "left", color:"#212121"}}>1. Longest Common Sequence Problem {bull} 25 students asked</Button>
              <Button style={{justifyContent: "flex-start", color:"#212121"}}>2. Recursion{bull} 15 students asked</Button>
              <Button style={{justifyContent: "flex-start", color:"#212121"}}>3. DFS Tree Traversal{bull} 5 students asked</Button>
              </Box>
            </Grid>
            </Grid>
        </Item>
        
    </Grid>
        <Grid item xs={6}>
        <Item>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography style={{color:"#2361FF"}} gutterBottom variant="h5" component="div">
                Average Time to Respond
              </Typography>

              <Box
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 150,
                    height: 128,
                    },
                }}
                >
                <Paper elevation={0} > 
                    <Typography gutterBottom variant="h5" component="div" >2.2</Typography> 
                    <Typography gutterBottom variant="subtitle" component="div">
                  hours by professor
                    </Typography> 
                 </Paper>
                 <Paper elevation={0}> 
                    <Typography gutterBottom variant="h5" component="div">1.7</Typography> 
                    <Typography gutterBottom variant="subtitle" component="div">
                  hours by TA
                    </Typography> 
                </Paper>
            </Box>
            </Grid>
        </Grid>
        </Item>
        </Grid>
        
        <Grid item xs={6}>
        <Item>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography style={{color:"#2361FF"}} gutterBottom variant="h5" component="div">
                Average Time to Respond Growth
              </Typography>
              <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 350,
                    height: 200,
                    },
                }}>
                <img src={Graph} alt="" />
            </Box>
            </Grid>
            </Grid>
            </Item>
        </Grid>
      </Grid>
    </Box>
      </Container>
    </React.Fragment>
    
  );
}