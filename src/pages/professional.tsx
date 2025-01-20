import { Col, Container, Row } from "react-bootstrap";
import { LazyImage } from "../components/lazy-image";

export default function ProfessionalPage() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg="6" className="mb-5">
          <Row className="justify-content-center">
            <Col xs="auto">
              <div style={{ maxWidth: "420px" }}>
                <h1 className="mb-3 pb-0">Professional Experience</h1>

                <LazyImage
                  className="img-fluid"
                  width={2016}
                  height={2848}
                  src="/images/professional/Hudson_Group_Photo_2016_2111.jpeg"
                  alt="greta perlmutter hudson theater group photo"
                />

                <p className="mt-3">
                  Greta is currently working as the Theatre Coordinator at{" "}
                  <a href="https://www.thehudsonbroadway.com/">
                    The Hudson Theatre
                  </a>
                  , an{" "}
                  <a href="https://www.atg.co.uk/">Ambassador Theatre Group</a>{" "}
                  venue. She is a motivated broadway professional and is always
                  open to new opportunity should it present itself.
                </p>
              </div>
            </Col>
          </Row>
        </Col>

        <Col lg="6">
          <Row className="justify-content-center">
            <Col xs="auto">
              <h1 className="mb-3">Work Highlights</h1>

              <div className="mb-2">
                <h4>education</h4>
                <ul>
                  <li>
                    <a href="https://musicdancetheatre.asu.edu/">
                      <b>BM in Music Theatre Performance</b>
                    </a>{" "}
                    from Arizona State University
                    <ul>
                      <li>August 2017 - May 2021</li>
                      <li>
                        Final GPA: <b>4.0</b>
                      </li>
                      <li>Certificate in Music Entrepreneurship</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="mb-2">
                <h4>employment</h4>
                <ul>
                  <li>
                    Theatre Coordinator at{" "}
                    <a href="https://www.thehudsonbroadway.com/">
                      The Hudson Broadway Theatre
                    </a>
                  </li>
                  <ul>
                    <li>march 2023 - present</li>
                  </ul>

                  <li className="mt-3">
                    Personal Assistant/Intern at{" "}
                    <a href="https://www.jhamanagement.com/">
                      Josselyne Herman & Associates Management
                    </a>
                  </li>
                  <ul>
                    <li>aug 2022 - dec 2022</li>
                  </ul>

                  <li className="mt-3">
                    Administrative Assistant{" "}
                    <a href="https://universitycollege.asu.edu/academic-success/success-courses">
                      Arizona State University Success Courses
                    </a>
                  </li>
                  <ul>
                    <li>aug 2020 - aug 2022</li>
                  </ul>

                  <li className="mt-3">
                    Social Media Manager{" "}
                    <a href="https://storybookentertainmentaz.com/">
                      Storybook Entertainment
                    </a>
                  </li>
                  <ul>
                    <li>jan 2018 - aug 2021</li>
                  </ul>
                </ul>
              </div>

              <div>
                <h4>skills</h4>
                <ul>
                  <li>Microsoft Suite (Excel, Word, Powerpoint) and G-Suite</li>
                  <li>
                    Project and Data Management: Salesforce, Trello, AirTable
                  </li>
                  <li>
                    Marketing Software: Salesforce Marketing Cloud, MailChimp,
                    ConvertKit
                  </li>
                  <li>
                    Content Creation: Canva, Photoshop, Adobe Illustrator,
                    Premiere Pro, iMovie
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
