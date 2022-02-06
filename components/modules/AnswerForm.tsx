import * as React from 'react';
import { useState } from 'react';
import { Box, TextField, Typography, Checkbox, FormGroup } from '@mui/material';
import QuestionObj from '../../interfaces/question.interface';
import styles from '../../styles/Form.module.css';
import { id } from '../../pages/HomePage';

/**
 * @question to answer
 */
interface Props {
    question: QuestionObj
}

const AnswerForm: React.FunctionComponent<Props> = (props: Props) => {

    // update the newAsnwer variable
    // const updateNewAnswer = (e) => {
    //     updateAnswer(e.target.value)
    // }
    // // update the setAnswered
    // const answeredCheckbox = (e) => {
    //     updateSetAnswered(e.target.checked);
    // }

    // Create new answer for the question
    // const addAnswer = (e) => {
    //     // check if question has been answered
    //     if (newAnswer.length) {
    //         const account = { name: auth.currentUser.displayName, email: auth.currentUser.email };
    //         props.addAnswer(question.id, account, newAnswer, setAnswered);
    //     }

    //     // Close add answer if question is marked as answered
    //     updateVisibility(!setAnswered);

    //     // reset all values
    //     updateAnswer('');

    //     e.preventDefault();
    // }

    // Keep track of new answers
    const [newAnswer, updateNewAnswer] = useState<string>('');

    // keep track of answer being typed
    const updateAnswer: React.ChangeEventHandler =
        (event) => {
            updateNewAnswer(event.target.innerHTML);
        }

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <Typography
                    variant='body1'
                >
                    Add an answer!
                </Typography>

                <form>
                    <FormGroup>
                        {/* Add a new answer */}
                        <TextField
                            id="standard-textarea"
                            label="Answer"
                            placeholder="Answer this question"
                            multiline
                            variant="standard"
                            value={newAnswer}
                            onChange={updateAnswer}
                        />

                        {/* Mark question as resolved */}

                        <Checkbox/>
                    </FormGroup>

                </form>
            </Box>


            <form className={props.question.answered ? '' : styles.invisible} >
                {/* <label htmlFor={`answer_${question.id}`}>Answer</label>
            <textarea required onChange={updateNewAnswer} id={`answer_${question.id}`} value={newAnswer}></textarea>
            <label htmlFor={`checkbox_${question.id}`}>Set questions as answered</label>
            <input type='checkbox' onChange={answeredCheckbox} />
            <Button size='large' type='submit'>Post</Button> */}
            </form >
        </>

    );
}

export default AnswerForm;