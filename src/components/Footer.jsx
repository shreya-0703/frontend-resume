
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "30px",
        marginTop: "30px"
      }}
    >
      <Stack
        direction="row"
        spacing={4}
        sx={{
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }}
      >
        <Box sx={{ width: '40%' }}>
          <Typography variant="h6" fontWeight="bold">
            AI rBuilder
          </Typography>

          <Typography sx={{ fontSize: "13px", lineHeight: 1.6 }}>
            An AI rBuilder suggests job-specific keywords, professional
            summaries, and skill recommendations to make the resume
            more effective and ATS friendly. The main goal of the AI
            Powered Resume Builder is to simplify the resume creation
            process and help job seekers build professional,
            well-structured resumes in a few minutes.
          </Typography>
        </Box>

        <Box sx={{ width: '35%' }}>
          <Typography variant="h6" fontWeight="bold">
            Contact Us
          </Typography>

          <Typography fontSize="13px">
            ☎ 9087654321
          </Typography>

          <Typography fontWeight="bold">
            Connect With Us
          </Typography>

          <Stack direction="row" spacing={2}>
            <InstagramIcon sx={{ fontSize: 22, cursor: "pointer" }} />
            <WhatsAppIcon sx={{ fontSize: 22, cursor: "pointer" }} />
            <FacebookIcon sx={{ fontSize: 22, cursor: "pointer" }} />
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
