import { Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from"../assets/logo.jpg";
const Nav = () => {
  return (
    <div  style={{position:'sticky'}}>
      <Box width = "100px" height="50px" sx={{backgroundColor: 'black',width: {xl: '1000px'}}}> 
        <Stack direction="row" spacing={10} justifyContent="space-between">
          <Stack direction="row" spacing={2} >
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
              marginTop='2'
              sx={{
                mr: 2,
                
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 500,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
                ml: "0", pl:"0", pt:"3px"
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
                  mt:1,
                  display: { xs: "none", md: "flex" },
                  fontFamily: 'monospace',
                  fontWeight: 500,
                  letterSpacing: ".2rem",
                  color: "white",
                  textDecoration: "none",
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
                  mt:1,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 500,
                  letterSpacing: ".2rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >About Us</Typography>
             
            </Link>
            <Link
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
            
            </Link>
          </Stack>
          <Stack direction="row" spacing={80}>
            <Link
              to="/Login"
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
              > Login</Typography>
                  
             
            </Link>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};
export default Nav;

