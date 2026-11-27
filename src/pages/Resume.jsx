import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import FeedIcon from '@mui/icons-material/Feed';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { Link } from 'react-router-dom';


export default function Resume() {
  return (
   
      <div>
            <Container>
            <Typography variant='h3' sx={{textAlign:'center',mt:'40px',mb:'30px'}}>
              Create an ATS Friendly Resume in Minutes with AI
            </Typography>
      
            <Stack
                direction="row"
                spacing={3}
                sx={{
                  mt: '20px',
                  justifyContent: 'space-between'
                }}
              >
      
               <Paper
        elevation={3}
        sx={{
          width: '30%',
          minHeight: '250px',
          p: 3,
          textAlign: 'center',
          borderRadius: 3
        }}
      >
        {/* <IconButton
          size="large"
          sx={{
            
            color: 'blue',
            mb: 2
          }}
        > */}
          <FeedIcon fontSize="large" sx={{color:"blue",mt:4,fontSize:40}} />
        {/* </IconButton> */}
      
        <Typography variant="h5" fontWeight="bold">
          Add Your Details
        </Typography>
      
        <Typography sx={{ mt: 2 }}>
          Our AI will generate Skills & Summary
        </Typography>
      
        <Typography
          variant="h6"
          sx={{ mt: 3, color: 'black', fontWeight: 'bold' }}
        >
          Step 1
        </Typography>
      </Paper>
      
                <Paper
                  elevation={3}
        sx={{
          width: '30%',
          minHeight: '250px',
          p: 3,
          textAlign: 'center',
          borderRadius: 3
        }}
                >
                  {/* <IconButton
          size="large"
          sx={{
            
            color: 'brown',
            mb: 2
          }}
        > */}
          <SimCardDownloadIcon fontSize="large" sx={{color:"brown",mt:4,fontSize:40}} />
        {/* </IconButton> */}
      
        <Typography variant="h5" fontWeight="bold">
          Download Your Resume
        </Typography>
      
        <Typography sx={{ mt: 2 }}>
          Download CV as PDF and start applying
        </Typography>
      
        <Typography
          variant="h6"
          sx={{ mt: 3, color: 'black', fontWeight: 'bold' }}
        >
          Step 2
        </Typography>
                  
                </Paper>
      
              </Stack>
      
      
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Link to='/resume-details'><Button
                  
                  sx={{
                    backgroundColor: 'brown',
                  color:'white' 
                  }}
                >
                  LET'S START
                </Button>
                </Link>
              </Box>
            </Container>
          </div>
    
  )
}