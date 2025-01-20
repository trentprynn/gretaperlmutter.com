import { Col, Container, Row } from "react-bootstrap";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineYoutube,
} from "react-icons/ai";
import { LazyImage } from "../components/lazy-image";

export function HomePage() {
  return (
    <Container>
      <Row>
        <Col lg="6" className="order-2 order-lg-1">
          <Row className="justify-content-center mb-4">
            <Col xs="auto">
              <h1 className="mb-0 pb-0">Greta Perlmutter</h1>

              <p className="fs-6 text-center mb-0 pb-0">
                <a href="/files/Greta_Perlmutter_Resume.pdf">
                  <b>Resume</b>
                </a>
              </p>

              <div className="text-center">
                <a
                  href="https://www.instagram.com/gretaperl"
                  className="me-2 fs-3"
                >
                  <AiOutlineInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/in/greta-perlmutter"
                  className="me-2 fs-3"
                >
                  <AiOutlineLinkedin />
                </a>

                <a
                  href="https://www.youtube.com/channel/UCLK5niydFULmVhylnULgbeg"
                  className="me-2 fs-3"
                >
                  <AiOutlineYoutube />
                </a>

                <a
                  href="mailto:gretaperlmutter@gmail.com"
                  className="me-2 fs-3"
                  target="_blank"
                >
                  <AiOutlineMail />
                </a>
              </div>
            </Col>
          </Row>

          <h4>
            <u>About Me</u>
          </h4>
          <p>
            I grew up in Phoenix, Arizona where I discovered my passion for
            music theatre at a young age. Singing, acting, and dancing quickly
            became a central part of my life and have driven me since.
          </p>

          <p>
            I am a graduate from{" "}
            <a href="https://www.asu.edu/">
              <b>Arizona State University</b>
            </a>{" "}
            with a{" "}
            <a href="https://musicdancetheatre.asu.edu">
              <b>Bachelor of Music in Music Theatre Performance</b>
            </a>
            .
          </p>

          <p>
            Currently I'm living my dream working as the Academic Operations
            Coordinator at the{" "}
            <a href="https://www.juilliard.edu">
              <b>The Juilliard School</b>
            </a>{" "}
            in New York City, a position that allows me to combine my passions
            for both theatre and arts administration.
          </p>
        </Col>

        <Col lg="6" className="order-1 order-lg-2">
          <Row className="justify-content-center">
            <Col xs="auto">
              <div style={{ maxWidth: "400px" }}>
                <LazyImage
                  className="img-fluid"
                  width={1024}
                  height={1536}
                  src="/images/headshots/headshot_1_1024_1530.jpg"
                  alt="greta perlmutter headshot"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
