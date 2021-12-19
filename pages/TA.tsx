import * as React from 'react';
import styles from "../styles/Students.module.css";
import Box from '@mui/material/Box';
import SideBar from "../components/modules/Sidebar";
import drawerWidth from "../components/modules/Sidebar";
import IPageProps from '../interfaces/page.interface';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import StudentsTAHeader from '../components/modules/StudentsTAHeader';
import CreateTable from '../components/modules/Table';
import Button from '@mui/material/Button'

const TA: React.FunctionComponent<IPageProps> = props => {
  const headings = ['Name', 'Email', 'Phone Number', 'Questions']
  const content = [
    ['Johnnie Yu', 'johnnie.yu@nyu.edu', 9782697981, 3],
    ['Hyerim Yong', 'hy1602@nyu.edu', 3472218153, 5]
  ]

  return (
    <   React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ display: 'flex' }}>

          <SideBar active={3} />

          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            style={{minWidth: '750px'}}
          >

            <StudentsTAHeader active={1} />

            <div id="table">
              <CreateTable headings={headings} content={content} />
              <Button>Add Teaching Assistant</Button>
            </div>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default TA;