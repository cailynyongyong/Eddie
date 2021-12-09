import * as React from 'react';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom';
import styles from '../../styles/Header.module.css';

interface Props {
    active: number
}

export default function StudentsTAHeader(props: Props) {
    const links = [
        {link: '/Students', text: 'Students'},
        {link: '/TA', text: 'Teaching Assistants'}
    ]
    const buttons = links.map((elem, index) => {
        return <Link 
                    to={elem.link} 
                    className={`${styles.header_link} ${index === props.active ? styles.active : ''}`}
                >
                    {elem.text}
                </Link>
    })
    
    return (
        <Container fixed id={styles.header}>
            
            {buttons}

        </Container>
    )
}