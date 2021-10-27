import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from "next/router";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({ 
  palette: {
    primary: {
      main: '#03a9f4',
    },
    secondary: {
      main: '#03a9f4',
    },
  },
});


export default function ButtonAppBar() {
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" elevation={0}>
      <Toolbar style={{ background: '#FFFFFF' }} >
          
        <Button onClick={() => router.push("/")} color="primary" sx={{ m: 2 }}> Questions </Button>
        <Button onClick={() => router.push("/Students")} color="primary" sx={{ m: 2 }}> Students </Button>
        <Button onClick={() => router.push("/Insights")} color="primary" sx={{ m: 2 }}> Insights </Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        </Typography>
        <Button color="primary">Login</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}