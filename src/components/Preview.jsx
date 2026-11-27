import React from 'react'
import { Box, Typography, Stack, Divider } from '@mui/material';
import Button from '@mui/material/Button';

export default function Preview({resumeDetails}) {
  return (
    <div>
      <Box sx={{mt:4,fontFamily: 'Georgia, serif'}}>
         <Typography variant="h5" sx={{fontWeight:'bold',fontFamily: 'Georgia, serif'}} >
      Personal Details
    </Typography>
      <Typography variant="h6" sx={{fontWeight:'bold',fontFamily: 'Georgia, serif'}}>
       Name:{resumeDetails.name}
      </Typography>
      <Stack spacing={1} sx={{ mt: 1 }}>
        <Typography variant="body1">
          Phone: {resumeDetails.contactNumber}
        </Typography>

        <Typography variant="p">
          Email: {resumeDetails.email}
        </Typography>

        <Typography variant="p">
          Linkedin: {resumeDetails.linkedIn}
        </Typography>

        <Typography variant="p">
          Github: {resumeDetails.gitHub}
        </Typography>

        <Typography variant="p">
          Location: {resumeDetails.location}
        </Typography>
      </Stack>


      <Divider sx={{my:2}}/>

    <Typography variant="h5" sx={{fontWeight:'bold',fontFamily: 'Georgia, serif'}} >
      Professional Summary
    </Typography>
    <Typography sx={{mt:2,textAlign:'justify',fontFamily: 'Georgia, serif'}}>
      {resumeDetails.summary}
    </Typography>

      <Divider sx={{my:2}} />


        <Button variant="h5" sx={{fontWeight:'bold',fontFamily: 'Georgia, serif'}} >
       Technical Skills
      </Button>
      {
        resumeDetails?.skills?.map(item=>(
          <Button>
            {item}
          </Button>
        ))
      }
    
    {/* <Stack spacing={3} direction="row" sx={{fontFamily: 'Georgia, serif'}}>
      <Button sx={{color:'black' }}  variant="text">{item}</Button>
      <Button sx={{color:'black' }}  variant="text">CSS3</Button>
      <Button sx={{color:'black' }}  variant="text">JavaScript</Button>
    </Stack>
     <Stack spacing={3} direction="row">
      <Button sx={{color:'black' }}  variant="text">React.js</Button>
      <Button sx={{color:'black' }}  variant="text">Node.js</Button>
      <Button sx={{color:'black' }}  variant="text">Express.js</Button>
    </Stack>
     <Stack spacing={3} direction="row" sx={{mx:1}}>
      <Button sx={{color:'black' }} variant="text">MongoDB</Button>
      <Button sx={{color:'black' }} variant="text">Bootstrap</Button>
      <Button sx={{color:'black' }} variant="text">MaterialUI</Button>
    </Stack>


    <Divider sx={{my:2}} /> */}


    <Typography variant="h5" sx={{fontWeight:'bold',fontFamily: 'Georgia, serif'}} >
      Education
      </Typography>
       <Stack spacing={1} sx={{ mt: 1 }}>
         <Typography variant="p">
        Degree:{resumeDetails.degree}
        </Typography>
         <Typography variant="p">
          College:{resumeDetails.college} 
        </Typography>
         <Typography variant="p" sx={{mb:5}}>
          Year of Graduation: {resumeDetails.year}
        </Typography>
       </Stack>
      </Box>
    </div>
  )
}
