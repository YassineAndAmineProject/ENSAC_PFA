import React, { useState } from "react";
import { Row, Col, Image, Form, Button, ListGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

import Card from "../../../components/Card";

// img

import auth5 from "../../../assets/images/auth/laern_6.jpeg";
//import auth5 from "../../../assets/images/auth/learning.avif";
import { MoveLeftIcon } from "lucide-react";
//import toast from "react-hot-toast";
import { toast } from "react-toastify";
import { upload } from "../../../utils/upload";
import { FaFileUpload } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
const SignUp = () => {
  const [loadingPreview, setLoadingPreview] = useState(true);
  const [url, setUrl] = useState("");
  const [avatarChanged, setAvatarChanged] = useState(false);
  const [dispPic, setDispPic] = useState(false);
  const [profilePicture, setProfilePicture] = useState();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const sendPic = async () => {
    setLoadingPreview(true);
    const urlOb = await upload(profilePicture);
    setUrl(urlOb);
    setForm({ ...form, profilePicture: urlOb });
    setLoadingPreview(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(url);
    try {
      console.log("Data sent within the request is : ");
      console.log(form);
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/students/register`,
        form
      );
      console.log("Resp data : ");
      console.log(response.data);
      toast.success("Registered Successfully");
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password2: "",
      });
      setAvatarChanged(false);
      setDispPic(false);
      setError("");
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  };
  //console.log(form);

  //if (form.role) toast.info(`Vous êtes ${form.role}`);

  return (
    <>
      <section className="login-content">
        <Row className="m-0 align-items-center bg-white vh-100">
          <div className="col-md-6 d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
            <Image
              src={auth5}
              className="Image-fluid gradient-main "
              alt="images"
            />
          </div>
          <Col md="6">
            <Row className="justify-content-center">
              <Col md="10">
                <Card className="card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
                  <Card.Body>
                    <Link
                      to="/dashboard"
                      className="navbar-brand d-flex align-items-center justify-items-center mb-3 TextCenter"
                    >
                      <MoveLeftIcon color="#000" className="icon" />
                      <h4 className="logo-title ms-3  "> ENSAF</h4>
                    </Link>
                    <p className="text-center">Créer votre compte</p>
                    <Form onSubmit={handleSubmit}>
                      {error && (
                        <p
                          style={{
                            background: "rgb(255, 63, 63)",
                            color: "white",
                            fontSize: "0.8rem",
                            padding: "0.6rem 1rem",
                            borderRadius: "0.3rem",
                            display: "block",
                            marginBottom: "1rem",
                          }}
                        >
                          {error}
                        </p>
                      )}
                      <Row>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="lastname" className="">
                              Nom
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              name="lastname"
                              onChange={handleChange}
                              value={form.lastname}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="firsName" className="">
                              Prenom
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              name="firstname"
                              onChange={handleChange}
                              value={form.firstname}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="12">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="email" className="">
                              Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              className=""
                              name="email"
                              onChange={handleChange}
                              value={form.email}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="12">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="password" className="">
                              Mot de passe
                            </Form.Label>
                            <Form.Control
                              type="password"
                              className=""
                              name="password"
                              onChange={handleChange}
                              value={form.password}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="12">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="confirm-password" className="">
                              Confirmer le mot de passe
                            </Form.Label>
                            <Form.Control
                              type="password"
                              name="password2"
                              onChange={handleChange}
                              value={form.password2}
                            />
                          </Form.Group>
                        </Col>
                        {/*<Col
                          lg="12"
                          className="d-flex justify-content-center align-items-center flex-column w-100"
                        >
                         <h5 className="text-center mb-2">
                            S'inscrire en tant que :
                          </h5>

                          <div className="d-flex justify-content-between align-items-center bg-primary   ">
                       
                            {/*<Form.Check className="mb-3 form-check mr-2 col-6 text-center">
                              <Form.Check.Input
                                type="checkbox"
                                id="customCheck1"
                                value={"Professeur"}
                                onChange={(e) =>
                                  toast.info(`Vous êtes un  ${e.target.value}`)
                                }
                              />
                              <Form.Check.Label htmlFor="customCheck1">
                                Professeur
                              </Form.Check.Label>
                            </Form.Check>

                            <Form.Check className="mb-3 form-check col-6 text-center ">
                              <Form.Check.Input
                                type="checkbox"
                                id="customCheck1"
                                value={"Etudiant"}
                                onChange={(e) =>
                                  toast.info(`Vous êtes un  ${e.target.value}`)
                                }
                              />
                              <Form.Check.Label htmlFor="customCheck1">
                                Etudiant
                              </Form.Check.Label>
                            </Form.Check>
                          </div>
                        </Col>*/}
                      </Row>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          position: "relative",
                        }}
                      >
                        Select picture :
                        {
                          <label
                            onClick={() => {
                              setAvatarChanged(true);
                            }}
                            htmlFor="picture"
                            style={{
                              fontSize: "1.3rem",
                              width: "3rem",
                              height: "3rem",
                              display: "grid",
                              placeItems: "center",
                              borderRadius: "50%",
                              cursor: "pointer",
                              background: "#5356FF",
                              color: "white",
                              position: "absolute",
                              right: "0",
                            }}
                          >
                            <FaFileUpload />
                          </label>
                        }
                        {avatarChanged && (
                          <div
                            onClick={() => {
                              setDispPic(true);
                              sendPic();
                            }}
                            style={{
                              fontSize: "1.3rem",
                              width: "3rem",
                              height: "3rem",
                              display: "grid",
                              placeItems: "center",
                              borderRadius: "50%",
                              cursor: "pointer",
                              background: "#5356FF",
                              color: "white",
                              position: "absolute",
                              border: "none",
                              right: "0",
                            }}
                          >
                            <FaCheck />
                          </div>
                        )}
                      </div>
                      {dispPic &&
                        (!loadingPreview ? (
                          <div
                            id="profile-preview"
                            style={{
                              width: "10rem",
                              height: "10rem",
                              position: "relative",
                            }}
                          >
                            <img
                              style={{ width: "100%", objectFit: "cover" }}
                              src={url}
                            />
                            <AiFillCloseCircle
                              onClick={() => {
                                setDispPic(false);
                                setAvatarChanged(false);
                              }}
                              style={{
                                position: "absolute",
                                top: "0",
                                right: "0",
                                color: "white",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        ) : (
                          <h5 style={{ fontWeight: "bold" }}>
                            Loading preview....
                          </h5>
                        ))}
                      <input
                        style={{ visibility: "hidden" }}
                        name="picture"
                        id="picture"
                        type="file"
                        onChange={(e) => {
                          setProfilePicture(e.target.files[0]);
                        }}
                      />
                      <div className="d-grid justify-content-center">
                        <Button
                          className="btn btn-primary"
                          type="submit"
                          variant="primary"
                        >
                          S'inscrire
                        </Button>
                      </div>
                      {/*<p className="text-center my-3">
                        or sign in with other accounts?
                      </p>
                      <div className="d-flex justify-content-center">
                        <ListGroup
                          as="ul"
                          className="list-group-horizontal list-group-flush"
                        >
                          <ListGroup.Item
                            as="li"
                            className="list-group-item border-0 pb-0 col-12 bg-black"
                          >
                            <Link to="#">
                              <Image src={google} alt="gm" />
                            </Link>
                          </ListGroup.Item>
                         
                         
                        </ListGroup>
                      </div>
                    */}
                      <p className="mt-3 text-center">
                        J'ai déjà un compte {" ? "}
                        <Link to="/auth/sign-in" className="text-underline">
                          Se connecter
                        </Link>
                      </p>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="sign-bg sign-bg-right">
              <svg
                width="280"
                height="230"
                viewBox="0 0 421 359"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.05">
                  <rect
                    x="-15.0845"
                    y="154.773"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(-45 -15.0845 154.773)"
                    fill="#3A57E8"
                  />
                  <rect
                    x="149.47"
                    y="319.328"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(-45 149.47 319.328)"
                    fill="#3A57E8"
                  />
                  <rect
                    x="203.936"
                    y="99.543"
                    width="310.286"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(45 203.936 99.543)"
                    fill="#3A57E8"
                  />
                  <rect
                    x="204.316"
                    y="-229.172"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(45 204.316 -229.172)"
                    fill="#3A57E8"
                  />
                </g>
              </svg>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default SignUp;

/*
  avatarChanged && (
                          <button
                            style={{
                              fontSize: "1.3rem",
                              width: "3rem",
                              height: "3rem",
                              display: "grid",
                              placeItems: "center",
                              borderRadius: "50%",
                              cursor: "pointer",
                              background: "#5356FF",
                              color: "white",
                            }}
                          >
                            <FaCheck />
                          </button>
                        )
*/
