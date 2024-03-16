import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Pagebanner from "../components/Pagebanner";
import { pageCss } from "./PageCss";
import Fliter from "../components/courses/Filter";
import Allcourses from "../components/courses/Allcourses";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Courses = () => {
  const classes = pageCss();
  return (
    <>
      <Navbar />

      <Pagebanner title="Cours" />
      <Box className={classes.course_section}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h3"
            className={classes.course_count_title}
          >
            Visualiser 1–9 des 32 cours
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Fliter />
            </Grid>
            <Grid item xs={12} sm={9}>
              <Allcourses />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />

    </>
  );
};

export default Courses;
