import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube } from 'react-icons/ai'

export default function Root() {
    return (
        <Container>
            <Row>
                <Col lg="6" className="order-2 order-lg-1">
                    <Row className="justify-content-center mb-4">
                        <Col xs="auto">
                            <h1 className="mb-0 pb-0">Greta Perlmutter</h1>

                            <p className="text-center mb-0 pb-0">
                                <a href="mailto:gretaperlmutter@gmail.com">gretaperlmutter@gmail.com</a>
                            </p>

                            <div className="text-center">
                                <a href="https://www.instagram.com/gretaperl/" className="me-2 fs-3">
                                    <AiOutlineInstagram />
                                </a>

                                <a href="https://www.facebook.com/greta.perlmutter.7" className="me-2 fs-3">
                                    <AiOutlineFacebook />
                                </a>

                                <a href="https://www.linkedin.com/in/greta-perlmutter/" className="me-2 fs-3">
                                    <AiOutlineLinkedin />
                                </a>

                                <a
                                    href="https://www.youtube.com/channel/UCLK5niydFULmVhylnULgbeg"
                                    className="me-2 fs-3"
                                >
                                    <AiOutlineYoutube />
                                </a>
                            </div>
                        </Col>
                    </Row>

                    <h3>
                        <u>About Me</u>
                    </h3>
                    <p>
                        <b>Growing up in Phoenix, Arizona</b> I first caught the theatre bug when I was 3 years old. At
                        my very first audition, a group of us toddlers were taken into the theater and each child was
                        instructed to hold the microphone and introduce ourselves individually. Immediately, I started
                        throwing a fit screaming “I want the microphone! I want it!” Mortified, my mom was told to
                        please remove her child from the theater immediately. But, 2 years later I auditioned once more
                        (with much greater success), and the rest is history.
                    </p>

                    <p>
                        From then on, I was hooked and I've been singing, acting, and dancing ever since. I am a recent
                        graduate from{' '}
                        <a href="https://www.asu.edu/">
                            <b>Arizona State University</b>
                        </a>{' '}
                        with a{' '}
                        <a href="https://musicdancetheatre.asu.edu/">
                            <b>Bachelor of Music in Music Theatre Performance</b>
                        </a>
                        .
                    </p>

                    <p>
                        After graduating in the midst of the industry shut-down, I was able to take a strong look at
                        what I want my future in the entertainment world to look like. My senior year, while going
                        through talent agency interviews post-showcase, I began to ask more questions to agents about
                        their journey of working in the industry, what it's like to represent clients, and how do I get
                        to do that? That's when I knew I really have a passion for building fellow actors up to reach
                        their goals and dreams in their career.
                    </p>
                </Col>
                <Col lg="6" className="order-1 order-lg-2">
                    <Row className="justify-content-center">
                        <Col xs="auto">
                            <div style={{ maxWidth: '400px' }}>
                                <Image
                                    className="img-fluid"
                                    loading="lazy"
                                    width={1024}
                                    height={1536}
                                    src="/images/headshots/headshot_1_1024_1536.jpg"
                                    alt="greta perlmutter headshot"
                                ></Image>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
