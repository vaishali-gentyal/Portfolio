import { Box, Typography } from "@mui/material";
import React from "react";
import TextLoop from "react-text-loop";
import TextTransition from "react-text-transition";

const Name = ({ i }) => {
  const emoji = "✌✨✴❤😏😎";
  return (
    <Box>
      <Typography component='p' gutterBottom variant='h4'>
        Hi, there I'm {emoji[i % emoji.length]} {emoji[0]}
      </Typography>
      <Typography component='p' gutterBottom variant='h1'>
        <TextTransition direction='right' children='Vaishali Gentyal' inline />
      </Typography>
      {/* </TextTransition> */}

      <Typography component='p' gutterBottom variant='h5'>
        A Software Developer
      </Typography>
    </Box>
  );
};

export default React.memo(Name);
