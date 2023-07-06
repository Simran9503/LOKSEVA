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
  const [name, setName] = useState('')
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
    if (!name || !email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: name,
        });
        navigate("/Mainyatri");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

     const signInWithGoogle = async() =>{
    try{
       await signInWithPopup(auth, googleProvider);
       navigate("/mainyatri")
     } catch{
       console.error("Not defined")
     }
    
     }
   
    //  const login=()=>{
    //    signInWithEmailAndPassword(auth, email, password).then((value)=>console.log("Sign in Success").catch((err)=>console.log(err)))
    //  }
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
           Signup as a Yatri
          </Typography>
          {isSignup && (<TextField
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="Name"
          />)}
           <TextField onChange={(e)=> setName(e.target.value)}
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="Name"
          />
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
{/* <Link to="/credentials">
<Button onClick={login}
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            Login
          </Button>
</Link> */}
        
       
        <Button onClick={handleSubmission}  variant="contained"
            color="warning"
            sx={{ marginTop: 1, borderRadius: 3, }}
            // variant="contained"
            // color="warning"
          >
          Sign up
          </Button>
         
        <Button  onClick={signInWithGoogle} sx={{mt:'20px'}}>
            Sign in with google account
          </Button>
       
          <p style={{fontWeight:'bold', color:'blue', letterSpacing:'1px', fontSize:'1rem', textDecoration:'none'}}>
            Already have an account?{" "}
            <span>
              <Link to="/loginchalak">Login</Link>
            </span>
          </p>
        </Box>
      </form>
    </div>
  );
};
export default Label;