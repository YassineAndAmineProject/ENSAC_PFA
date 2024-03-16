import React, { useState } from "react";
import { Row, Col, Image, Form, Button, ListGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../../components/Card";

// img

import auth5 from "../../../assets/images/auth/laern_6.jpeg";
//import auth5 from "../../../assets/images/auth/learning.avif";
import { MoveLeftIcon } from "lucide-react";
//import toast from "react-hot-toast";
import { toast } from "react-toastify";

const SignUp = () => {
  let history = useNavigate();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value.trim() });
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
                    <Form
                      onSubmit={(e) => {
                        e.preventDefault();
                        //toast.success("YOOOOO BRO");
                        toast.info("Appliquer la requete POST");
                        console.log(form);
                      }}
                    >
                      <Row>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="LastName" className="">
                              Nom
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              id="lastName"
                              placeholder=" "
                              onChange={handleChange}
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
                              id="firstName"
                              placeholder=" "
                              onChange={handleChange}
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
                              id="email"
                              placeholder=" "
                              onChange={handleChange}
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
                              id="password"
                              placeholder=" "
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="12">
                          <Form.Group className="form-group ">
                            <Form.Label htmlFor="confirm-password" className="">
                              Confirmer le mot de passe
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              id="confirm-password"
                              placeholder=" "
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="12">
                          <Form.Group className="form-group ">
                            <Form.Label htmlFor="validationDefault04">
                              Role
                            </Form.Label>
                            <Form.Select
                              id="role"
                              onChange={handleChange}
                              required
                            >
                              <option defaultValue>
                                Je m'inscris en tant que
                              </option>
                              <option value={"Professeur"}>Professeur</option>
                              <option value={"Etudiant"}>Etudiant</option>
                            </Form.Select>
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
