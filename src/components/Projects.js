import React from "react";
import { CardContainer } from "./UI/Card";
import ProjectCard from "./UI/ProjectCard";
import tictactoe from "../assets/images/projectImages/ticTacToe.png";
import { Grid, Typography } from "@mui/material";
import restaurant from "../assets/images/projectImages/restaurant.png";
import rockpaperscissor from "../assets/images/projectImages/rockPaperScissor.png";
import whackamole from "../assets/images/projectImages/whackAMole.png";
import resumesite from "../assets/images/projectImages/resumeSite.png";
import emojis from "../assets/images/emojis.svg";

const projectList = [
  {
    title: "Tic Tac Toe",
    image: tictactoe,
    github: "https://github.com/vaishali-gentyal/Tic-Tac-Toe",
    link: "https://vaishali-gentyal.github.io/Tic-Tac-Toe/",
    details:
      "This is a Simple tic tac toe game 3X3 i've developed using HTML, CSS, and Javascript and hosted on Github",
  },
  {
    title: "Restaurant Website",
    image: restaurant,
    github: "https://github.com/vaishali-gentyal/Bootstrap-Restaurant-website",
    link: "https://jazzy-liger-aa93db.netlify.app",
    details:
      "This is a Reataurant demo website, i've developed using HTML, CSS, Javascript and bootstrap library and hosted on Netlify",
  },
  {
    title: "Resume",
    image: resumesite,
    github: "https://github.com/vaishali-gentyal",
    link: "https://stunning-faloodeh-8d2d2f.netlify.app",
    details:
      "This is a resume website i've developed using HTML, CSS and hosted on Netlify",
  },
  {
    title: "Whack a mole",
    image: whackamole,
    github: "https://github.com/vaishali-gentyal/Whac-a-mole",
    link: "https://admirable-kashata-3a39c3.netlify.app",
    details:
      "This is a Whack a mole game i've developed using HTML, CSS, and Javascript and hosted on Netlify",
  },
  {
    title: "Rock Paper Scissor",
    image: rockpaperscissor,
    github: "https://github.com/vaishali-gentyal/Rock-Paper-Scissors",
    link: "https://vaishali-gentyal.github.io/Rock-Paper-Scissors/",
    details:
      "This is a Rock Paper Scissor game i've developed using HTML, CSS, and Javascript and hosted on Netlify",
  },
];
const projectCards = projectList.map((project, i) => {
  return (
    <ProjectCard
      image={project.image}
      alt={project.title}
      details={project.details}
      title={project.title}
      github={project.github}
      link={project.link}
    />
  );
});
export default function Projects() {
  return (
    <CardContainer
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        bgcolor: "lightColor.dark",
        justifyContent: "center",
      }}
    >
      <Typography
        variant='h3'
        marginBottom={-7}
        align='center'
        letterSpacing={10}
      >
        MY WORK
      </Typography>
      <Typography
        component='img'
        src={emojis}
        alt='emoji'
        margin="auto"
        height='150px'
        width='150px'
        align='center'
      />
      <Grid container spacing={4} justifyContent='center'>
        {projectCards.map((item,i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            {item}
          </Grid>
        ))}
      </Grid>
    </CardContainer>
  );
}
