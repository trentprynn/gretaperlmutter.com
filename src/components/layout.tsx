import { Col, Container, Row } from "react-bootstrap";
import { FaCircle } from "react-icons/fa";
import { NavLink, Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <Container>
        <Container
          style={{
            height: "65px",
            paddingTop: "10px",
            paddingBottom: "15px",
            position: "sticky",
            top: "0px",
            background: "white",
            zIndex: 1,
          }}
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
                  <NavItem href="/" text="home" />
                </Col>

                <Col xs="auto">
                  <NavItem href="/career" text="career" />
                </Col>

                <Col xs="auto">
                  <NavItem href="/performance" text="performance" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <div className="my-5">
          <Outlet />
        </div>
      </Container>
    </>
  );
}

function NavItem({ href, text }: { href: string; text: string }) {
  return (
    <NavLink to={href}>
      {({ isActive }) => (
        <div>
          <small>{text}</small>

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
  );
}
