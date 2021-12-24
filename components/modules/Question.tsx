import React from "react";
import { Typography, Box, CardActions, CardContent, Button } from '@mui/material';
import QuestionObj from '../../interfaces/question.interface';
import styles from "../../styles/Question.module.css";

/**
 * @QuestionObj question data being passed
 * Object structure found in '../../interfaces/question.interface'
 */
interface Props {
  question: QuestionObj
}

// Question box, displays single box with all necessary question data and functionality
export default function Question(props: Props) {

  const question = props.question

  // Just a bulletpoint, to be used later
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return (
    <div
      /* unanswered questions will have red outline */
      className={`${(question.answered === 'answered') ? "" : styles.unanswered} ${styles.question_container} ${styles.question} ${question.invisible ? styles.invisible : ''}`}
    >
      <CardContent>

        {/* Card title, displaying question type, and upvotes/times asked */}
        <Typography variant="h5" component="h5" display="inline">
          {question.questionType.toUpperCase()} QUESTION
        </Typography>
        <Typography variant="h6" component="h6" display="inline">
          {bull} {question.questionCount} student(s) asked
        </Typography>
      </CardContent>

      {/* card header */}
      <CardActions>
        {/* Questions header */}
        <Button id={styles.question_content} size="large">{question.question}</Button>
        <div className={styles.margin_left}>
          {/* Teacher functions: assign to TA and answer */}
          <Button className={`${styles.btn} ${styles.btn2}`} variant="contained" size="large">Answer</Button>
          <Button className={`${styles.btn} ${styles.btn2}`} variant="contained" size="large">Assign to TA</Button>
        </div>
      </CardActions>

      <CardContent id={styles.description}>
        <Typography variant="body2">
          {/* Question body */}
          {question.description}
        </Typography>
      </CardContent>
    </div>
  )
}