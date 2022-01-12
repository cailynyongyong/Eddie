import React from 'react';
import { Typography } from '@mui/material';
import QuestionObj from '../../interfaces/question.interface';

interface Props {
    question: QuestionObj
}

export default function Answers(props: Props) {

    const answers = props.question.answers.map((elem) => {
        return (
            <div>
                <Typography>{elem.author.name} on {(new Date(elem.createdOn)).toDateString()}</Typography>
                <Typography>{elem.answer}</Typography>
            </div>
        );
    });

    return (
        <div>
            {answers}
            
        </div>
    );
}