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
                  href="https://www.instagram.com/gretaperl/"
                  className="me-2 fs-3"
                >
                  <AiOutlineInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/in/greta-perlmutter/"
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
                >
                  <AiOutlineMail />
                </a>
              </div>
            </Col>
          </Row>

          <h3>
            <u>About Me</u>
          </h3>
          <p>
            <b>Growing up in Phoenix, Arizona</b> I first caught the theatre bug
            when I was 3 years old. At my very first audition, a group of us
            toddlers were taken into the theater and each child was instructed
            to hold the microphone and introduce ourselves individually.
            Immediately, I started throwing a fit screaming “I want the
            microphone! I want it!” Mortified, my mom was told to please remove
            her child from the theater immediately. But, 2 years later I
            auditioned once more (with much greater success), and the rest is
            history.
          </p>

          <p>
            From then on, I was hooked and I've been singing, acting, and
            dancing ever since. I am a recent graduate from{" "}
            <a href="https://www.asu.edu/">
              <b>Arizona State University</b>
            </a>{" "}
            with a{" "}
            <a href="https://musicdancetheatre.asu.edu/">
              <b>Bachelor of Music in Music Theatre Performance</b>
            </a>
            .
          </p>

          <p>
            I am currently living my broadway dream working as the theatre
            coordinator at the{" "}
            <a href="https://www.thehudsonbroadway.com/">
              <b>The Hudson Broadway Theatre</b>
            </a>
            , a position that allows me to fulfil my passions of both theatre
            and administrative work.
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
