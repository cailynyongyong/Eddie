import React, { useState } from "react";
import { Typography, Box, CardActions, CardContent, Button, TextField } from '@mui/material';
import QuestionObj from '../../interfaces/question.interface';
import TAObj from '../../interfaces/ta.interface';
import DropdownButton from './DropdownButton';
import styles from "../../styles/Question.module.css";
import { auth } from '../../firebase/index';

/**
 * @QuestionObj question data being passed
 * Object structure found in '../../interfaces/question.interface'
 */
interface Props {
  question: QuestionObj
  tas: TAObj[],
  update: any,
  addAnswer: any
}

// Question box, displays single box with all necessary question data and functionality
export default function Question(props: Props) {

  const question = props.question;
  const [newAnswer, updateAnswer] = useState('');
  const [setAnswered, updateSetAnswered] = useState(false);
  const [answerVisibility, updateVisibility] = useState(false);

  // Just a bulletpoint, to be used later
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  // answered question vs question left unanswered
  const answer = () => {
    if (question.answered) {
      // to be updated later
      return (
        <Typography>
          Answered
        </Typography>
      );
    }
    return (
      <Button onClick={() => {updateVisibility(!answerVisibility)}} className={`${styles.btn} ${styles.btn2}`} variant="contained" size="large">
        Answer
      </Button>
    );
  }

  // create tas for dropdown menu
  const taOptions = props.tas.map((elem) => {
    return {
      value: {
        name: elem.name,
        email: elem.email
      },
      content: elem.name
    }
  })

  // question with no ta assigned vs question with ta assigned
  const ta = () => {
    if (question.ta.name) {
      return (
        <Typography>
          Assigned to {question.ta.name}
        </Typography>
      );
    }
    return (
      <DropdownButton
        default='Assign TA'
        options={taOptions}
        category={question.id}
        handleChange={props.update}
      />
    );
  }

  // update the newAsnwer variable
  const updateNewAnswer = (e) => {
    updateAnswer(e.target.value)
  }
  // update the setAnswered
  const answeredCheckbox = (e) => {
    updateSetAnswered(e.target.checked);
  }

  // Create new answer for the question
  const addAnswer = () => {
    // check if question has been answered
    if (newAnswer.length) {
      const account = {name: auth.currentUser.displayName, email: auth.currentUser.email};
      props.addAnswer(question.id, account, newAnswer, setAnswered);
    }
  }

  return (
    <div
      /* unanswered questions will have red outline */
      className={`${(question.answered) ? "" : styles.unanswered} ${styles.question_container} ${styles.question} ${question.invisible ? styles.invisible : ''}`}
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
          {answer()}
          {ta()}
        </div>
      </CardActions>

      <CardContent id={styles.description}>
        <Typography variant="body2">
          {/* Question body */}
          {question.description}
        </Typography>
      </CardContent>

      {/* answers form */}
      <div className={answerVisibility ? '' : styles.invisible}>
        <label htmlFor={`answer_${question.id}`}>Answer</label>
        <textarea onChange={updateNewAnswer} id={`answer_${question.id}`} value={newAnswer}></textarea>
        <label htmlFor={`checkbox_${question.id}`}>Set questions as answered</label>
        <input type='checkbox' onChange={answeredCheckbox} />
        <Button size='large' onClick={addAnswer}>Post</Button>
      </div>

    </div>


  )
}