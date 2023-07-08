import { Box, Button, Stack, TextField } from "@mui/material"
import { doc, setDoc , collection, addDoc} from "firebase/firestore";
import { useState } from "react";
import firebase from "../config/firebase"
import { db } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";


const Credentials = () => {
    const[name, setName] =useState("");
    const[aadhaar, setAadhaar] =useState(0);
    const[license, setLicense] =useState(0);
    const[address, setAddress] =useState("");
    const[phone, setPhone] =useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

const handleSubmit = ()=>{
    if(!name || !aadhaar || !license || !address || !phone) {
        setErrorMsg("Fill all the fields");
        return
    }
    setErrorMsg("")
    fetchData();
}

const fetchData=async()=>{
await addDoc(collection(db, "credentials"),{
    Name:{name},
    Aadhaar:{aadhaar},
    License:{license},
    Address:{address},
    Phone:{phone}
})
 navigate('/mainchalak');
}

  return (
    <Box component='form' justifyContent='center' sx={{
        display:'flex',
        backgroundColor:"#c2c2c2",
        backgroundSize: "100% auto",
        height: "100vh",
        backgroundRepeat:'no-repeat'
        
    }}>
    <Stack direction='column' alignItems='center' >
    <TextField onChange={(e)=>{setName(e.target.value)}} label="Full Name" placeholder="ENTER YOUR NAME" type="text" sx={{
       width: { xs: "70vw", sm: "60vw", md: "50vw", lg: "55vw" },
        mt:'50px',
        backgroundColor:'#979797',
      color:'white',
        borderRadius:'2px',
        border: "1px solid #ccc",
        outline:'none',
        mb:'10px'
    }}/>
    <TextField onChange={(e)=>{setAadhaar(e.target.value)}} label="Aadhaar card number" placeholder="ENTER YOUR AADHAAR CARD NUMBER" type="number" sx={{
     width: { xs: "70vw", sm: "60vw", md: "50vw", lg: "55vw" },
        mt:'30px',
        backgroundColor:'#979797',
      
        borderRadius:'2px',
        border:"none",
        mb:'10px'
    }}/>
    <TextField onChange={(e)=>{setLicense(e.target.value)}} label="License Number" placeholder="ENTER YOUR LICENSE NUMBER" type="number" sx={{
       width: { xs: "70vw", sm: "60vw", md: "50vw", lg: "55vw" },
        mt:'30px',
        backgroundColor:'#979797',
        mb:'10px',
        borderRadius:'2px',
        border:"none"
    }}/>
    <TextField onChange={(e)=>{setAddress(e.target.value)}} label="Residential Address"placeholder="ENTER YOUR ADDRESS" type="text" sx={{
       width: { xs: "70vw", sm: "60vw", md: "50vw", lg: "55vw" },
        mt:'30px',
        backgroundColor:'#979797',
        mb:'10px',
        borderRadius:'2px',
        border:"none"
    }}/>
    <TextField onChange={(e)=>{setPhone(e.target.value)}} label="Phone Number" placeholder="ENTER YOUR PHONE NUMBER" type="number" sx={{
       width: { xs: "70vw", sm: "60vw", md: "50vw", lg: "55vw" },
        mt:'30px',
        backgroundColor:'#979797',
        mb:'10px',
        borderRadius:'2px',
        border:"none"
    }}/>


    {/* <Link to="/Mainchalak"> */}
    <Button onClick={handleSubmit} variant="contained" sx={{
        mt:'10px'
    }}>Submit</Button>
    {/* </Link> */}
   
   

           
    </Stack>
    </Box>
  )
}
export default Credentials