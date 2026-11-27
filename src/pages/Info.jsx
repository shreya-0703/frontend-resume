import { Box, Stack } from '@mui/material'


import React from 'react'
import ResumeInput from '../components/ResumeInput'
import Preview from '../components/Preview'
import { useState } from 'react'


export default function Info() {
   const [resumeDetails,setResumeDetails]=useState(
      {
      name:"", 
      location:"",
      jobTitle:"",
      email:"",
      contactNumber:"",
      linkedIn:"",
      gitHub:"",
      degree:"",
      college:"",
      year:"",
      skills:[],
      summary:"",
      
    })
    console.log(resumeDetails);
  return (
    <div>
      <Stack direction={"row"}
      sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'   }} >
        <Box sx={{width:'650px',p:'20px'}}>
          <ResumeInput resumeDetails={resumeDetails}  setResumeDetails={setResumeDetails}/>

        </Box>


        <Box sx={{width:'650px'}}>
          <Preview resumeDetails={resumeDetails} />

        </Box>
      </Stack>
    </div>
  )
}
