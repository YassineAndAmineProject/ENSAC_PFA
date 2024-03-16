import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Pagebanner from "../components/Pagebanner";
import { pageCss } from "./PageCss";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CourseSidebar from "../components/courses/CourseSidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { comCss } from "../components/ComponentsCss";
import { useParams } from "react-router-dom";

const itemtabs = [
  "Introduction",
  "Compréhension des Fondamentaux de React Native",
  "Ajout de la pile et du navigateur d'onglets inférieur à notre projet react native",
  "Aperçu des Hooks React",
  "Projet",
  "Conclusion",
];
const data = [1, 2, 3, 4];

const SingleCourse = () => {
  const classes = pageCss();
  const style = comCss();
  const [tabValue, setTabvalue] = useState(0);
  const handleChange = (event, newValue) => {
    setTabvalue(newValue);
  };

  //RECUPERER LE ID DE L'URL
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <Pagebanner
        title="Démarrer avec JavaScript"
        subtitle="JavaScript est le langage de programmation populaire qui alimente les pages web et les applications web. Ce cours vous permettra de commencer à coder en JavaScript."
        course_time="12 heures 34 minutes"
        course_enroll="5 Inscrits"
        course_rating="4"
        course_expart="Intermédiaire"
        className={style.page_banner_singleCourse}
      />
      <Box className={classes.course_banner}></Box>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column-reverse",
              sm: "column-reverse",
              md: "row",
            },
          }}
        >
          <Grid item xs={12} sm={12} md={8}>
            <Box className={classes.single_course_tabs_section}>
              <Tabs value={tabValue} onChange={handleChange}>
                <Tab label="Programme" />
                <Tab label="Description" />
              </Tabs>
              <Box className={classes.single_course_tabs_box}>
                {tabValue === 0 && (
                  <Box className={classes.single_course_tabs}>
                    {itemtabs.map((item) => (
                      <Box
                        key={item}
                        className={classes.single_course_tabs_list}
                      >
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography>{item}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            {data.map((item) => (
                              <Box
                                key={item}
                                className={classes.single_course_tabs_content}
                              >
                                <Typography variant="h4">
                                  <LockOutlinedIcon
                                    className={classes.single_course_tabs_icon}
                                  />
                                  Ce que vous obtiendrez en suivant ce cours
                                </Typography>
                                <Typography variant="h4">9m 34s</Typography>
                              </Box>
                            ))}
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    ))}
                  </Box>
                )}
                {tabValue === 1 && (
                  <Box className={classes.single_course_tabs_des}>
                    <Typography variant="h4" pb={3}>
                      Si vous apprenez à programmer pour la première fois, ou si
                      vous venez d'un autre langage, ce cours, JavaScript:
                      Démarrage, vous donnera les bases pour coder en
                      JavaScript. Tout d'abord, vous découvrirez les types
                      d'applications qui peuvent être construites avec
                      JavaScript, et les plates-formes sur lesquelles elles
                      fonctionneront.
                    </Typography>
                    <Typography variant="h4">
                      Ensuite, vous explorerez les bases du langage, en donnant
                      de nombreux exemples. Enfin, vous mettrez en pratique vos
                      connaissances en JavaScript et modifierez une page web
                      moderne et réactive. Lorsque vous aurez terminé ce cours,
                      vous aurez les compétences et les connaissances en
                      JavaScript pour créer des programmes simples, des
                      applications web simples et modifier des pages web.
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CourseSidebar />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default SingleCourse;
