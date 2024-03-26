import {
  Box,
  Button,
  CircularProgress,
  Container,
  Drawer,
  IconButton,
  InputBase,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { comCss } from "./ComponentsCss";
import logo from "../image/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { Spinner } from "@nextui-org/react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { UserContext } from "../context/userContext";
import { Dropdown } from "react-bootstrap";
import CustomToggle from "./dropdowns";
import axios from "axios";
import "../../src/assets/scss/maker.css";
import { toast } from "react-toastify";
const Navbar = () => {
  const classes = comCss();
  const [openMenu, setOpenMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  const [scrollNavbar, setScrollNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setScrollNavbar(true);
    } else {
      setScrollNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  // LOGIQUE BACKEND COMMENCE ICI :
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const [fetchedUser, setFetchedUser] = useState(null);
  useEffect(() => {
    const fetchConcernedUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/students/get/${currentUser?.id}`
        );
        setFetchedUser(response.data);
        console.log(fetchedUser);
      } catch (err) {
        // un toast pour indiquer que des choses ne marchent pas...
        toast.error(
          "Ops! il semble que quelque chose ne marche pas, veuillez actualiser cette page !"
        );
      }
    };
    if (token) {
      fetchConcernedUser();
    }
  }, []);
  return (
    <Box
      className={
        scrollNavbar
          ? `${classes.navbar_section_active}`
          : `${classes.navbar_section}`
      }
    >
      <Container maxWidth="lg">
        <Box className={classes.navbar_box}>
          <Box className={classes.navbar_laft}>
            <Box className={classes.navbar_laft_logo}>
              <Link to="/">
                <span className="text-xl font-bold text-purple-700">
                  ENSACademy{" "}
                </span>
                {/*<img src={logo} alt="logo" className={classes.img_responsive} />*/}
              </Link>
            </Box>
            <Box className={classes.navbar_laft_menu}>
              <Box className={classes.navbar_link_computer}>
                <Link to="/" className={`${classes.nav_link}`}>
                  Acceuil
                </Link>
                <Link to="/main_about" className={`${classes.nav_link}`}>
                  A propos
                </Link>
                <Link to="/courses" className={`${classes.nav_link}`}>
                  Cours
                </Link>
                <Link to="/blog" className={`${classes.nav_link}`}>
                  Blog
                </Link>
                <Link to="/contact" className={`${classes.nav_link}`}>
                  Contact
                </Link>
                <Link to="/Academies" className={`${classes.nav_link}`}>
                  Academies
                </Link>
              </Box>

              <Box className={classes.navbar_link_mobail}>
                <IconButton onClick={() => setOpenMenu(!openMenu)}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={"right"}
                  open={openMenu}
                  onClose={() => setOpenMenu(!openMenu)}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                >
                  <IconButton
                    onClick={() => setOpenMenu(!openMenu)}
                    className={classes.clossessideNav}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Link
                    to="/"
                    className={`${classes.nav_link} ${classes.nav_link_mobail}`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/main_about"
                    className={`${classes.nav_link} ${classes.nav_link_mobail}`}
                  >
                    About
                  </Link>
                  <Link
                    to="/courses"
                    className={`${classes.nav_link} ${classes.nav_link_mobail}`}
                  >
                    Courses
                  </Link>
                  <Link
                    to="/compareplan"
                    className={`${classes.nav_link} ${classes.nav_link_mobail}`}
                  >
                    Compareplan
                  </Link>
                  <Link
                    to="/pricing"
                    className={`${classes.nav_link} ${classes.nav_link_mobail}`}
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/blog"
                    className={`${classes.nav_link} ${classes.nav_link_mobail}`}
                  >
                    Blog
                  </Link>
                  <Link
                    to="/contact"
                    className={`${classes.nav_link} ${classes.nav_link_mobail}`}
                  >
                    Contact
                  </Link>
                </Drawer>
              </Box>
            </Box>
            {/* searchbar nav bar */}
            <Box className={classes.navbar_laft_searchbar}>
              <SearchIcon className={classes.navbar_laft_searchbar_icon} />
              <InputBase
                placeholder="Cherchez-vous un cours ?"
                inputProps={{ "aria-label": "search" }}
              />
            </Box>
          </Box>
          {/* button left nav bar */}
          {!token ? (
            <Box className={classes.navbar_right}>
              <Button
                variant="outlined"
                href="/auth/sign-up"
                sx={{ marginRight: "12px" }}
                className={`${classes.button} ${classes.button_1}`}
              >
                S'inscrire
              </Button>
              <Button
                href="auth/sign-in"
                className={`${classes.button} ${classes.button_2}`}
                onClick={handleClick}
              >
                Se connecter
              </Button>
            </Box>
          ) : (
            <Dropdown as="li" className="nav-item">
              <Dropdown.Toggle
                as={CustomToggle}
                variant=" nav-link py-0 d-flex align-items-center"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={fetchedUser?.profilePicture}
                  alt="User-Profile"
                  className="theme-color-default-img img-fluid avatar avatar-50 avatar-rounded"
                />
                <img
                  src={""}
                  alt="User-Profile"
                  className="theme-color-purple-img img-fluid avatar avatar-50 avatar-rounded"
                />
                <img
                  src={""}
                  alt="User-Profile"
                  className="theme-color-blue-img img-fluid avatar avatar-50 avatar-rounded"
                />
                <img
                  src={""}
                  alt="User-Profile"
                  className="theme-color-green-img img-fluid avatar avatar-50 avatar-rounded"
                />
                <img
                  src={""}
                  alt="User-Profile"
                  className="theme-color-yellow-img img-fluid avatar avatar-50 avatar-rounded"
                />
                <img
                  src={""}
                  alt="User-Profile"
                  className="theme-color-pink-img img-fluid avatar avatar-50 avatar-rounded"
                />
                <div className="caption ms-3 d-none d-md-block ">
                  <h6 className="mb-0 caption-title">
                    {currentUser?.fullName}
                  </h6>
                  <p className="mb-0 caption-sub-title">
                    {currentUser?.entity}
                  </p>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <Dropdown.Item
                  href={`/dashboard/app/user-profile/${currentUser?.id}`}
                >
                  Profile
                </Dropdown.Item>
                <Dropdown.Item href="/dashboard/app/user-profile-edit">
                  Modifier Profile
                </Dropdown.Item>
                <Dropdown.Item href="#">Privacy Setting</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
