import Homepage from "../components/modules/Homepage";
import SideBar from "../components/modules/Sidebar";
import Box from '@mui/material/Box';
import drawerWidth from "../components/modules/Sidebar";
import IPageProps from '../interfaces/page.interface';

const Insights: React.FunctionComponent<IPageProps> = props => {
  return (

    <Box sx={{ display: 'flex' }}>

        <SideBar />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <p>Hello insight page</p>
        </Box>
    </Box>
  );
}

export default Insights;