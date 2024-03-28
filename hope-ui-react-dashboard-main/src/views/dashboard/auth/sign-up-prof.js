import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Col, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import bg from "../../../assets/images/auth/30.png";
//import "../../../css/theme.min.css";

const SignInFormProf = () => {
  return (
    <Row className="vh-100 g-0">
      <Col lg={6} className="position-relative d-none d-lg-block">
        <div
          className="bg-holder"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        />
      </Col>
      <Col lg={6}>
        <Row className="flex-center h-100 g-0 px-4 px-sm-0">
          <Col sm={6} lg={7} xl={6}>
            <>
              <div className="text-center mb-7">
                <h3 className="text-body-highlight">Se connecter</h3>
                <p className="text-body-tertiary">Acceder à mon compte ENSAC</p>
              </div>

              <div className="position-relative">
                <hr className="bg-body-secondary mt-5 mb-4" />
                <div className="divider-content-center">
                  Entrer mes informations{" "}
                </div>
              </div>
              <Form.Group className="mb-3 text-start">
                <Form.Label htmlFor="email">Email address</Form.Label>
                <div className="form-icon-container">
                  <Form.Control
                    id="email"
                    type="email"
                    className="form-icon-input"
                    placeholder="name@example.com"
                  />
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-body fs-9 form-icon"
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-3 text-start">
                <Form.Label htmlFor="password">Password</Form.Label>
                <div className="form-icon-container">
                  <Form.Control
                    id="password"
                    type="password"
                    className="form-icon-input"
                    placeholder="Password"
                  />
                  <FontAwesomeIcon
                    icon={faKey}
                    className="text-body fs-9 form-icon"
                  />
                </div>
              </Form.Group>
              <Row className="flex-between-center mb-7">
                <Col xs="auto">
                  <Link to={`#`} className="fs-9 fw-semibold">
                    Mot de passe oublié ?
                  </Link>
                </Col>
              </Row>
              <Button variant="primary" className="w-100 mb-3">
                Se connecter
              </Button>
              <div className="text-center">
                <Link to={`#`} className="fs-9 fw-bold">
                  Créer un compte
                </Link>
              </div>
            </>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SignInFormProf;
