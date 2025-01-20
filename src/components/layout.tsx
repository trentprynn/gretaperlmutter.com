import { Col, Container, Row } from "react-bootstrap";
import { FaCircle } from "react-icons/fa";
import { NavLink, Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <Container fluid style={{ minHeight: "100vh" }}>
        <Container
          style={{ height: "65px", paddingTop: "10px", paddingBottom: "15px" }}
          className="border-bottom"
        >
          <Row className="justify-content-between">
            <Col xs="auto">
              <div style={{ height: "40px", width: "40px" }}>
                <NavLink to="/">
                  <img
                    className="img-fluid"
                    loading="lazy"
                    height={512}
                    width={512}
                    src="/logo_circle_512_512.png"
                    alt="greta perlmutter logo"
                  />
                </NavLink>
              </div>
            </Col>

            <Col xs="auto">
              <Row>
                <Col xs="auto">
                  <NavLink to="/">
                    {({ isActive }) => (
                      <div>
                        <small>home</small>

                        {isActive && (
                          <Row className="justify-content-center">
                            <Col xs="auto">
                              <FaCircle />
                            </Col>
                          </Row>
                        )}
                      </div>
                    )}
                  </NavLink>
                </Col>

                <Col xs="auto">
                  <NavLink to="/professional">
                    {({ isActive }) => (
                      <div>
                        <small>professional</small>

                        {isActive && (
                          <Row className="justify-content-center">
                            <Col xs="auto">
                              <FaCircle />
                            </Col>
                          </Row>
                        )}
                      </div>
                    )}
                  </NavLink>
                </Col>

                <Col xs="auto">
                  <NavLink to="/performance">
                    {({ isActive }) => (
                      <div>
                        <small>performance</small>

                        {isActive && (
                          <Row className="justify-content-center">
                            <Col xs="auto">
                              <FaCircle />
                            </Col>
                          </Row>
                        )}
                      </div>
                    )}
                  </NavLink>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <div style={{ minHeight: "calc( 100vh - 65px)" }} className="pt-5 pb-5">
          <Outlet />
        </div>
      </Container>
    </>
  );
}
