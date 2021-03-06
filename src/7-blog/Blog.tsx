import React from 'react';
import s from './Blog.module.scss';
import cs from "../0-common/styles/textStyles.module.scss";
import rectangle_1 from "../0-common/pict/rectangle_1.png";
import rectangle_2 from "../0-common/pict/rectangle_2.png";
import rectangle_3 from "../0-common/pict/rectangle_3.png";
import Image from 'react-bootstrap/Image';
import {Button, Col, Container, Row} from "react-bootstrap";

export const Blog = () => {
    return (
        <Container fluid={'md'} className={s.blog}>
            <Row>
                <p className={cs.preliminaryText} style={{textAlign: 'center'}}>OUR RESOURCES</p>
                <h2 className={cs.mainText} style={{textAlign: 'center', paddingBottom: '50px'}}>Start reading our
                    blog</h2>
            </Row>
            <Row className={s.blogBlock}>
                <Col className={s.pictures}>
                    <Row>
                        <Col>
                            <Image
                                width={267.32}
                                height={267}
                                src={rectangle_1}
                            />
                        </Col>
                        <Col>
                            <Image
                                width={126.84}
                                height={126.58}
                                src={rectangle_2}
                            />
                            <Image
                                width={126.84}
                                height={126.58}
                                alt="171x180"
                                src={rectangle_3}
                            />
                        </Col>
                    </Row>
                </Col>

                <Col className={s.blogText}>
                    <section>
                        <h3 className={s.blogTopic}>How to start planning</h3>
                        <p className={cs.text}>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.
                            Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                            Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut
                            decore ...
                        </p>
                    </section>
                    <Button variant="primary">Read now</Button>
                    <Button variant="outline-primary" style={{border: "0px"}}>Add to your bookmarks</Button>
                </Col>
            </Row>
        </Container>
    )
}