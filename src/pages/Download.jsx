import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react'
import { displayDownloadAPI } from '../services/apiServices';
import Modal from '@mui/material/Modal';
import Chart from '../components/Chart';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const style = {
  maxHeight: '80vh',
  overflowY: 'auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Dowload() {
   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [downloadData, setDownloadData] = useState([])
  console.log(downloadData);

  const getAllhistory = async () => {
    try {
      const response = await displayDownloadAPI()
      console.log(response);
      setDownloadData(response.data)
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllhistory()
  }, [])

  return (
    <div>
      
        <Typography variant='h4' sx={{ mt: '10px' }}>
          All Downloaded Resume Details
</Typography>
          <Button onClick={handleOpen}>View Chart</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
     <Chart/>
    </Typography>
  </Box>
        
        </Modal>
        

        <Typography variant='h6' sx={{ mt: '2px', fontWeight: 'bold' }}>
          Total Downloaded Resumes From Our Site 
          <span style={{ color: 'red', fontSize: '30px' }}> </span>
        </Typography>

        <div>
          <Stack direction="row" spacing={2} sx={{ mt: '10px', mb: '20px' }}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1
          
                },
              }}
            >

              {
                downloadData.length > 0 ?
                  downloadData.map((item, index) => (
                   <div>
                    <p>Date:{item?.formattedDate}</p>
                     <Paper
                      key={item._id || index}
                      elevation={3}
                      sx={{
                        textAlign: 'justify',
                        ms: '10px',
                        gap: '50px',
                        height:'600px',
                        width:'450px',
                        padding:'20px'
                      }}
                    >

                      <Typography sx={{ fontWeight: 'bold' }}>
                        Resume {index + 1} - {item.name}
                      </Typography>

                      {/* <Typography>
                        Review at: 8/14/2026, 11:12:05 AM
                      </Typography> */}

                      <Typography sx={{ fontWeight: 'bold' }}>
                        Personal Details
                      </Typography>

                      <Typography>
                        Name: {item.name}
                      </Typography>

                      <Typography>
                        Email: {item.email}
                      </Typography>

                      <Typography>
                        Location: {item.location}
                      </Typography>

                      <Typography>
                        LinkedIn: {item.linkedIn}
                      </Typography>

                      <Typography>
                        GitHub: {item.github}
                      </Typography>

                      <Typography sx={{ fontWeight: 'bold' }}>
                        Professional Summary
                      </Typography>

                      <Typography>
                        {item.summary}
                      </Typography>

                      <Typography sx={{ fontWeight: 'bold' }}>
                        Technical Skills
                      </Typography>

                      <Box>
                        {item.skills.map((skill, skillIndex) => (
                          <Button key={skillIndex}>
                            {skill}
                          </Button>
                        ))}
                      </Box>

                      <Typography sx={{ fontWeight: 'bold' }}>
                        Education
                      </Typography>

                      Degree: {item.degree}
                      College: {item.college}
                      Graduation Year: {item.year}

                    </Paper>
                   </div>
                  ))
                  : "no downloads"
              }

            </Box>
          </Stack>
        </div>

      
    </div>
  )

}