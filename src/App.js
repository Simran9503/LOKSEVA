import { Box } from "@mui/material";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
// import Help from "./pages/Help";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login1 from "./pages/Login1";
import Login2 from "./pages/Login2";
import Credentials from "./pages/Credentials";
import Mainchalak from "./pages/Mainchalak";
import Mainyatri from "./pages/Mainyatri";
import Signup1 from "./pages/Signup1";
import Signup2 from "./pages/Signup2"

function App() {
  return (
    <Box>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/help" element={<Help />} /> */}

          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginyatri" element={<Login1 />} />
          <Route path="/signupyatri" element={<Signup1 />} />
          <Route path="/loginchalak" element={<Login2 />} />
          <Route path="/signupchalak" element={<Signup2 />} />
          <Route path="/credentials" element={<Credentials/>}/>
          <Route path="/mainyatri" element={<Mainyatri/>}/>
          <Route path="/mainchalak" element={<Mainchalak/>}/>

        </Routes>
      </Router>
    </Box>
  );
}

export default App;
