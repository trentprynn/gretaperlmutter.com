import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube } from 'react-icons/ai'
import { SlSocialSpotify } from 'react-icons/sl'

export default function Contact() {
    return (
        <Container>
            <Row>
                <Col lg="6" className="order-2 order-lg-1 mb-5">
                    <h3 className="text-center">Socials</h3>
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

                        <a href="https://www.youtube.com/channel/UCLK5niydFULmVhylnULgbeg" className="me-2 fs-3">
                            <AiOutlineYoutube />
                        </a>

                        <a href="https://www.youtube.com/channel/UCLK5niydFULmVhylnULgbeg" className="me-2 fs-4">
                            <SlSocialSpotify />
                        </a>
                    </div>
                </Col>

                <Col lg="6" className="order-1 order-lg-2 mb-5">
                    <div className="text-center">
                        <h3>The best way to contact me is via email</h3>
                        <a href="mailto:gretaperlmutter@gmail.com">
                            <p>gretaperlmutter@gmail.com</p>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
