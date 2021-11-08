import React from "react";
import Header from "./Header";
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


export default function Question() {
    return (
    <React.Fragment>
      <CardContent>
      <Typography variant="h6" component="div" display="inline">
          CONCEPTUAL QUESTION
        </Typography>
        <Typography variant="h6" component="div" display="inline">
          {bull}5 students asked
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">What is the definition of css?</Button>
        <Button variant="contained" size="small">Answer</Button>
        <Button variant="contained" size="small">Assign to TA</Button>
      </CardActions>
      <CardContent>
      <Typography variant="body2">
          What is the definition of css?
        </Typography>
      </CardContent>
    </React.Fragment>
    )
}