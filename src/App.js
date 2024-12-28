import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import ErrorHand from "./ErrorHand.js";
import MyAppBar from "./MyAppBar.js";
import About from "./About.js";

function App() {
  return (
    <div>
      <MyAppBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorHand />} />
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
