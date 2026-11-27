import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { deleteResumeAPI, displayResumeAPI } from '../services/apiServices';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function Saved() {

  const [allResumes,setAllResumes]=useState([])

  const getAllResumes=async ()=>{
    try{
      const response =await displayResumeAPI()
      console.log(response);
      setAllResumes(response.data)
    }catch(err){
      console.log(err);
      
    }
  }
  const deleteResume=async(id)=>{
    try{
      const response=await deleteResumeAPI(id)
      console.log(response);
      if(response.status===200){
        alert("Deleted Succesfully")
        getAllResumes()

      }
      
    }catch(err){
      console.log(err);
      
    }

  }

 

  useEffect(()=>{
    getAllResumes()
  },[])


  return (
    <div>
      <Container>
      <Typography variant='h3' sx={{textAlign:'center',mt:'40px',mb:'30px'}}>
        ALL SAVED RESUMES
      </Typography>
        <Typography variant='p' sx={{textAlign:'center'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem perspiciatis eos aspernatur architecto cumque eaque aut earum provident. Beatae ex, labore voluptates quia odit quibusdam incidunt dolor illum error.
      </Typography>
      <br/>


      <TextField placeholder='Enter Job Title' sx={{width:'100%',my:'10px',position:'relative'}} />
      <SearchIcon sx={{position:'absolute',right:'80px',top:'260px'}}/>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">#</StyledTableCell>
            <StyledTableCell align="right">Resume</StyledTableCell>
            <StyledTableCell align="right">Job Roles</StyledTableCell>
            <StyledTableCell align="right">...</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {
            allResumes.length>0?
            allResumes.map((item,i)=>(

              
            <StyledTableRow  key={item.id}>
              <StyledTableCell align="right" component="th" scope="row">
                              {i+1}

              </StyledTableCell>
              
              <StyledTableCell align="right"><Link to={`/resume/${item.id}`}>{item.name}</Link></StyledTableCell>
              <StyledTableCell align="right">{item.jobTitle}</StyledTableCell>
              <StyledTableCell align="right"><Button onClick={()=>deleteResume(item.id)} sx={{backgroundColor:'red',color:'white'}}>Delete</Button></StyledTableCell>
            </StyledTableRow>
            ))
            :
<StyledTableRow>
    <StyledTableCell colSpan={4} align="center">
        No Data
    </StyledTableCell>
</StyledTableRow>
          }
         
        </TableBody>
      </Table>
    </TableContainer>
    



     </Container>



    </div>
  )
}