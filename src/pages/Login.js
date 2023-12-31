import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import background from "../assets/background.avif"
import photo from "../assets/photo.avif"
import car from "../assets/car.webp"

const Login1 = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${car})`,
        backgroundRepeat: "repeat",
        backgroundSize: "100% auto",
        height: "100vh",

        display: "flex",
        justiyContent: "space-between",
        flexDirection: "column",
        overflow: "clip",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        alignContent="center"
        mt="250px"
        display="flex"
        flexWrap="wrap"
      >
        <Link to="/signupyatri">
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              height: "30vh",
              backgroundColor: "black",
              ":hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            {" "}
            <Typography fontSize="30px">
              Sign up As a <br />
              <q>Yatri</q>
            </Typography>
          </Button>
        </Link>

        <Link to="/signupchalak">
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              height: "30vh",
              backgroundColor: "black",
              ":hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <Typography fontSize="30px">
              Sign up As a <br />
              <q>Chalak</q>
            </Typography>
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};
export default Login1;
