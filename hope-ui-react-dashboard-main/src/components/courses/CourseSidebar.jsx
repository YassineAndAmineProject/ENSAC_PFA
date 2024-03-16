import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { comCss } from "../ComponentsCss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import courseimg from "../../image/course-react.jpg";
import { NavLink } from "react-router-dom";
import { Iframe } from "../CommonComponents";
import ModalBtn from "../popup";
import { toast } from "react-toastify";
import { Heart, MoveRight, MoveRightIcon } from "lucide-react";

const CourseSidebar = () => {
  const classes = comCss();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));

  const handleEnroll = () => {
    toast.promise(resolveAfter3Sec, {
      pending: "Envoi en cours",
      success: `Demande envoyé`,
      error: "Une erreur est survenue🤯",
    });
  };
  const handleFavorite = () => {
    toast.promise(resolveAfter3Sec, {
      pending: "Ajout en cours",
      success: `Ajouté`,
      error: "Une erreur est survenue🤯",
    });
  };
  return (
    <Box className={classes.course_sidebar}>
      <Box className={classes.course_sidebar_box}>
        <Box className={classes.course_sidebar_box_1_image}>
          <img
            src={courseimg}
            alt="img"
            className={`${classes.img_responsive} ${classes.single_course_img}`}
          />
          <IconButton onClick={handleOpen}>
            <PlayArrowIcon />
          </IconButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <IconButton
                className={classes.course_sidebar_box_1_modal_close_button}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
              <Box className={classes.course_sidebar_box_1_modal}>
                {/* consol error dakhay, check korban please */}
                <Iframe src="https://www.youtube.com/embed/uXWycyeTeCs" />
              </Box>
            </Box>
          </Modal>
        </Box>
        <Box sx={{ padding: "10px !important" }}>
          <Typography
            variant="h4"
            className={classes.course_sidebar_box_1_title}
          >
            Gratuit <span>Pour tous</span>
          </Typography>
          {/*<Button
            component={NavLink}
            to="/admissionform"
            sx={{ marginBottom: "10px !important" }}
            className={`${classes.button} ${classes.course_sidebar_button_1}`}
          >
            Enroll Course
  </Button>*/}
          <ModalBtn
            sx={{ marginBottom: "10px !important" }}
            className={`${classes.button} ${classes.course_sidebar_button_1}`}
            label="S'enroller"
            title="Enrollement pour ce cours"
            description="Si vous continez, votre demande sera notifée à l'instructeur pour validation "
          >
            <Button
              onClick={handleEnroll}
              component={NavLink}
              className={`Button_hover ${classes.button} ${classes.course_sidebar_button_green}`}
            >
              J'accepte
              <MoveRight id="icon" />
            </Button>
          </ModalBtn>
          <Button
            component={NavLink}
            onClick={handleFavorite}
            className={`${classes.button} ${classes.course_sidebar_button_2}`}
          >
            <Heart size={18} /> {"  "}
            Ajouter aux favoris
          </Button>
        </Box>
      </Box>
      <Box className={classes.course_sidebar_box}>
        <Box sx={{ padding: "10px !important" }}>
          <Typography
            variant="h4"
            className={classes.course_sidebar_box_2_title}
          >
            Récapitulatif du cours
          </Typography>
          <Typography
            variant="h4"
            className={classes.course_sidebar_box_2_content}
          >
            <PlayCircleOutlineIcon
              style={{ color: "#754ffe" }}
              className={classes.single_course_sidebar_icon}
            />
            12 hours video
          </Typography>
          <Typography
            variant="h4"
            className={classes.course_sidebar_box_2_content}
          >
            <WorkspacePremiumRoundedIcon
              style={{ color: "#45D6DE" }}
              className={classes.single_course_sidebar_icon}
            />
            Certificate
          </Typography>
          <Typography
            variant="h4"
            className={classes.course_sidebar_box_2_content}
          >
            <EventNoteRoundedIcon
              style={{ color: "#83CCFA" }}
              className={classes.single_course_sidebar_icon}
            />
            12 Article
          </Typography>
          <Typography
            variant="h4"
            className={classes.course_sidebar_box_2_content}
          >
            <VideocamRoundedIcon
              style={{ color: "#D0CFC5" }}
              className={classes.single_course_sidebar_icon}
            />
            Watch Offline
          </Typography>
          <Typography
            variant="h4"
            className={classes.course_sidebar_box_2_content}
          >
            <AccessTimeOutlinedIcon
              style={{ color: "#FFAB6A" }}
              className={classes.single_course_sidebar_icon}
            />
            Lifetime access
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseSidebar;
