import { Label } from "@mui/icons-material"
import { Box, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <Box alignItems='center' justifyContent='center' display='flex' sx={{
      height:'100vh',
     width:'100vw',
      backgroundColor:'#f7f7f7',
  

    }}>
    <Box sx={{
     width:'500px',
     width: { xs: "70vw", sm: "60vw", md: "50vw", lg: "60vw" },
    
     height:'150px',
     backgroundColor:"black",
    // background:'rgba(1 ,1, 1 ,0.1)',
     ":hover":{
      boxShadow:'5px 5px 5px ',
      transform:'scale(1.1)' //enlargement of box on hover
     },
     borderRadius:'20px'
    }}>
      <Stack direction='column' alignItems='center'>
      <Typography  fontSize='20px' fontWeight='200px' display='flex'  justifyContent='center' sx={{
        color:'white',
        fontFamily:'cursive',

      }}>
      Feel free to contact us on the email provided below:
   
   
     
      </Typography>
      <Stack direction='row' mt='30px'>
        <label style={{
          color:'white'
        }}>
          Visit our Email : 
        </label>
      <a href='mailto: dstornado2003@gmail.com' style={{
        color:'#60c265',
       // marginTop:'30px'
      }}>dstornado2003@gmail.com</a>
      </Stack>
      
      <Typography color='white' mt='20px'>
        
        Phone No. : 8894435721
      </Typography>
      </Stack>
      
      

    </Box>
    </Box>
  )
}
export default Contact