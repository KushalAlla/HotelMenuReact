import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import ErrorHand from "./ErrorHand.js";

function App() {
  return (
    // <div className="App">
    //   <p>Hello World</p>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorHand />} />
        {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
