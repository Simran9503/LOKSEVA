import { Box, Button } from "@mui/material"
import TaxiData from "../components/TaxiData"


const Mainyatri = () => {





  return (
    <Box sx={{
        backgroundSize:'100% auto',
        display:"flex",
        height :"100%",
        backgroundColor:"black"
      
    }}>
        {/* <Box sx={{
          width:'400px',
          height:'400px',
          justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: {
              xs: "70vw",
              sm: "60vw",
              md: "50vw",
              lg: "30vw",
            },
            backgroundColor:'#e1e4e2',
            //background: "rgba(0,0,0,0.4)",
            mt:'20px',
            ml:'30px',
            ":hover":{
                boxShadow:'10px 10px 10px  #bfc1bf'
            }

          }}
    >
      <Button >
        Submit
      </Button>
    

        </Box> */}
        <Box sx={{
            width:'90vw',
            height:'100vh',
            
            ml:"50px",
            mt:"30px",
            display:"flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
        }}>
            <TaxiData></TaxiData>
            
        </Box>
    </Box>
  )
}
export default Mainyatri