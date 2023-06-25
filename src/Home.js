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

const Home = () => {
  const { text } = useTypewriter({
    words: ["ToLokseva", "website"],
    loop: {},
  });

  return (
    <div
      class="image"
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage:
          'url("data:image/jpeg;base64,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")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
        }}
      >
        Welcome!{text}
        <Cursor />
      </Typography>

      <Stack
        direction="row"
        sx={{
          justifyContent: "center",
        }}
      >
        <Card sx={{ maxWidth: 345, mt: 10 , backgroundColor:'#d0e7b7'}}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fkineticgreenvehicles.com%2Felectric-three-wheelers%2Fpassenger%2F&psig=AOvVaw3OBDhshYZow0dndVc4bT5-&ust=1687790026648000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJCylPrR3v8CFQAAAAAdAAAAABAE"
            title="E-Riksha"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Electric vehicle
            </Typography>
            <Typography variant="body2" color="text.secondary">
              An electric vehicle is a vehicle that uses one or more electric
              motors for propulsion. It can be powered by a collector system,
              with electricity from extravehicular sources, or it can be powered
              autonomously by a battery.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link
                to="https://en.wikipedia.org/wiki/Electric_vehicle"
                style={{ textDecoration: "none" }}
              >
                Learn More
              </Link>
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, mt: 10, marginLeft: 5 , backgroundColor:'#899d73'}}>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Importance
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lower running costs, Low maintenance cost, Zero Tailpipe
              Emissions, Tax and financial benefits, Petrol and diesel use is
              destroying our planet, Electric Vehicles are easy to drive and
              quiet, Convenience of charging at home.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link
                to="https://e-amrit.niti.gov.in/benefits-of-electric-vehicles"
                style={{ textDecoration: "none" }}
              >
                Learn More
              </Link>
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, mt: 10, marginLeft: 5, backgroundColor:'#d0e7b7' }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F0d%2Fcf%2Fb5%2F0dcfb548989afdf22afff75e2a46a508.jpg&tbnid=30-b4CQG8xWSvM&vet=12ahUKEwjOiLm4197_AhWuqGMGHcnHD2MQMygKegUIARD1AQ..i&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2F783556035160751040%2F&docid=DMLAR2-F8fhT-M&w=626&h=626&q=logo&ved=2ahUKEwjOiLm4197_AhWuqGMGHcnHD2MQMygKegUIARD1AQ"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lokseva For You
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lokseva is a small initiative taken towards keeping out planet
              safe! GREEN INDIA, CLEAN INDIA. <br />
              Do you our website and feel free to critisize or appreciate it.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link to="" style={{ textDecoration: "none" }}>
                {" "}
                Learn More
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Stack>
      <Box>
        <Stack direction="row" spacing={60}>
          <Stack direction="row" spacing={2}>
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
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "black",
                  textDecoration: "none",
                  
                }}
              >
                Contact Us
              </Typography>
            </Link>
          </Stack>
          <Stack direction="row" spacing={80}></Stack>
        </Stack>
      </Box>
    </div>
  );
};
export default Home;
