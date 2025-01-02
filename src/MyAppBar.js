// 

import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


// // Define a custom dark theme
// const theme = createTheme({
//   // palette: {
//   //   primary: {
//   //     main: '#212121', // Dark gray
//   //   },
//     palette: {
//       mode: 'dark',
//     },
//     // text: {
//     //   primary: '#ffffff', // White text
//     // },
//   });

const MyAppBar = () => {
  return (
   
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            Grand Royale Hotel Menu
          </Typography>
          <Link href="http://localhost:3000/" color="inherit" style={{ margin: '0 10px' }}>
            Home
          </Link>
          <Link href="http://localhost:3000/about" color="inherit" style={{ margin: '0 10px' }}>
            About Author
          </Link>
        </Toolbar>
      </AppBar>
  );
};

export default MyAppBar;
