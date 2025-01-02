import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import ErrorHand from "./ErrorHand.js";
import MyAppBar from "./MyAppBar.js";
import About from "./About.js";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


// Define a custom dark theme
const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#212121', // Dark gray
  //   },
    palette: {
      mode: 'dark',
    },
    // text: {
    //   primary: '#ffffff', // White text
    // },
  });

function App() {
  return (
    <div>
       <ThemeProvider theme={theme}>
       <CssBaseline />
      <MyAppBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorHand />} />
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
      </ThemeProvider>

    </div>
  );
}

export default App;
