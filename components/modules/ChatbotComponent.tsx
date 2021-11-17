import * as React from 'react';
import styles from '../../styles/Chatbot.module.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import AdbIcon from '@mui/icons-material/Adb';

interface Props {
    text: string,
    button: string,
}

export default function ChatbotComponent(props: Props) {

    return (
        <div>
            <CardActions id={styles.body}>
                <AdbIcon className={styles.black} />
                {/* <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1200px-Question_mark_%28black%29.svg.png'
                    className={styles.img}
                />                 */}
                <Button id={styles.question_content} size="large">{props.text}</Button>
                <div className={styles.margin_left}>
                    <Button className={`${styles.btn} ${styles.btn2}`} variant="contained" size="large">Create</Button>
                </div>
            </CardActions>
        </div>
    )
}