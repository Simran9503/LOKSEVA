import { Box, Button, TextField, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile} from "firebase/auth";
import {auth, googleProvider} from '../config/firebase'
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Label = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [isSignup, setIsSignup]= useState(false);
  const [email, setEmail] = useState('')
 
  const [password, setPassword] = useState('')
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
  // const signUp = async() =>{
  //   try{
  //      await createUserWithEmailAndPassword (auth, email, password)
  //    } catch{
  //      console.error("Not defined")
  //    }
    
  //    }
  const handleSubmission = () => { 
    if (!email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
      
        navigate("/credentials");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

     const signInWithGoogle = async() =>{
    try{
       await signInWithPopup(auth, googleProvider);
       navigate("/credentials");
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
          Login as a Chalak
          </Typography>
        
        
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

<Button disabled={submitButtonDisabled} onClick={handleSubmission}
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            Login
          </Button>

        <Link to="/credentials">
        <Button  onClick={signInWithGoogle} sx={{mt:'20px'}}>
            Sign in with google account
          </Button>
        </Link>
       
        {/* <Button onClick={handleSubmission}
            sx={{ marginTop: 1, borderRadius: 3 }}
            // variant="contained"
            // color="warning"
          >
          Sign up
          </Button> */}
           <p style={{fontWeight:'bold', color:'blue', letterSpacing:'1px', fontSize:'1rem', textDecoration:'none'}}>
            Already have an account?{" "}
            <span>
              <Link to="/signupchalak">Sign Up</Link>
            </span>
          </p>
        </Box>
      </form>
    </div>
  );
};
export default Label;