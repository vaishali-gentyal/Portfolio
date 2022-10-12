import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProjectCard(props) {

  return (
    <Card sx={{ maxWidth: "100%", bgcolor:"lightColor.light" }}>
      <CardMedia
        component='img'
        height='100%'
        image={props.image}
        alt={props.alt}
      />
      <CardContent sx={{ height: "110px" }}>
        <Typography gutterBottom variant='h4' component='p'>
          {props.title}
        </Typography>
        <Typography
          variant='h6'
          color='lightColor.contrastText'
          align='left'
        >
          {props.details}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={props.link} size='small' color='primary' variant='outlined'
        >
          Check it out
        </Button>
        <Button href={props.github} size='small' color='primary' variant='outlined'>
          Source Code
        </Button>
      </CardActions>
    </Card>
  );
}
