import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, CssBaseline, Drawer, 
        List, Toolbar, Typography, ListItem, 
        ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import styles from "../../styles/Sidebar.module.css";
import Profile from './Profile';

// width to to sidebar
export const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window,
  active: number  // which link will be styled as active
}


export default function Sidebar(props: Props) {
  // info to resize/collapse navbar
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // links for the navbar
  const urls = ["/", "chatbot", "Insights", "Students"]

  // Create React components with the text and urls for the navbar links
  const drawer = (
    <div>
      <List id={styles.padding_top}>
        
        {/* map each of the text options to their respective url and create a link element */}
        {["Questions", "Chatbot", "Insights", "Students & TAs"].map((text, index) => (
          // Add styles of active if index matches props.active
          <ListItem key={index} className={index === props.active ? styles.active : ''}>
            {/* create a link to url[index] matched with it's appropriate text */}
            <Link to={urls[index]} className={styles.btn}>
              <ListItemText primary={text}></ListItemText>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      
      {/* topbar containing profile information and logo */}
      <AppBar id={styles.top_bar} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          
          {/* logo and icon */}
          <Typography className={styles.black} variant="h6" noWrap component="div">
            Eddie
          </Typography>
          <AdbIcon className={styles.black} />

          {/* Button for when sidebar is collapsed */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Profile info dropdown */}
          <div className={styles.right_align}>
            <Profile />
          </div>

        </Toolbar>
      </AppBar>

      {/* Sidebar with all the nav links */}
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Drawer
          variant="temporary"
          container={container}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}  {/* all nav links go here*/}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}  {/* all nav links also go here to handle collapsed version */}
        </Drawer>
      </Box>

    </>
  );
}
