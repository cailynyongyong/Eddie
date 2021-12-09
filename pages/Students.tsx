import * as React from 'react';
import Box from '@mui/material/Box';
import SideBar from "../components/modules/Sidebar";
import drawerWidth from "../components/modules/Sidebar";
import IPageProps from '../interfaces/page.interface';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import StudentsTAHeader from '../components/modules/StudentsTAHeader';
import SubscribeInstructions from '../components/modules/SubscribeInstructions';
import styles from '../styles/Table.module.css';
import CreateTable from '../components/modules/Table';

const Students: React.FunctionComponent<IPageProps> = props => {
  const headings = ['Name', 'Email', 'Phone Number', 'Messages']
  const content = [
    ['Rachel Kindangen', 'rmk461@nyu.edu', 9782697981, <a className={styles.subscribe} href="#">Subscribe</a>],
    ['Pedro Velasquez', 'pv850@nyu.edu', 3472218153, <a className={styles.unsubscribe} href="#">Unubscribe</a>]
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
          >
            
            <StudentsTAHeader active={0}/>

            <SubscribeInstructions />

            <div id="table" style={{paddingTop: '20px'}}>
              <CreateTable headings={headings} content={content}/>
            </div>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Students;

/*
Stuff left to do:
1. Fix navbar coloring only questions
2. Make table dynamic
3. Make a button module with its own styles
4. Font
5. Refactor repetitive CSS
6. Unify CSS with rest of stuff
*/