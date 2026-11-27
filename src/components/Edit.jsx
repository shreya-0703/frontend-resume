import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { useRef } from 'react';


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


export default function Edit({ resumeDetails, setResumeDetails }) {
  console.log(resumeDetails);

  const skillRef = useRef()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addSkill = (skill) => {
    console.log(skill);
    if (skill) {
      const result = resumeDetails?.skills?.some(item => item.includes(skill))

      if (result) {
        alert("Skills Already exists")
      } else {
        alert("added")
        setResumeDetails({ ...resumeDetails, skills: [...(resumeDetails?.skills || []), skill] })
      }
      skillRef.current.value = ""

    }
    else {
      alert("Invalid")
    }
  }

  const removeSkill = (skill) => {
    setResumeDetails({ ...resumeDetails, skills: resumeDetails?.skills.filter(item => item !== skill) })
  }


  const saveResume=()=>{
    alert("Updated Succesfully")
    handleClose()
  }

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>

          <h1>Personal Details</h1>
          <TextField value={resumeDetails.name} onChange={(e) => setResumeDetails({ ...resumeDetails, name: e.target.value })} sx={{ width: '500px' }} id="standard-basic" label="Full Name" variant="standard" width='200px' />
          <TextField value={resumeDetails.location} onChange={(e) => setResumeDetails({ ...resumeDetails, location: e.target.value })} sx={{ width: '500px' }} id="standard-basic" label="Location" variant="standard" width='200px' />
          <TextField value={resumeDetails.jobTitle} onChange={(e) => setResumeDetails({ ...resumeDetails, jobTitle: e.target.value })} sx={{ width: '500px' }} id="standard-basic" label="Choose Job Title" variant="standard" width='200px' />

          <h1>Contact Details</h1>
          <TextField value={resumeDetails.email} onChange={(e) => setResumeDetails({ ...resumeDetails, email: e.target.value })} sx={{ width: '500px' }} id="standard-basic" label="Email" variant="standard" width='200px' />
          <TextField value={resumeDetails.contactNumber} onChange={(e) => setResumeDetails({ ...resumeDetails, contactNumber: e.target.value })} sx={{ width: '500px' }} id="standard-basic" label="Contact Number" variant="standard" width='200px' />
          <TextField value={resumeDetails.linkedIn} onChange={(e) => setResumeDetails({ ...resumeDetails, linkedIn: e.target.value })} sx={{ width: '500px' }} id="standard-basic" label="Linkedin Link" variant="standard" width='200px' />
          <TextField value={resumeDetails.gitHub} onChange={(e) => setResumeDetails({ ...resumeDetails, gitHub: e.target.value })} sx={{ width: '500px' }} id="standard-basic" label="Github Link" variant="standard" width='200px' />

          <h1>Educational Details</h1>
          <TextField value={resumeDetails.degree} onChange={(e) => setResumeDetails({ ...resumeDetails, degree: e.target.value })} sx={{ width: '500px' }} id="standard-basic" label="Bachlor's Degree" variant="standard" width='200px' />
          <TextField value={resumeDetails.college} onChange={(e) => setResumeDetails({ ...resumeDetails, college: e.target.value })} sx={{ width: '500px' }} id="standard-basic" label="College/University Name" variant="standard" width='200px' />
          <TextField value={resumeDetails.year} onChange={(e) => setResumeDetails({ ...resumeDetails, year: e.target.value })} sx={{ width: '500px' }} id="standard-basic" label="Year Of Graduation" variant="standard" width='200px' />

          <h1>Skills</h1>
          <Box>
            <TextField inputRef={skillRef} sx={{ width: '500px' }} id="outlined-basic" label="Skills" variant="outlined" />

            <button variant="contained" onClick={() => addSkill(skillRef.current.value)}>
              Add
            </button>

            {
              resumeDetails?.skills?.map(item => (
                <Button onClick={() => removeSkill(item)}>{item} X</Button>
              ))
            }

            <h1>Summary</h1>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit, doloribus, recusandae provident enim perferendis qui nesciunt amet, ducimus eos facere minima architecto id velit tempore debitis! Modi, eveniet corrupti.</Typography>
          </Box>

          <Button onClick={saveResume}>Save</Button>


        </Box>
      </Modal>
    </div>
  )
}
