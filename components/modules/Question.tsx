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
import styles from "../../styles/Question.module.css";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

interface Props {
  questionType: string,
  questionCount: number,
  question: string,
  description: string,
  answers: string[],
  ta: string
}


export default function Question(props: Props) {

  
  return (
    <div className={[props.answers ? "" : styles.unanswered, styles.question_container].join(" ")}>
      <CardContent>
        <Typography variant="h6" component="div" display="inline">
          {props.questionType.toUpperCase()} QUESTION
        </Typography>
        <Typography variant="h6" component="div" display="inline">
          {bull}{props.questionCount} student(s) asked
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={[styles.margin, styles.question].join(" ")} size="large">{props.question}</Button>
        <div className={styles.margin_left}>
          <Button className={[styles.btn].join(" ")} variant="contained" size="large">Answer</Button>
          <Button className={[styles.btn].join(" ")} variant="contained" size="large">Assign to TA</Button>
        </div>
      </CardActions>
      <CardContent>
        <Typography variant="body2">
          {props.description}
        </Typography>
      </CardContent>
    </div>
  )
}