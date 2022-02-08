import React from 'react';
import cs from "../0-common/styles/textStyles.module.scss";
import s from "./Features.module.scss";
import f_save from "../0-common/pict/f_save.png"
import f_chat from "../0-common/pict/f_chat.png"
import f_folder from "../0-common/pict/f_folder.png"
import f_house from "../0-common/pict/f_house.png"
import Card from 'react-bootstrap/esm/Card';
import CardGroup from 'react-bootstrap/esm/CardGroup';
import {Button, Col, Container, Row} from "react-bootstrap";

export const Features = () => {
    return (
        <Container fluid={'md'} className={s.features}>
            <Row>
                <p className={cs.preliminaryText} style={{textAlign: 'center'}}>ABOUT US</p>
                <h2 className={cs.mainText} style={{textAlign: 'center'}}>Read about our app</h2>
            </Row>
            <Row>
                <CardGroup>
                    <Card style={{width: '18rem', textAlign: 'center', border: '0px'}}>
                        <div className={s.feature}>
                            <Card.Img variant="top" src={f_house} style={{width: "20px"}}/>
                        </div>
                        <Card.Body>
                            <Card.Title className={s.title}>Overview</Card.Title>
                            <Card.Text className={s.text}>
                                Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{width: '18rem', textAlign: 'center', border: '0px'}}>
                        <div className={s.feature}>
                            <Card.Img variant="top" src={f_folder} style={{width: "20px"}}/>
                        </div>
                        <Card.Body>
                            <Card.Title className={s.title}>Files</Card.Title>
                            <Card.Text className={s.text}>
                                No vim nulla vitae intellegat. Ei enim error ius, solet atomorum conceptam ex has.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem', textAlign: 'center', border: '0px'}}>
                        <div className={s.feature}>
                            <Card.Img variant="top" src={f_chat} style={{width: "20px"}}/>
                        </div>
                        <Card.Body>
                            <Card.Title className={s.title}>Meeting chats</Card.Title>
                            <Card.Text className={s.text}>
                                Vim ne tacimates neglegentur. Erat diceret omittam at est.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem', textAlign: 'center', border: '0px'}}>
                        <div className={s.feature}>
                            <Card.Img variant="top" src={f_save} style={{width: "20px"}}/>
                        </div>
                        <Card.Body>
                            <Card.Title className={s.title}>Save events</Card.Title>
                            <Card.Text className={s.text}>
                                Nisl idque mel ea, nominati voluptatum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Row>

            <Row>
                <Col>
                    <Button variant="primary">Read more</Button>
                </Col>
                <Col>
                    <p className={cs.preliminaryText} style={{margin: "20px", textAlign: 'center', color: '#ADB3CB'}}>
                        - OR -
                    </p>
                </Col>
                <Col>
                    <Button variant="danger">Get started</Button>
                </Col>
            </Row>
        </Container>
    )
}