import { Box } from '@mui/material';
import SideBar, { drawerWidth } from "../components/modules/Sidebar";
import IPageProps from '../interfaces/page.interface';
import InsightData from "../components/modules/InsightData";
import Header from '../components/modules/Header';

// Insight page for professors
const Insights: React.FunctionComponent<IPageProps> = props => {
  return (

    <Box sx={{ display: 'flex' }}>
        
        {/* Links to other sites and profile info */} 
        <SideBar active={2} authenticated={true} />

        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          {/* Header with page title, basic info, and link to class chatbot */}
          <Header 
            title='Insights' 
            subtitle='See how your students are performing' 
            link="eddie.io/basicalgo/questions"
          />

          {/* 
            Graphs and information regarding the course 
              - Topics asked
              - Average response time
              - Average time response growth
          */}
          <InsightData />
        </Box>
    </Box>
  );
}

export default Insights;