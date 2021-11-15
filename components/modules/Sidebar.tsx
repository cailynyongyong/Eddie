import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from "../../styles/Sidebar.module.css";
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import Icon from '@mui/material/Icon';
import ListItemText from '@mui/material/ListItemText';
import AdbIcon from '@mui/icons-material/Adb';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window,
  active: number
}

export default function ClippedDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const urls = ["/", "chatbot", "Insights", "Students"]

  const drawer = (
    <div>
      <List>
        {["Questions", "Chatbot", "Insights", "Students & TAs"].map((text, index) => (
          <ListItem key={index} className={index === props.active ? styles.active : ''}>
            <Link to={urls[index]} className={styles.btn}>
              <ListItemText primary={text}></ListItemText>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <CssBaseline />
      <AppBar id={styles.top_bar} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography className={styles.black} variant="h6" noWrap component="div">
            Eddie
          </Typography>
          <AdbIcon className={styles.black}/>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          {drawer}
        </Box>
      </Drawer>

    </>
  );
}


//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar className={styles.top_bar}>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>


//           <Typography variant="h6" noWrap component="div">
//             Eddie
//             </Typography>
//           <Typography className={styles.right_align + " " + styles.black} variant="h6" noWrap>
//             Profile

//           </Typography>
//           <div>
//             <Link to={`/auth/signup`}>
//                 <button>SignUp</button>
//             </Link>
//             </div>

//         </Toolbar>
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>

//     </>
//   );
// }
