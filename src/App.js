import { Box } from "@mui/material";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Help from "./Help";
import Login from "./Login";
import Home from "./Home";
import Contact from "./Contact";



function App() {

  return (

    <Box width = "100px" height="50px" sx={{width: {xl: '1000px'}, backgroundColor: 'black'}} >
<Router>
  <Nav/>
  <Routes>
  <Route path="/" element={<Home/>} />
  
<Route path="/about" element={<AboutUs/>}/>
<Route path="/help" element={<Help/>}/>
<Route path="/login" element={<Login/>}/>


   
  </Routes>
</Router>
    </Box>

 );
}

export default App;

// import { Box } from "@mui/material";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//  import AboutUs from "./AboutUs";
//  import Help from "./Help";
//  import Login from "./Login";
//  import Home from "./Home";


// function App() {
//   return (

// <div className="App"  >
// <Box >
//       <Router>
//         <Navbar />
//         <Routes>
//    <Route path="/" element={<Home/>} />
//  <Route path="/about" element={<AboutUs/>}/>
//  <Route path="/help" element={<Help/>}/>
//  <Route path="/login" element={<Login/>}/>


   
//    </Routes>
//       </Router>
//       </Box>
//     </div>


   
//   );
// }

// export default App;
