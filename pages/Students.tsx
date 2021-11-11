import Homepage from "../components/modules/Homepage";
import BasicTable from "../components/modules/StudentTable";
import styles from "../styles/Students.module.css";
import Box from '@mui/material/Box';
import SideBar from "../components/modules/Sidebar";
import drawerWidth from "../components/modules/Sidebar";
import IPageProps from '../interfaces/page.interface';


const Students: React.FunctionComponent<IPageProps> = props => {
  return (
    <Box sx={{ display: 'flex' }}>

        <SideBar />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <div id={styles.headers}>
        <a href="#" className={styles.active + ' ' + styles.btn}>Students</a>
        <a href="#" className={styles.btn}>Teaching Assistants</a>
      </div>
      <div className={styles.width}>
        <p>Manage which of your students receive messages from the chatbot</p>
      </div>
      <div id="table">
        <BasicTable />
      </div>
        </Box>
    </Box>
    
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