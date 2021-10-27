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
  
  const card = (
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
  );

export default function Questionspage() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value);
    };

    return (
      <React.Fragment>
        {/* <Container maxWidth="lg"> */}
        <Header  />
    
        <Typography variant="h5" component="div" sx={{ m: 3 }}>
            Questions
        </Typography>
        <Typography variant="subtitle1" component="div" sx={{ m: 3 }}>
            All questions submitted by students appear here. 
        </Typography>
        <Typography sx={{ m:3 }} color="text.secondary" display="inline">
          Question Type
        </Typography>
        <Typography sx={{ m:3 }} color="text.secondary" display="inline">
          Student
        </Typography>
        <div>
      <FormControl variant="filled" size="small" sx={{ m: 3, minWidth:100}}>
        <InputLabel id="demo-simple-select-filled-label">All</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={10}>Administrative</MenuItem>
          <MenuItem value={20}>Conceptual</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" size="small" sx={{ m: 3, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-filled-label">All</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={10}>Cailyn</MenuItem>
          <MenuItem value={20}>Pedro</MenuItem>
          <MenuItem value={30}>Rachel</MenuItem>
        </Select>
      </FormControl>
    </div>

    <Box width="95%" sx={{ m: 3 }}>
      <Card variant="outlined">{card}</Card>
    </Box>

    <Box width="95%" sx={{ m: 3 }}>
      <Card variant="outlined">{card}</Card>
    </Box>

    <Box width="95%" sx={{ m: 3 }}>
      <Card variant="outlined">{card}</Card>
    </Box>

        {/* </Container> */}
      </React.Fragment>
    );
  }