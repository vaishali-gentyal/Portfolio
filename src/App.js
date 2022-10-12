import { Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import AboutMe from "./components/Aboutme";
import { Navbar } from "./components/Navbar";
import { Theme } from "./components/UI/Theme";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Grid container direction='column'>
        {/* Header */}
        <section id='home'>
          <Grid item xs={12}>
            <Navbar />
            <Welcome />
          </Grid>
        </section>
        {/* Content */}

        <Grid item xs={12}>
          <section id='about'>
            <AboutMe />
          </section>
          <section id='projects'>
            <Projects />
          </section>
        </Grid>

        {/* Footer */}
        <section id='contact%20me'>
          <Grid item xs={12} marginBottom='5px'>
            <Footer />
            <Typography
              textAlign='center'
              variant='footer'
              component='p'
              color='lightColor.contrastText'
            >
              © Designed and Develobed by Vaishali Gentyal.
            </Typography>
          </Grid>
        </section>
      </Grid>
    </ThemeProvider>
  );
}
