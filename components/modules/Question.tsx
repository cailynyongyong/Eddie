import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import styles from "../../styles/Question.module.css";
import QuestionObj from '../../interfaces/question.interface';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


interface Props {
  question: QuestionObj  
}


export default function Question(props: Props) {
  const question = props.question
  
  return (
    <div 
      className={`${(question.answered === 'answered') ? "" : styles.unanswered} ${styles.question_container} ${styles.question} ${question.invisible ? styles.invisible : ''}`} 
    >
      <CardContent>
        <Typography variant="h5" component="h5" display="inline">
          {question.questionType.toUpperCase()} QUESTION
        </Typography>
        <Typography variant="h6" component="h6" display="inline">
          {bull} {question.questionCount} student(s) asked
        </Typography>
      </CardContent>
      <CardActions>
        <Button id={styles.question_content} size="large">{question.question}</Button>
        <div className={styles.margin_left}>
          <Button className={`${styles.btn} ${styles.btn2}`} variant="contained" size="large">Answer</Button>
          <Button className={`${styles.btn} ${styles.btn2}`} variant="contained" size="large">Assign to TA</Button>
        </div>
      </CardActions>
      <CardContent id={styles.description}>
        <Typography variant="body2">
          {question.description}
        </Typography>
      </CardContent>
    </div>
  )
}