import { Button } from "@mui/base";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const CardForHome = ({props}) => {
   
  return (
    props.map((item)=>(
         
        <Card  key ={item.id} sx={{ maxWidth: 350, backgroundColor: '#e8e5ec' }}>
          
          <CardMedia component='img'
            sx={{
             
              objectFit: 'fill',
              height: "150px",
              width: "100%",
              alignItems: 'center'
            }}
            image={item.image}
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
          
              <Link to={item.cardlink} style={{ textDecoration: "none" }}>
                Learn More
              </Link>
           
          </CardActions>
        </Card>

    ))
    
  );
}
export default CardForHome
