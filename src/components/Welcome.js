import { Box, Button, Grid, styled } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TextLoop } from "react-text-loop-next";
import profile from "../assets/images/proud-coder.svg";
import Name from "./Name";
import { CardContainer } from "./UI/Card";
const Text = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingLeft: "50px",
  fontFamily: "sans-serif",
}));

const Image = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100%",
  width: "100%",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100%",
  },
}));

export default function Welcome() {
  const [index, setNameIndex] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setNameIndex(index + 1);
    }, 3000);
  }, []);

  return (
    <CardContainer
      container
      sx={{
        height: "100%",
        width: "100%",
        bgcolor: "lightColor.dark",
      }}
    >
      <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
        <Text>  
          <Name emoji={index} />
        </Text>
      </Grid>
      <Grid item xs={12} md={6} order={{ md: 2, xs: 1 }}>
        <Image>
          <Box
            component='img'
            sx={{
              height: "100%",
              width: "100%",
            }}
            alt='portFolio'
            src={profile}
          />
        </Image>
      </Grid>
    </CardContainer>
  );
}
