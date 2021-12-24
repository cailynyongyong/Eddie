import * as React from 'react';
import { Typography, Button, CardActions } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import styles from '../../styles/Chatbot.module.css';

/**
 * @text description for type of chatbot
 * @button text for what the button should do with the chatbot
 */
interface Props {
    text: string,
    button: string,
}

// Menu options to customize chatbot
export default function ChatbotComponent(props: Props) {

    return (
        <div>
            <CardActions id={styles.body}>
                <AdbIcon className={styles.black} />
                {/* <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1200px-Question_mark_%28black%29.svg.png'
                    className={styles.img}
                />                 */}

                {/* Description of chatbot action */}
                <Button id={styles.question_content} size="large">{props.text}</Button>
                
                {/* Action to customize chatbot */}
                <div className={styles.margin_left}>
                    <Button className={`${styles.btn} ${styles.btn2}`} variant="contained" size="large">Create</Button>
                </div>
            </CardActions>
        </div>
    )
}