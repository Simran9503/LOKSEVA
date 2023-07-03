import { Box } from "@mui/material"

const Mainyatri = () => {
  return (
    <Box sx={{
        backgroundSize:'100% auto',
      
    }}>
        <Box sx={{
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

        </Box>
        <Box sx={{
            width:'90vw',
            height:'100vh',
            backgroundColor:'#e1e4e2',
            ml:"50px",
            mt:"30px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
        }}>
            Here we will display the drivers available lists...fetch it from the database i created...fetch only phone no. and taxino. and name.
        </Box>
    </Box>
  )
}
export default Mainyatri