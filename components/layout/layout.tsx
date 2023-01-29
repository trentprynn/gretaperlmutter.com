import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCircle } from 'react-icons/fa'

export default function Layout({ children, title = 'Greta Perlmutter' }: { children: any; title?: string }) {
    const router = useRouter()

    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
            </Head>

            <Container fluid style={{ minHeight: '100vh' }}>
                <Container
                    style={{ height: '65px', paddingTop: '10px', paddingBottom: '15px' }}
                    className="border-bottom"
                >
                    <Row className="justify-content-between">
                        <Col xs="auto">
                            <div style={{ height: '40px', width: '40px' }}>
                                <Link href="/" passHref>
                                    <Image
                                        className="img-fluid"
                                        loading="lazy"
                                        height={512}
                                        width={512}
                                        src="/logo_circle_512_512.png"
                                        alt="greta perlmutter logo"
                                    ></Image>
                                </Link>
                            </div>
                        </Col>

                        <Col xs="auto">
                            <Row>
                                <Col xs="auto">
                                    <Link href="/" passHref>
                                        <small>home</small>
                                    </Link>

                                    {router.pathname === '/' && (
                                        <Row className="justify-content-center">
                                            <Col xs="auto">
                                                <FaCircle />
                                            </Col>
                                        </Row>
                                    )}
                                </Col>

                                <Col xs="auto">
                                    <Link href="/professional" passHref>
                                        <small>professional</small>
                                    </Link>

                                    {router.pathname === '/professional' && (
                                        <Row className="justify-content-center">
                                            <Col xs="auto">
                                                <FaCircle />
                                            </Col>
                                        </Row>
                                    )}
                                </Col>

                                <Col xs="auto">
                                    <Link href="/performance" passHref>
                                        <small>performance</small>
                                    </Link>

                                    {router.pathname === '/performance' && (
                                        <Row className="justify-content-center">
                                            <Col xs="auto">
                                                <FaCircle />
                                            </Col>
                                        </Row>
                                    )}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                <div style={{ minHeight: 'calc( 100vh - 65px)' }} className="pt-5 pb-5">
                    {children}
                </div>
            </Container>
        </React.Fragment>
    )
}
