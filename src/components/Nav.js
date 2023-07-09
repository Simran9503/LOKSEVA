import { Box, Stack, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import Login1 from "../pages/Login1";
import Login2 from "../pages/Login2";
import Signup1 from "../pages/Signup1";
import Signup2 from "../pages/Signup2";
import firebase from "firebase/compat/app";
import { IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { hover } from "@testing-library/user-event/dist/hover";

const Nav = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };
  

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("hello", user);
      } else {
        //logged out

        console.log("you are logged out");
      }
    });
  }, []);

  const handleLogout = async () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
   {isMobile ? (

<div style={{ position: 'sticky' }}>
<Box width="100%"  sx={{ backgroundColor: 'black' }}>
  
  <Stack
    direction="row"
    spacing={2}
    justifyContent='space-between'
    alignItems="center"
    px={2}
    py={1}
  >
    <Link to="/">
      <img
        src={logo}
        alt="logo"
        style={{
          width: '40px',
          height: '43px',
          margin: '0px 2px',
          justifyContent: 'center',
          padding: '2px',
        }}
      />
    </Link>
    <Typography
      variant="h4"
      noWrap
      component="a"
      href="/"
      sx={{
        display: 'flex',
        fontFamily: 'monospace',
        fontWeight: 500,
        letterSpacing: '.3rem',
        color: 'white',
        textDecoration: 'none',
        ml: '0',
        pl: '0',
        pt: '3px',
        mr:'10px'
      }}
    >
      LOKSEVA
    </Typography>
           
            <IconButton
              color="white"
              
              aria-controls="responsive-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              sx={{
                backgroundColor:'white',
                ":hover":{
                  backgroundColor:'grey'
                }
                
              }}
            >
              
    <MenuIcon/>
            </IconButton>
             <Menu
             id="responsive-menu"
             anchorEl={menuAnchorEl}
             keepMounted
             open={Boolean(menuAnchorEl)}
             onClose={handleMenuClose}
           >
             <MenuItem onClick={handleMenuClose} >
               <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
                 Home
               </Link>
             </MenuItem>
             <MenuItem onClick={handleMenuClose}>
               <Link to="/about" style={{ textDecoration: 'none', color: '#000' }}>
                 About Us
               </Link>
             </MenuItem>
             {user? (  
             <>             <MenuItem onClick={handleMenuClose}>
             <Link to="/mainyatri" style={{ textDecoration: 'none', color: '#000' }}>
               Book It
             </Link>
           </MenuItem>
           <MenuItem onClick={()=>{
             handleMenuClose();
             handleLogout();}}>
             <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
               Logout
             </Link>
           </MenuItem></>):( 
                <MenuItem onClick={handleMenuClose}>
                <Link to="/login" style={{ textDecoration: 'none', color: '#000' }}>
                  Login
                </Link>
              </MenuItem>

             )}
          
           </Menu>
           </Stack>
  </Box>
  </div>
           
          ) : (
            <div style={{ position: 'sticky' }}>
            <Box width="100%"  sx={{ backgroundColor: 'black' }}>
              <Stack direction='row' justifyContent='space-between' spacing='90px' alignItems='center' sx={{
                
              }}>
              <Stack direction='row' >
              <Stack
                direction="row"
                spacing={2}
                //justifyContent='space-between'
                alignItems="center"
                px={2}
                py={1}
              >
                <Link to="/">
                  <img
                    src={logo}
                    alt="logo"
                    style={{
                      width: '40px',
                      height: '43px',
                      margin: '0px 2px',
                      justifyContent: 'center',
                      padding: '2px',
                    }}
                  />
                </Link>
                <Typography
                  variant="h4"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    display: 'flex',
                    fontFamily: 'monospace',
                    fontWeight: 500,
                    letterSpacing: '.3rem',
                    color: 'white',
                    textDecoration: 'none',
                    ml: '0',
                    pl: '0',
                    pt: '3px',
                    mr:'10px'
                  }}
                >
                  LOKSEVA
                </Typography>
                </Stack>
            <Stack direction="row" spacing={2} 
            alignItems="center"
            >
              <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 500,
                    letterSpacing: '.2rem',
                    color: 'white',
                    textDecoration: 'none',
                    ':hover': {
                      transform: 'scale(0.9)',
                    },
                  }}
                >
                  Home
                </Typography>
              </Link>
              <Link to="/about" style={{ textDecoration: 'none', color: '#fff' }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 500,
                    letterSpacing: '.2rem',
                    color: 'white',
                    textDecoration: 'none',
                    ':hover': {
                      transform: 'scale(0.9)',
                    },
                    ml:'10px'
                  }}
                >
                  About Us
                </Typography>
              </Link>
            </Stack>
            </Stack>
            
                        <Stack direction="row" spacing={5} alignItems="center" >
                        {user ? (
                          <Stack direction="row" gap='3px' spacing={2} sx={{mr:'5px'}}>
                            <Link>
                              <Typography
                                onClick={handleLogout}
                                variant="h6"
                                noWrap
                                component="a"
                                sx={{
                                  fontFamily: 'monospace',
                                  fontWeight: 500,
                                  letterSpacing: '.2rem',
                                  color: 'white',
                                  textDecoration: 'none',
                                  ':hover': {
                                    transform: 'scale(0.9)',
                                  },
                                }}
                              >
                                Logout
                              </Typography>
                            </Link>
          
                            <Link
                              to="/mainyatri"
                              style={{ textDecoration: 'none', color: '#fff' }}
                            >
                              <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                  fontFamily: 'monospace',
                                  fontWeight: 500,
                                  letterSpacing: '.2rem',
                                  color: 'white',
                                  textDecoration: 'none',
                                  ':hover': {
                                    transform: 'scale(0.9)',
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
                            style={{ textDecoration: 'none', color: '#fff' }}
                          >
                            <Typography
                              variant="h6"
                              noWrap
                              component="a"
                              sx={{
                                fontFamily: 'monospace',
                                fontWeight: 500,
                                letterSpacing: '.2rem',
                                color: 'white',
                                textDecoration: 'none',
                                ':hover': {
                                  transform: 'scale(0.9)',
                                },
                              }}
                            >
                              Login
                            </Typography>
                          </Link>)}
                          </Stack>
                          </Stack>
                          
       </Box>
       </div> )}
                        
                        </>
   )}
                     
          
                             
    
  
                            
export default Nav;
