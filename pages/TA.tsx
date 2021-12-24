import * as React from 'react';
import { Box, Button, Container, CssBaseline } from '@mui/material';
import IPageProps from '../interfaces/page.interface';
import SideBar, { drawerWidth } from "../components/modules/Sidebar";
import StudentsTAHeader from '../components/modules/StudentsTAHeader';
import CreateTable from '../components/modules/Table';

// Function to create TA table
const TA: React.FunctionComponent<IPageProps> = props => {
  // Pull data from database
  const headings = ['Name', 'Email', 'Phone Number', 'Questions']
  const content = [
    ['Johnnie Yu', 'johnnie.yu@nyu.edu', 9782697981, 3],
    ['Hyerim Yong', 'hy1602@nyu.edu', 3472218153, 5]
  ]

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ display: 'flex' }}>

          {/* Sidebar and menu */}
          <SideBar active={3} />

          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            style={{ minWidth: '750px' }}
          >

            {/* Header containing links to TA / Student tables */}
            <StudentsTAHeader active={1} />

            <div id="table">
              {/* Custom table for headings and contents of TAs */}
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