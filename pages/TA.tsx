import React, { useEffect, useState } from 'react';
import firebase from '../firebase/index';
import { Box, Button, Container, CssBaseline } from '@mui/material';
import IPageProps from '../interfaces/page.interface';
import SideBar, { drawerWidth } from "../components/modules/Sidebar";
import StudentsTAHeader from '../components/modules/StudentsTAHeader';
import CreateTable from '../components/modules/Table';
import { id } from './HomePage';

// Function to create TA table
const TA: React.FunctionComponent<IPageProps> = props => {
  // TA data
  const [content, updateContent] = useState([]);

  // pull data from database
  // Once content loads, request database for stored TAs
  useEffect(() => {
    // load TAs from db
    const coursesRef = firebase.database().ref('Courses');
    coursesRef.on('value', (snapshot) => {
      const coursesVal = snapshot.val();
      const ta_db = coursesVal[id]['tas']

      // convert stored students objects to objects usable by front end
      const taList = ta_db.map((elem, index) => {
        
        // return as a list
        return [elem.name, elem.email, elem.phone, elem.assignedQuestions];
      });

      updateContent(taList)

    })
  }, []);

  
  const headings = ['Name', 'Email', 'Phone Number', 'Questions']

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