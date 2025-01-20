import { Carousel, Col, Container, Row } from "react-bootstrap";
import { SlSocialSpotify } from "react-icons/sl";
import { YoutubeEmbed } from "../components/youtube-embed";
import { LazyImage } from "../components/lazy-image";

export function PerformancePage() {
  return (
    <Container>
      <Row className="justify-content-center" style={{ marginBottom: "80px" }}>
        <Col lg="6">
          <Row className="justify-content-center">
            <Col xs="auto">
              <div style={{ maxWidth: "420px" }}>
                <h1 className="mb-0 pb-0">Performance Highlights</h1>
                <p className="fs-5">
                  <a href="/files/Greta_Perlmutter_Performance_Resume.pdf">
                    <b>Resume</b>
                  </a>
                </p>

                <p className="mt-5">
                  Greta is a dependable and motivated actress based in NYC. She
                  has the spunk and silliness of a character actress as well as
                  the heart of a powerfully grounded performer.
                </p>
              </div>
            </Col>
          </Row>
        </Col>

        <Col lg="6">
          <Row className="justify-content-center">
            <Col xs="auto">
              <div style={{ maxWidth: "350px", height: "500px" }}>
                <Carousel>
                  <Carousel.Item interval={3000}>
                    <LazyImage
                      className="img-fluid"
                      width={1024}
                      height={1530}
                      src="/images/headshots/headshot_2_1024_1530.jpg"
                      alt="greta headshot two"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <LazyImage
                      className="img-fluid"
                      width={1024}
                      height={1530}
                      src="/images/headshots/headshot_3_1024_1530.jpg"
                      alt="greta headshot three"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <LazyImage
                      className="img-fluid"
                      width={1024}
                      height={1530}
                      src="/images/headshots/headshot_4_1024_1530.jpg"
                      alt="greta headshot four"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <LazyImage
                      className="img-fluid"
                      width={1024}
                      height={1530}
                      src="/images/headshots/headshot_5_1024_1530.jpg"
                      alt="greta headshot five"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mb-5">
        <h1 className="text-center d-block d-lg-none">Skin</h1>

        <Col lg="6" className="order-2 order-lg-1">
          <h1 className="text-center d-none d-lg-block">Skin</h1>
          <p>
            <b>musical:</b> <a href="https://www.selkiemusical.com/">Selkie</a>
          </p>
          <p>
            <b>written by:</b> Sam Sultan and Molly Horan
          </p>
          <p>
            <b>date:</b> oct 2023
          </p>

          <p>
            <i>
              Performed live at{" "}
              <a href="https://www.thegreenroom42.venuetix.com/">
                The Green Room 42
              </a>{" "}
              on Nov 5, 2023
            </i>
          </p>
        </Col>

        <Col lg="6" className="order-1 order-lg-2">
          <YoutubeEmbed embedId="fZ4b1c1yTDw" />
        </Col>
      </Row>

      <Row className="mb-5">
        <h1 className="text-center d-block d-lg-none">Spitfire Grill</h1>

        <Col lg="6" className="order-2 order-lg-1">
          <h1 className="text-center d-none d-lg-block">Spitfire Grill</h1>
          <p>
            <b>theatre:</b>{" "}
            <a href="https://azbroadway.org/">Arizona Broadway Theatre</a>
          </p>
          <p>
            <b>dates:</b> aug 2021 - sep 2021
          </p>
          <p>
            <b>role:</b> Percy Talbot
          </p>

          <p>
            <q cite="https://www.talkinbroadway.com/page/regional/phoenix/phnx880.html">
              As Percy, Greta Perlmutter makes her ABT debut in a stellar
              performance that radiates truth and resilience
            </q>{" "}
            - <b>Gil Benbrook, Talkin' Broadway</b>
          </p>
        </Col>

        <Col lg="6" className="order-1 order-lg-2">
          <YoutubeEmbed embedId="n46M_DKs2Zg" />
        </Col>
      </Row>

      <Row className="mb-5">
        <h1 className="text-center d-block d-lg-none">School House Rock</h1>
        <Col lg="6" className="order-2 order-lg-1">
          <h1 className="text-center d-none d-lg-block">School House Rock</h1>
          <p>
            <b>theatre:</b>{" "}
            <a href="https://www.childsplayaz.org/">
              Childsplay AZ National Tour
            </a>
          </p>
          <p>
            <b>dates:</b> sep 21 - nov 21
          </p>
          <p>
            <b>role:</b> Dina / Dance Captain
          </p>
        </Col>
        <Col lg="6" className="order-1 order-lg-2">
          <LazyImage
            className="img-fluid"
            width={1024}
            height={683}
            src="/images/acting/school_house_rock/school_house_rock_1_1024_683.jpeg"
            alt="greta perlmutter school house rock sample image one"
          />
        </Col>
      </Row>

      <Row>
        <h1 className="text-center d-block d-lg-none">Anxiety Project</h1>
        <Col lg="6" className="order-2 order-lg-1">
          <h1 className="text-center d-none d-lg-block">Anxiety Project</h1>
          <p>
            <b>theatre:</b>{" "}
            <a href="https://phoenixtheatre.com/">
              The Phoenix Theatre Company
            </a>
          </p>
          <p>
            <b>dates:</b> jan 20
          </p>
          <p>
            <b>role:</b> Laura / Molly / Alicia
          </p>

          <p>
            <a
              href="https://open.spotify.com/album/3L9HgRQmiEtzF0exblLAoo?si=ARQ0pg4HSwayR9mgf7f-Zg"
              className="text-decoration-none"
            >
              <SlSocialSpotify />{" "}
              <b className="ms-1">Listen to Original Cast Recording Album</b>
            </a>
            <ul>
              <li>track seven - Three Days Without Breathing</li>
              <li>track fourteen - Dodging Bullets</li>
              <li>track fifteen - Home Enough to Me</li>
            </ul>
          </p>
        </Col>
        <Col lg="6" className="order-1 order-lg-2">
          <LazyImage
            className="img-fluid"
            width={700}
            height={467}
            src="/images/acting/anxiety_project/anxiety_project_1_700_467.jpg"
            alt="greta perlmutter anxiety project sample image one"
          />
        </Col>
      </Row>
    </Container>
  );
}
