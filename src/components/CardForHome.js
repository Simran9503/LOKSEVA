import { Button } from "@mui/base";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";



const CardForHome = ({props}) => {
   
  return (
    props.map((item)=>(
         
        <Card  key ={item.id} sx={{ maxWidth: 450, backgroundColor: "#d0e7b7" }}>
          {" "}
          <CardMedia
            sx={{
              padding: "1em 1em 1em 1em",
              objectFit: "contain",
              height: "300px",
            }}
            src="../assets/evimage.jpeg"
            title={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="#080202">
              {item.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link to={item.cardlink} style={{ textDecoration: "none" }}>
                Learn More
              </Link>
            </Button>
          </CardActions>
        </Card>

    ))
    
  );
}
export default CardForHome