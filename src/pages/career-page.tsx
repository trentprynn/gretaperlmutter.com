import { Col, Container, Row } from "react-bootstrap";
import { LazyImage } from "../components/lazy-image";

export function CareerPage() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg="6">
          <Row className="justify-content-center">
            <Col xs="auto">
              <div style={{ maxWidth: "420px" }}>
                <LazyImage
                  className="img-fluid"
                  width={2016}
                  height={2848}
                  src="/images/professional/Hudson_Group_Photo_2016_2111.jpeg"
                  alt="greta perlmutter hudson theatre group photo"
                />

                <p className="mt-3">
                  I'm currently working as the Academic Operations Coordinator
                  at{" "}
                  <a href="https://www.juilliard.edu">The Juilliard School</a>,
                  within the{" "}
                  <a href="https://www.juilliard.edu/stage-beyond/juilliard-extension">
                    Juilliard Extension
                  </a>{" "}
                  program.
                </p>
              </div>
            </Col>
          </Row>
        </Col>

        <Col lg="6">
          <Row className="justify-content-center">
            <Col xs="auto">
              <div>
                <h4>Employment</h4>
                <ul>
                  <li>
                    Academic Operations Coordinator at{" "}
                    <a href="https://www.juilliard.edu">The Juilliard School</a>
                    <ul>
                      <li>January 2025 - Present</li>
                    </ul>
                  </li>

                  <li className="mt-2">
                    Theatre Coordinator at{" "}
                    <a href="https://www.thehudsonbroadway.com">
                      The Hudson Broadway Theatre
                    </a>
                    <ul>
                      <li>March 2023 - December 2024</li>
                    </ul>
                  </li>

                  <li className="mt-2">
                    Personal Assistant/Intern at{" "}
                    <a href="https://www.jhamanagement.com/">
                      Josselyne Herman & Associates Management
                    </a>
                    <ul>
                      <li>August 2022 - December 2022</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Administrative Assistant{" "}
                    <a href="https://universitycollege.asu.edu/academic-success/success-courses">
                      Arizona State University Success Courses
                    </a>
                    <ul>
                      <li>August 2020 - August 2021</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <h4>Education</h4>
                <ul>
                  <li>
                    <a href="https://musicdancetheatre.asu.edu/">
                      <b>Bachelor of Music</b>
                    </a>{" "}
                    from Arizona State University
                    <ul>
                      <li>August 2017 - May 2021</li>
                      <li>Final GPA: 4.0</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <h4>Skills</h4>
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
