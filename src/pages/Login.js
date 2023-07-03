import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import background from "../assets/background.avif"
import photo from "../assets/photo.avif"
import car from "../assets/car.webp"

const Login1 = () => {
  return (
    <Box  sx={{
      backgroundImage: `url(${car})`,
      backgroundRepeat: 'repeat',
      backgroundSize: "100% auto",
      height: "100vh",
     
      display: "flex",
      justiyContent: "space-between",
      flexDirection: "column",
      overflow:'clip'
    }}>
    <Stack direction='row' spacing="170px" justifyContent='center' mt='250px' display='flex' >
      <Link to="/loginyatri">
        <Button variant="contained" color="success" sx={{
          borderRadius:'30px'
        }}> <Typography fontSize='30px' >Login As a <br/><q>Yatri</q></Typography></Button>
      </Link>

      <Link to="/loginchalak">
        <Button variant="contained" color='success' sx={{
          borderRadius:'30px'
        }}><Typography fontSize='30px'  >Login As a <br/><q>Chalak</q></Typography></Button>
      </Link>
    </Stack>
    </Box>

 
  );
};
export default Login1;
