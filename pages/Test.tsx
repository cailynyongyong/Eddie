import Questions from "../components/modules/Questions";
import SideBar from "../components/modules/Sidebar";
import Box from '@mui/material/Box';
import drawerWidth from "../components/modules/Sidebar"

export default function Home() {
  return (
     <Box sx={{ display: 'flex' }}>

        <SideBar />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Questions />
        </Box>
    </Box>
  );
}