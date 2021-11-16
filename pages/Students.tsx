import * as React from 'react';
import StudentTable from "../components/modules/StudentTable";
import styles from "../styles/Students.module.css";
import Box from '@mui/material/Box';
import SideBar from "../components/modules/Sidebar";
import drawerWidth from "../components/modules/Sidebar";
import IPageProps from '../interfaces/page.interface';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const Students: React.FunctionComponent<IPageProps> = props => {
  return (
    <   React.Fragment>
    <CssBaseline />
    <Container fixed>
    <Box sx={{ display: 'flex' }}>

        <SideBar active={3}/>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <div id={styles.headers}>
            <br></br>
            <br></br>
            <br></br>
        
        <a href="#" className={styles.active + ' ' + styles.btn}>
          <Link to={`/Students`}>Students</Link>
        </a>
        <a href="#" className={styles.btn}>
        <Link to={`/TA`}>Teaching Assistants</Link>
          </a>
      </div>
      
      <div id="table">
        <StudentTable />
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