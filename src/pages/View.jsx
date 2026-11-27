import React, { useEffect } from 'react'
import { Box, Typography, Stack, Divider } from '@mui/material';
import Button from '@mui/material/Button';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import EditDocumentIcon from '@mui/icons-material/EditDocument'
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import Edit from '../components/Edit';
import { downloadResumeAPI, uploadToCloudinary, viewResumeAPI } from '../services/apiServices';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Paper from '@mui/material/Paper';



export default function View() {

// const params=useParams()
// console.log(params);//{id:5}
const [resumeDetails,setResumeDetails]=useState({})
const {id}=useParams()
console.log(id);//5


const getAResume=async(id)=>{
  try{
    const response=await viewResumeAPI(id)
    console.log(response);
    setResumeDetails(response.data)
    console.log(resumeDetails);
    
    
  }catch(err){
    console.log(err);
    
  }
}

// const downloadCv=async()=>{
// try{
//   const response=await downloadResumeAPI(resumeDetails)
//   console.log(response);
//   if(response.status===201){
//     alert("Resume Downloaded...")
//   }

// }catch(err){
// console.log(err);

// }

// }



const downloadPdf=async()=>{

  const canvas =await html2canvas(document.getElementById("pdf"),{scale:3})
  console.log(canvas);
  //  canvas to imageurl
  const imageURL=canvas.toDataURL("image/png")
  console.log(imageURL);
  
  // creating pdf formate
    const pdf =new jsPDF("p","mm","a4")

    //define width and height
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth)/canvas.width;

    //add image to pdf
    pdf.addImage(imageURL,'PNG',0,0,pdfWidth,pdfHeight);

    //save the pdf
    pdf.save('resume.pdf')
    const timeZone=new Date()
    console.log(timeZone);
    const formattedDate=`${timeZone.toLocaleDateString()},${timeZone.toLocaleTimeString()}`
    console.log(formattedDate);
    try {
      const response =await uploadToCloudinary(imageURL)
      console.log(response);

      //Save to Download
      const result =await downloadResumeAPI({...resumeDetails,
        //Add new id
        id :Date.now(),
        resumeId:resumeDetails.id,
        formattedDate,
        imageURL:response.secure_url
        
    })
    console.log(result);
    
      
    } catch (error) {
      console.log(error);
      
      
    }
    


}



useEffect(()=>{
getAResume(id)},[id])


  return (
    <div>
      <Stack direction="row" spacing={3}sx={{my: 4,display: 'flex',justifyContent: 'center',alignItems: 'center'}}
>
  <Button onClick={downloadPdf} sx={{ color: 'brown',fontFamily: 'Georgia, serif'}}>
    <SimCardDownloadIcon sx={{ fontSize: 42, mr: 1 }} />
    Download CV
  </Button>

  {/* <Button onClick={downloadPdf}>Pdf</Button> */}

    <Button component="div" sx={{ color: 'brown', fontFamily: 'Georgia, serif' }}>
    <EditDocumentIcon sx={{ fontSize: 40, mr: 1 }} />
    <Edit resumeDetails={resumeDetails} setResumeDetails={setResumeDetails} />
  </Button>

   <Link to={'/'}><Button sx={{ color: 'brown', fontFamily: 'Georgia, serif' }}>
    <HomeWorkIcon sx={{ fontSize: 40, mr: 1 }} />
    HOME
  </Button></Link>

</Stack>
      <Paper id="pdf" sx={{mt:4,fontFamily: 'Georgia, serif',p:5}}>
      <Typography variant="h4" sx={{fontWeight:'bold',fontFamily: 'Georgia, serif'}}>
       {resumeDetails.name}
      </Typography>
      <Stack spacing={1} sx={{ mt: 1 }}>
        <Typography variant="body1">
          {resumeDetails.contactNumber}
        </Typography>

        <Typography variant="p">
          {resumeDetails.email}
        </Typography>

        <Typography variant="p">
          {resumeDetails.linkedIn}
        </Typography>

        <Typography variant="p">
          {resumeDetails.gitHub}
        </Typography>

        <Typography variant="p">
          {resumeDetails.location}
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


    <Typography variant="h5" sx={{fontWeight:'bold',fontFamily: 'Georgia, serif',p:'2px'}} >
       Technical Skills
      </Typography>
      {
        resumeDetails?.skills?.map((item,index)=>(
          <Button key={index} variant='text'>
            {item}
          </Button>
        ))
      }
     


    <Divider sx={{my:2}} />


    <Typography variant="h5" sx={{fontWeight:'bold',fontFamily: 'Georgia, serif'}} >
      Education
      </Typography>
       <Stack spacing={1} sx={{ mt: 1 }}>
         <Typography variant="p">
          {resumeDetails.degree}
        </Typography>
         <Typography variant="p">
           {resumeDetails.college}
        </Typography>
         <Typography variant="p" sx={{mb:5}}>
          {resumeDetails.year}
        </Typography>
       </Stack>
      </Paper>
      

    </div>
  )
}
