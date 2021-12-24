import * as React from 'react';
import { Box, CssBaseline, Container } from '@mui/material';
import SideBar, { drawerWidth } from "../components/modules/Sidebar";
import IPageProps from '../interfaces/page.interface';
import StudentsTAHeader from '../components/modules/StudentsTAHeader';
import SubscribeInstructions from '../components/modules/SubscribeInstructions';
import styles from '../styles/Table.module.css';
import CreateTable from '../components/modules/Table';

// Function to create students table page
const Students: React.FunctionComponent<IPageProps> = props => {

  // Pull student data from db
  const headings = ['Name', 'Email', 'Phone Number', 'Messages']
  const content = [
    ['Rachel Kindangen', 'rmk461@nyu.edu', 9782697981, <a className={styles.subscribe} href="#">Subscribe</a>],
    ['Pedro Velasquez', 'pv850@nyu.edu', 3472218153, <a className={styles.unsubscribe} href="#">Unubscribe</a>]
  ]

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ display: 'flex' }}>

          {/* Links to other sites and profile info */}
          <SideBar active={3} />

          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >

            {/* Header containing links to TA / Student tables */}
            <StudentsTAHeader active={0} />

            {/* Instructions for how to register students to chatbot */}
            <SubscribeInstructions />

            <div id="table" style={{ paddingTop: '20px' }}>
              {/* Custom table for headings and contents of TAs */}
              <CreateTable headings={headings} content={content} />
            </div>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Students;