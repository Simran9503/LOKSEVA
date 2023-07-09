



import { Box, Stack, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logo from"../assets/logo.jpg";
import { useEffect, useState } from "react";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from "../config/firebase"
import Login1 from "../pages/Login1"
import Login2 from "../pages/Login2"
import Signup1 from "../pages/Signup1"
import Signup2 from "../pages/Signup2"
import firebase from 'firebase/compat/app';

const Nav = () => {
const navigate = useNavigate();
  const[user, setUser] =useState( null);

useEffect(()=>{
  onAuthStateChanged(auth, (user)=>{
    if(user){
     setUser(user);
      console.log("hello", user)
    }
    else{
      //logged out
      
      console.log("you are logged out")
    }
  })
},[])
  

  const handleLogout = async () => {
    signOut(auth).then(()=>{
      setUser(null)
      navigate('/');
    }).catch((error)=>{
      console.log(error);
    })
  };



 
  return (
    <div style={{ position: "sticky" }}>
      <Box
        width="100px"
        height="50px"
        sx={{ backgroundColor: "black", width: { xl: "1000px" } }}
      >
        <Stack direction="row" spacing={10} justifyContent="space-between">
          <Stack direction="row" spacing={2}>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "40px",
                  height: "43px",
                  margin: "0px 10px",
                  justifyContent: "center",
                  padding: "2px",
                }}
              />
            </Link>
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              marginTop="2"
              sx={{
                mr: 2,

                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 500,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
                ml: "0",
                pl: "0",
                pt: "3px",
              }}
            >
              LOKSEVA
            </Typography>

            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#fff",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  mt: 1,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 500,
                  letterSpacing: ".2rem",
                  color: "white",
                  textDecoration: "none",
                  ":hover": {
                    transform: "scale(0.9)",
                  },
                }}
              >
                Home
              </Typography>
            </Link>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  mt: 1,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 500,
                  letterSpacing: ".2rem",
                  color: "white",
                  textDecoration: "none",
                  ":hover": {
                    transform: "scale(0.9)",
                  },
                }}
              >
                About Us
              </Typography>
            </Link>
            {/* <Link
              to="/help"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
                <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  mt:1,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 500,
                  letterSpacing: ".2rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >  Help</Typography>
            
            </Link> */}
          </Stack>
          <Stack direction="row" spacing={80}>
            { user ? (
              <Stack direction="row">
                <Link>
                  <Typography
                  onClick={ handleLogout}
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                      mr: 2,
                      mt: 1,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 500,
                      letterSpacing: ".2rem",
                      color: "white",
                      textDecoration: "none",
                      ":hover": {
                        transform: "scale(0.9)",
                      },
                    }}
                  >
                    Logout
                  </Typography>
                </Link>

                <Link
                  to="/mainyatri"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  <Typography
                    variant="h6"
                    noWrap
                    sx={{
                      mr: 2,
                      mt: 1,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 500,
                      letterSpacing: ".2rem",
                      color: "white",
                      textDecoration: "none",
                      ":hover": {
                        transform: "scale(0.9)",
                      },
                    }}
                  >
                    Book It
                  </Typography>
                </Link>
              </Stack>
            ) : (
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  
                  sx={{
                    mr: 2,
                    mt: 1,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 500,
                    letterSpacing: ".2rem",
                    color: "white",
                    textDecoration: "none",
                    ":hover": {
                      transform: "scale(0.9)",
                    },
                  }}
                >
                  Login
                </Typography>
              </Link>
            )}
            {/* <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
                 <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  mt:1,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 500,
                  letterSpacing: ".2rem",
                  color: "white",
                  textDecoration: "none",
                  ":hover":{
                    transform:'scale(0.9)'
                  }
                }}
              >
               Login
                 </Typography>
                  
             
            </Link> */}
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};
export default Nav;

