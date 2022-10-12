import {  Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CardContainer } from "./UI/Card";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailRoundedIcon from '@mui/icons-material/MailRounded';
const Footer = () => {
  return (
    <CardContainer
      container
      sx={{
        justifyContent: "center",
        minHeight: "100%",
        margin: "20px 0",
        padding: "20px",

      }}
    >
      <Grid xs={12} item textAlign='center'>
        <Typography variant='h3' component='p' letterSpacing={5}>
          KEEP IN TOUCH
        </Typography>
        <Typography variant='h5' component='p'>
          I'm currently specializing
          <Typography variant='h5' component='span' color='#00695f'>
            {" "}
            Full-Stack Web Development.
          </Typography>
        </Typography>
        <br />
        <Box component='div' id='social'>
          <IconButton
            href='https://www.linkedin.com/in/vaishali-gentyal-a44572179/'
            variant='contained'
            size='small'
            color='primary'
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href='https://github.com/vaishali-gentyal/'
            variant='contained'
            size='small'
            color='primary'
            aria-label="github"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color='primary'
            href={`mailto:gentyalvaishaliv@gmail.com`}
            variant='contained'
            size='small'
          >
            <MailRoundedIcon/>
          </IconButton>
        </Box>
      </Grid>
    </CardContainer>
  );
};

export default Footer;
