import { Box } from "@mui/material";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contact from "./pages/Contact";


function App() {

  return (

    <Box >
<Router>
  <Nav/>
  <Routes>
  <Route path="/" element={<Home/>} />
  
<Route path="/about" element={<AboutUs/>}/>
<Route path="/help" element={<Help/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/contact" elemnt={<Contact/>}/>

   
  </Routes>
</Router>
    </Box>

 );
}

export default App;

