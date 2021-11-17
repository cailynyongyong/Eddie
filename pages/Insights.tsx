
import SideBar from "../components/modules/Sidebar";
import Box from '@mui/material/Box';
import drawerWidth from "../components/modules/Sidebar";
import IPageProps from '../interfaces/page.interface';
import InsightData from "../components/modules/InsightData";
import Header from '../components/modules/Header';

const Insights: React.FunctionComponent<IPageProps> = props => {
  return (

    <Box sx={{ display: 'flex' }}>

        <SideBar active={2}/>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Header 
            title='Insights' 
            subtitle='See how your students are performing' 
            link="eddie.io/basicalgo/questions"
          />
          <InsightData />
        </Box>
    </Box>
  );
}

export default Insights;