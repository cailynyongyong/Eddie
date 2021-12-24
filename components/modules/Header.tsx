import * as React from 'react';
import { Typography, Container } from '@mui/material';
import styles from "../../styles/Header.module.css";

// Pages title, subtitle describing page, link to class
interface Props {
  title: string,
  link: string,
  subtitle: string
}

// Header for each page, accounts for the navbar and pads content 
// accordingly to avoid it getting covered
export default function Header(props: Props) {


  return (
    <Container fixed id={styles.header}>

      {/* Title of page */}
      <Typography variant="h4" component="h4" sx={{ m: 0 }}>
        {props.title}
      </Typography>

      {/* Subtitle and link */}
      <div>
        {/* left indented */}
        <Typography className={styles.inline} variant="subtitle1" component="p" sx={{ m: 0 }}>
          {props.subtitle}
        </Typography>
        {/* Right indented */}
        <Typography className={[styles.inline, styles.content_right, styles.link].join(" ")} variant="subtitle2" component="p">
          {props.link}
        </Typography>
      </div>
      
    </Container>

  );
}