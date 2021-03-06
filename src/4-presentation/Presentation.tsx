import React from 'react';
import s from './Presentation.module.scss';
import crossApp from "../0-common/pict/crossApp.png";
import cs from "../0-common/styles/textStyles.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons/faPlay";
import {Button, Col, Container, Row} from "react-bootstrap";
import Image from 'react-bootstrap/Image';

export const Presentation = () => {
    return (

        <Container fluid={'md'} className={s.presentation}>
            <Row className="justify-content-md-center"  >
                <Col className={s.textBlock } lg={true}>
                    <Row xs="auto">
                        <p className={cs.preliminaryText}>DESKTOP AND MOBILE APP</p>
                        <h2 className={cs.mainText}>Plan and manage</h2>
                        <p className={cs.text}>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
                            Usu atqui laudem an, insolens gubergren similique est cu.
                            Et vel modus congue vituperata. Solum patrioque no sea.
                            Mea ex malis mollis oporteat. Eum an expetenda consequat.</p>
                    </Row>
                    <Row >
                        <Col >
                            <Button style={{minWidth: '150px'}}>
                                View video
                                <span > <FontAwesomeIcon icon={faPlay}/></span>
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="outline-primary">
                                See features
                            </Button>{' '}
                        </Col>
                    </Row>
                </Col>

                <Col>
                    <Image src={crossApp} className={s.img}/>
                </Col>
            </Row>
        </Container>
    )
}