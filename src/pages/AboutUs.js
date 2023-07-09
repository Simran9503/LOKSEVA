import { Box, Card, CardContent, Typography } from "@mui/material"


const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",

        display: "flex",
        overflowY: "auto",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <Card
        sx={{
          backgroundColor: "black",
          border:"3px solid white",
          width: { md: "75vw", sm: "78vw", xs: "78vw" },
          height: { md: "70vh", sm: "60vh", xs: "55vh" },
          display: "flex",
          mt: "50px",
          alignItems: "center",
          borderRadius: "4rem",
        }}
      >
        <CardContent>
          <Typography sx={{ color: "white", textAlign: "center" }} variant="h3">
            We are here to connect Ev's with you to provide a environment
            friendly ride .
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          backgroundColor: "black",
          border :"3px solid white",
          width: { md: "75vw", sm: "78vw", xs: "78vw" },
          // height: { md: "70vh", sm: "60vh", xs: "55vh" },
          display: "flex",
          mt: "70px",
          display: "flex",
          flexDirection: "column",
          msOverflowY:"auto",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "4rem",
        }}
      >
        <Typography variant="h3" color="white" sx={{ mb: "15px" , padding:{xs:"2.5rem" , sm:"2.7rem" , md :"1rem"}}}>
          Why choose our service ?
        </Typography>
        <Typography variant="h5" sx={{padding:"2rem 2.8rem 2rem 2.8rem" , color :"white"}}>
          Eco-Friendly Transportation: Our fleet of electric taxis operates with
          zero-emissions, significantly reducing air pollution and greenhouse
          gas emissions. Convenience and Accessibility: With our user-friendly
          platform, you can easily book an electric taxi with just a few clicks.
          We prioritize providing a seamless and hassle-free experience for our
          customers. Safety and Comfort: We work with licensed and professional
          drivers who prioritize your safety and comfort. Our electric vehicles
          are equipped with the latest technology and features to ensure a
          smooth and enjoyable ride.
        </Typography>
      </Card>
    </Box>
  );
}
export default AboutUs