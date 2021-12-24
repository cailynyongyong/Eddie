import * as React from 'react';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom';
import styles from '../../styles/Header.module.css';

/**
 * @number the link index that should be styled as active
 */
interface Props {
    active: number
}

// Render the TA and Student links to switch tables
export default function StudentsTAHeader(props: Props) {
    
    const links = [
        {link: '/Students', text: 'Students'},
        {link: '/TA', text: 'Teaching Assistants'}
    ]

    // Buttons to each table
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