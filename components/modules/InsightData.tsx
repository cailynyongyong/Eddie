import * as React from 'react';
import { Box, Paper, Grid, Typography, Button, CssBaseline, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Graph } from "../constants/global";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

// bullet point
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
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={4}>
          
          {/* Top topics */}
          <Grid item xs={14} >
            <Item>
              <Grid item xs container direction="column" spacing={2}> 
                <Grid item xs>
                  
                  {/* Header area */}
                  <Typography style={{ color: "#2361FF" }} gutterBottom variant="h5" component="div">
                    Top Topics Asked
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Concepts that were most difficult for students to understand
                  </Typography>
                  
                  {/* Insight body */}
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
                    <Button style={{ justifyContent: "left", color: "#212121" }}>1. Longest Common Sequence Problem {bull} 25 students asked</Button>
                    <Button style={{ justifyContent: "flex-start", color: "#212121" }}>2. Recursion{bull} 15 students asked</Button>
                    <Button style={{ justifyContent: "flex-start", color: "#212121" }}>3. DFS Tree Traversal{bull} 5 students asked</Button>
                  </Box>
                </Grid>
              </Grid>
            </Item>
          </Grid>

          {/* Response time metrics */}
          <Grid item xs={6}>
            <Item>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  
                  {/* Header */}
                  <Typography style={{ color: "#2361FF" }} gutterBottom variant="h5" component="div">
                    Average Time to Respond
                  </Typography>

                  {/* Insight body */}
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
                    {/* Professor response time */}
                    <Paper elevation={0} >
                      <Typography gutterBottom variant="h5" component="div" >2.2</Typography>
                      <Typography gutterBottom variant="subtitle1" component="div">
                        hours by professor
                      </Typography>
                    </Paper>
                    
                    {/* TA response times */}
                    <Paper elevation={0}>
                      <Typography gutterBottom variant="h5" component="div">1.7</Typography>
                      <Typography gutterBottom variant="subtitle1" component="div">
                        hours by TA
                      </Typography>
                    </Paper>

                  </Box>
                </Grid>
              </Grid>
            </Item>
          </Grid>

          {/* Time to respond growth */}
          <Grid item xs={6}>
            <Item>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  
                  {/* Header */}
                  <Typography style={{ color: "#2361FF" }} gutterBottom variant="h5" component="div">
                    Average Time to Respond Growth
                  </Typography>

                  {/* body with graph */}
                  <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      m: 1,
                      width: 350,
                      height: 200,
                    },
                  }}>
                    {/* Graph image for now */}
                    <img src={Graph} alt="" />
                  </Box>

                </Grid>
              </Grid>
            </Item>
          </Grid>
          
        </Grid>
      </Container>
    </React.Fragment>

  );
}