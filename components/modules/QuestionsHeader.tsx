import * as React from "react";
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
import Question from "./Question"
import Container from "@mui/material/Container";
import styles from "../../styles/QuestionsHeader.module.css";


interface Props {
    course: string,
    link: string
}

export default function QuestionsHeader(props: Props) {

    return (
        <Container maxWidth="lg">

            <Typography variant="h4" component="h4" sx={{ m: 3 }}>
                Questions
            </Typography>
            <div>
                <Typography className={styles.inline} variant="subtitle1" component="p" sx={{ m: 3 }}>
                    All questions submitted by students in {props.course} appear here.
                </Typography>
                <Typography className={[styles.inline, styles.content_right, styles.link].join(" ")} variant="subtitle2" component="p">
                    {props.link}
                </Typography>
            </div>
        </Container>
    );
}