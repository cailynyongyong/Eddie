
import SideBar from "../components/modules/Sidebar";
import Box from '@mui/material/Box';
import drawerWidth from "../components/modules/Sidebar";
import IPageProps from '../interfaces/page.interface';
import InsightData from "../components/modules/InsightData";

const Insights: React.FunctionComponent<IPageProps> = props => {
  return (

    <Box sx={{ display: 'flex' }}>

        <SideBar active={2}/>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <InsightData />
        </Box>
    </Box>
  );
}

export default Insights;