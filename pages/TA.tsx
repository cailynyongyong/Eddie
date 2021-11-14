import * as React from 'react';
import TATable from "../components/modules/TATable";
import styles from "../styles/Students.module.css";
import Box from '@mui/material/Box';
import SideBar from "../components/modules/Sidebar";
import drawerWidth from "../components/modules/Sidebar";
import IPageProps from '../interfaces/page.interface';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const TA: React.FunctionComponent<IPageProps> = props => {
  return (
    <   React.Fragment>
    <CssBaseline />
    <Container fixed>
    <Box sx={{ display: 'flex' }}>

        <SideBar />
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
        <TATable />
      </div>
        </Box>
    </Box>
    </Container>
    </React.Fragment>
  );
}

export default TA;