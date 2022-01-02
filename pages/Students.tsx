import React, { useEffect, useState } from 'react';
import firebase from '../firebase/index';
import { Box, CssBaseline, Container } from '@mui/material';
import SideBar, { drawerWidth } from "../components/modules/Sidebar";
import IPageProps from '../interfaces/page.interface';
import StudentsTAHeader from '../components/modules/StudentsTAHeader';
import SubscribeInstructions from '../components/modules/SubscribeInstructions';
import styles from '../styles/Table.module.css';
import CreateTable from '../components/modules/Table';
import { id } from './HomePage';

// Function to create students table page
const Students: React.FunctionComponent<IPageProps> = props => {
  // data to put into table
  const [content, updateContent] = useState([]);

  // Once content loads, request database for stored students
  useEffect(() => {
    // load students from db
    const coursesRef = firebase.database().ref('Courses');

    coursesRef.on('value', (snapshot) => {
      const coursesVal = snapshot.val();
      const students_db = coursesVal[id]['students']

      // convert stored students objects to objects usable by front end
      const studentsList = students_db.map((elem, index) => {
       
        // add subscribed/unsubscribed options
        elem.subscribed ? elem.messages = <a className={styles.unsubscribe} href="#">Unsubscribe</a> :
                          elem.messages = <a className={styles.subscribe} href="#">Subscribe</a>;

        return [elem.name, elem.email, elem.phone, elem.messages];
      });

      updateContent(studentsList)

    })
  }, []);




  // Pull student data from db
  const headings = ['Name', 'Email', 'Phone Number', 'Messages']

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ display: 'flex' }}>

          {/* Links to other sites and profile info */}
          <SideBar active={3} authenticated={true} />

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