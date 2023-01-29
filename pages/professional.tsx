import { Col, Container, Row } from 'react-bootstrap'

export default function Professional() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col lg="6" className="mb-5">
                    <Row className="justify-content-center">
                        <Col xs="auto">
                            <div style={{ maxWidth: '420px' }}>
                                <h1 className="mb-0 pb-0">Professional Experience</h1>
                                <p className="fs-5">
                                    <a href="/files/Greta_Perlmutter_Professional_Resume.pdf">
                                        <b>Resume</b>
                                    </a>
                                </p>

                                <p className="mt-5">
                                    As a recent graduate, Greta is actively seeking work in the entertainment industry
                                    as an assistant to talent managers and agencies to help actors achieve their dreams!
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col lg="6">
                    <Row className="justify-content-center">
                        <Col xs="auto">
                            <h1 className="mb-5">Work Highlights</h1>

                            <div className="mb-5">
                                <h4>education</h4>
                                <ul>
                                    <li>
                                        <a href="https://musicdancetheatre.asu.edu/">
                                            <b>BM in Music Theatre Performance</b>
                                        </a>{' '}
                                        from Arizona State University
                                        <ul>
                                            <li>August 2017 - May 2021</li>
                                            <li>
                                                Final GPA: <b>4.06</b>
                                            </li>
                                            <li>Certificate in Music Entrepreneurship</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-5">
                                <h4>employment</h4>
                                <ul>
                                    <li>
                                        Personal Assistant/Intern at{' '}
                                        <a href="https://www.jhamanagement.com/">
                                            Josselyne Herman & Associates Management
                                        </a>
                                    </li>
                                    <ul>
                                        <li>aug 2022 - dec 2022</li>
                                    </ul>

                                    <li className="mt-3">
                                        Administrative Assistant{' '}
                                        <a href="https://universitycollege.asu.edu/academic-success/success-courses">
                                            Arizona State University Success Courses
                                        </a>
                                    </li>
                                    <ul>
                                        <li>aug 2020 - aug 2022</li>
                                    </ul>

                                    <li className="mt-3">
                                        Social Media Manager{' '}
                                        <a href="https://storybookentertainmentaz.com/">Storybook Entertainment</a>
                                    </li>
                                    <ul>
                                        <li>jan 2018 - aug 2021</li>
                                    </ul>
                                </ul>
                            </div>

                            <div>
                                <h4>skills</h4>
                                <ul>
                                    <li>Proficient in Casting Services: Breakdown Express, EcoCast</li>
                                    <li>Proficient in Email Marketing Platforms: Salesforce, MailChimp, ConvertKit</li>
                                    <li>Video Editing and Content Creation: Premiere Pro, iMovie, Canva, Photoshop</li>
                                    <li>Proficient in Microsoft Suite and G-Suite</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
