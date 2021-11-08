import Questions from "../components/modules/Questions";
import SideBar from "../components/modules/Sidebar";
import Box from '@mui/material/Box';
import drawerWidth from "../components/modules/Sidebar";
import windowDimensions from "../components/modules/Sidebar";
// import styles from "../styles/Index";

export default function Home() {
  
  return (
    <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box width="100%" paddingTop="60px">
          <Questions />
        </Box>
    </Box>
  );
}