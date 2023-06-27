import { Opacity } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

import { useTypewriter, Cursor } from "react-simple-typewriter";
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

import CardForHome from "../components/CardForHome";
import { cardData } from "../assets/cardData";
const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${loksevabg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justiyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Stack alignItems="center">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            mt: "20px",
            color: "#674188",
          }}
        >
          <Typewriter
            options={{
              strings: ["Lokseva", " A intitiave by college students"],
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
        sx={{ pt: "50px" }}
      >
        <CardForHome props={cardData}></CardForHome>
      </Stack>
    </Box>
  );
};
export default Home;
