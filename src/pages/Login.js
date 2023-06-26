import { Box, Button, TextField, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { useState } from "react";

const Label = () => {
  const [isSignup, setIsSignup]= useState(false);
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
           {isSignup? "Signup" : "Login"}
          </Typography>
          {isSignup && (<TextField
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="Name"
          />)}
          <TextField
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Email"
          />
          <TextField
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
          />

          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            {isSignup? "Signup" : "Login"}
          </Button>
          <Button onClick={()=>setIsSignup(!isSignup)}
            sx={{ marginTop: 3, borderRadius: 3 }}
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