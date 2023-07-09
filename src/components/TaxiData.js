import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";


const cardStyle ={
    border :" 3px solid white",
    backgroundColor:"black",
    margin :"5px"
}
const TaxiData = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    Fetchdata();
  },[]);

  const Fetchdata = async () => {
    const querySnapshot = await getDocs(collection(db, "chalak"));
    querySnapshot.docs.map((doc) =>   {
      var data = doc.data();
      setInfo((arr)=>[...arr ,  data]);
      console.log(doc.data());
    });
    // doc.data() is never undefined for query doc snapshots
  };

  return (
    <>
      {info.map((data) => (
        
          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h3" color="white" sx={{paddingBottom:"0.7rem"}}>
                {data.Name.name}{" "}
              </Typography>
              
              <span style={{ color: "white" }}>
                Vehicle PlatE Number:<h1>{data.PlateNo.plateNumber}</h1>
                Contact Number :<h3>{data.Phone.phone}</h3>
              </span>
            </CardContent>
          </Card>
        
      ))}
    </>
  );
};

export default TaxiData;
