import React from 'react';
import s from "./FAQ.module.scss";
import cs from "../0-common/styles/textStyles.module.scss";
import {Accordion, Container, Row} from "react-bootstrap";

export const FAQ = () => {
    return (
        <Container fluid={'md'} className={s.faq}>
            <Row>
                <p className={cs.preliminaryText} style={{textAlign: "center"}}>CUSTOMER HELP</p>
                <h2 className={cs.mainText} style={{textAlign: "center",  paddingBottom: "50px"}}>Frequently asked questions</h2>
            </Row>

            <Row>
                <Accordion defaultActiveKey={['2']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Reque insolens in vel?</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Vis rebum error graecis ea, id sit postea accusamus?</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Lorem repudiandae ne nec?</Accordion.Header>
                        <Accordion.Body>
                            Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero
                            tractatos ius an, in mel diceret persecuti.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Ad dicit numquam vel. Et eos iudico feugait percipitur?</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Sea no dico percipitur. Fierent constituam definitiones id
                            eum?</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </Container>
    )
}

