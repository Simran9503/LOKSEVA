import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (

<div className="App"  >
<Box sx={{
          backgroundImage: `url('/public/images/image.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
}}>
      <Router>
        <Navbar />
      </Router>
      </Box>
    </div>


   
  );
}

export default App;
