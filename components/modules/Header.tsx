import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import styles from "../../styles/Header.module.css";


interface Props {
  title: string,
  link: string,
  subtitle: string
}

export default function Header(props: Props) {


  return (
    <Container fixed id={styles.header}>
      <br />

      <Typography variant="h4" component="h4" sx={{ m: 0 }}>
        {props.title}
      </Typography>
      <div>
        <Typography className={styles.inline} variant="subtitle1" component="p" sx={{ m: 0 }}>
          {props.subtitle}
        </Typography>
        <Typography className={[styles.inline, styles.content_right, styles.link].join(" ")} variant="subtitle2" component="p">
          {props.link}
        </Typography>
      </div>
    </Container>

  );
}