import { Box, Button, TextField, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import {auth, googleProvider} from '../config/firebase'
import background from "../assets/background.avif"
import { Link } from "react-router-dom";

const Label = () => {
  const [isSignup, setIsSignup]= useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = async() =>{
 try{
    await createUserWithEmailAndPassword (auth, email, password)
  } catch{
    console.error("Not defined")
  }
 
  }
  const signInWithGoogle = async() =>{
 try{
    await signInWithPopup(auth, googleProvider)
  } catch{
    console.error("Not defined")
  }
 
  }
  
  return (
    <div style={{backgroundColor:green}}>
    
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={10}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },

          }}
        >
          <Typography variant="h2" padding={3} textAlign="center" color={green}>
           {isSignup? "Signup as a Yatri" : "Login as a Yatri"}
          </Typography>
          {isSignup && (<TextField
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="Name"
          />)}
          <TextField onChange={(e)=> setEmail(e.target.value)}
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Email"
          />
          <TextField onChange={(e)=> setPassword(e.target.value)}
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
          />
        <Link to="/Mainyatri">
        <Button onClick={signIn}
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            {isSignup? "Signup" : "Login"}
          </Button>
        </Link>
          <Link to="/Mainyatri">
          <Button onClick={signInWithGoogle} sx={{mt:'20px'}}>
            Sign in with google account
          </Button>
          </Link>
        
          <Button onClick={()=>setIsSignup(!isSignup)}
            sx={{ marginTop: 1, borderRadius: 3 }}
            // variant="contained"
            // color="warning"
          >
          Change To {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};
export default Label;