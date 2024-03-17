import React, { useState } from "react";
import { Row, Col, Form, Image } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
// img
import imgsuccess from "../../../assets/images/pages/img-success.png";

const UserAccountSetting = () => {
  const [show, AccountShow] = useState("A");

  return (
    <>
      <div>
        <Row>
          <Col sm="12" lg="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Assistant Simple</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <Form id="form-wizard1" className="text-center mt-3">
                  <ul id="top-tab-list" className="p-0 row list-inline">
                    <li
                      className={` ${show === "Image" ? " active done" : ""} ${
                        show === "Personal" ? " active done" : ""
                      } ${show === "Account" ? " active done" : ""} ${
                        show === "A" ? "active" : ""
                      } col-lg-3 col-md-6 text-start mb-2 active`}
                      id="account"
                    >
                      <Link to="#">
                        <div className="iq-icon me-3">
                          <svg
                            className="svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <span>Compte</span>
                      </Link>
                    </li>
                    <li
                      id="personal"
                      className={`${
                        show === "Personal" ? " active done" : ""
                      } ${show === "Image" ? " active done" : ""} ${
                        show === "Account" ? "active " : ""
                      } col-lg-3 col-md-6 mb-2 text-start`}
                    >
                      <Link to="#">
                        <div className="iq-icon me-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <span>Personnel</span>
                      </Link>
                    </li>
                    <li
                      id="payment"
                      className={`${show === "Image" ? " active done" : ""} ${
                        show === "Personal" ? "active" : ""
                      } col-lg-3 col-md-6 mb-2 text-start`}
                    >
                      <Link to="#">
                        <div className="iq-icon me-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <span>Image</span>
                      </Link>
                    </li>
                    <li
                      id="confirm"
                      className={`${
                        show === "Image" ? " active " : ""
                      } col-lg-3 col-md-6 mb-2 text-start`}
                    >
                      <Link to="#">
                        <div className="iq-icon me-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span>Terminer</span>
                      </Link>
                    </li>
                  </ul>
                  <fieldset
                    className={`${show === "A" ? "d-block" : "d-none"}`}
                  >
                    <div className="form-card text-start">
                      <div className="row">
                        <div className="col-7">
                          <h3 className="mb-4">Informations du compte : </h3>
                        </div>
                        <div className="col-5">
                          <h2 className="steps">Étape 1 - 4</h2>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">Email : *</label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">
                              Nom d'utilisateur : *
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="uname"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">
                              Mot de passe : *
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="pwd"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">
                              Confirmer le mot de passe : *
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="cpwd"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      name="next"
                      className="btn btn-primary next action-button float-end"
                      value="Next"
                      onClick={() => AccountShow("Account")}
                    >
                      Suivant
                    </button>
                  </fieldset>
                  <fieldset
                    className={`${show === "Account" ? "d-block" : "d-none"}`}
                  >
                    <div className="form-card text-start">
                      <div className="row">
                        <div className="col-7">
                          <h3 className="mb-4">Informations personnelles :</h3>
                        </div>
                        <div className="col-5">
                          <h2 className="steps">Étape 2 - 4</h2>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">Prénom : *</label>
                            <input
                              type="text"
                              className="form-control"
                              name="fname"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">Nom : *</label>
                            <input
                              type="text"
                              className="form-control"
                              name="lname"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">
                              Numéro de contact : *
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="phno"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">
                              Numéro de contact alternatif : *
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="phno_2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      name="next"
                      className="btn btn-primary next action-button float-end"
                      value="Next"
                      onClick={() => AccountShow("Personal")}
                    >
                      Suivant
                    </button>
                    <button
                      type="button"
                      name="previous"
                      className="btn btn-dark previous action-button-previous float-end me-1"
                      value="Previous"
                      onClick={() => AccountShow("A")}
                    >
                      Précédent
                    </button>
                  </fieldset>
                  <fieldset
                    className={`${show === "Personal" ? "d-block" : "d-none"}`}
                  >
                    <div className="form-card text-start">
                      <div className="row">
                        <div className="col-7">
                          <h3 className="mb-4">Avatar </h3>
                        </div>
                        <div className="col-5">
                          <h2 className="steps">Étape 3 - 4</h2>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">
                          Télécharger votre photo :
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          name="pic"
                          accept="image/*"
                        />
                      </div>
                      
                    </div>
                    <button
                      type="button"
                      name="next"
                      className="btn btn-primary next action-button float-end"
                      value="Submit"
                      onClick={() => AccountShow("Image")}
                    >
                      Soumettre
                    </button>
                    <button
                      type="button"
                      name="previous"
                      className="btn btn-dark previous action-button-previous float-end me-1"
                      value="Previous"
                      onClick={() => AccountShow("Account")}
                    >
                      Précédent
                    </button>
                  </fieldset>
                  <fieldset
                    className={`${show === "Image" ? "d-block" : "d-none"}`}
                  >
                    <div className="form-card">
                      <div className="row">
                        <div className="col-7">
                          <h3 className="mb-4 text-left">Terminer :</h3>
                        </div>
                        <div className="col-5">
                          <h2 className="steps">Étape 4 - 4</h2>
                        </div>
                      </div>
                      <br />
                      <br />
                      <h2 className="text-success text-center">
                        <strong>SUCCÈS !</strong>
                      </h2>
                      <br />
                      <div className="row justify-content-center">
                        <div className="col-3">
                          {" "}
                          <Image
                            src={imgsuccess}
                            className="img-fluid"
                            alt="fit-image"
                          />{" "}
                        </div>
                      </div>
                      <br />
                      <br />
                      <div className="row justify-content-center">
                        <div className="col-7 text-center">
                          <h5 className="purple-text text-center">
                            Votre profile a été mis à jour
                          </h5>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UserAccountSetting;
