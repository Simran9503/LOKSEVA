import { Opacity } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

//import { useTypewriter, Cursor } from "react-simple-typewriter";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { green } from "@mui/material/colors";
import logo from "../assets/logo.jpg";
import evimage from "../assets/evimage.jpeg";
import loksevabg from "../assets/loksevabg.jpeg";
import Typewriter from "typewriter-effect";
import photo from "../assets/photo.avif"
import CardForHome from "../components/CardForHome";
import { cardData } from "../assets/cardData";

const Home = () => {
  return (
    <Box 
      sx={{
        backgroundImage: `url(${photo})`,
        backgroundRepeat: 'repeat',
        backgroundSize: "100% auto",
        height: "100vh",
       
        display: "flex",
        justiyContent: "space-between",
        flexDirection: "column",
        overflow:'auto'
        
      }}
    >
      <Stack alignItems="center">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            mt: "30px",
            color: "white",
          }}
        >
          <Typewriter
            options={{
              strings: ["Lokseva", " An initiative by college students"],
              autoStart: true,
              loop: true,
              delay: 70,
              cursor: "..",
            }}
          />
        </Typography>
      </Stack>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
        sx={{ pt: "3px" , pl:'0px', mb:'30px'}}
      >
        <CardForHome props={cardData}/>
      </Stack>
      <Link to='/contact' style={{textDecoration:'none' ,display:"flex" , alignItems:"center", justifyContent:"center"}}>
      <Button sx={{display:'flex', flexDirection:'column', position:'fixed',bottom :"0" , textAlign:"center",  paddingLeft:'30px',color:'white',fontWeight:"bold",fontSize:"0.98rem",  ":hover":{transform:'scale(0.9)'}  }}>Contact Us</Button>

      </Link>
    
    </Box>
  );
};
export default Home;

