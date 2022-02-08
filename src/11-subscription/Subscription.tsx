import React from 'react';
import s from './Subscription.module.scss'
import cs from "../0-common/styles/textStyles.module.scss";
import InputGroup from 'react-bootstrap/esm/InputGroup';
import {Button, Col, Container, FormControl, Row} from "react-bootstrap";


export const Subscription = () => {
    return (
        <Container fluid={'md'} className={s.subscription}>
            <Row>
                <Col>
                    <section>
                        <h3 className={cs.mainText} >
                            Sign up for newsletter
                        </h3>
                        <p className={cs.text} style={{width: '330px'}}>
                            Cu qui soleat partiendo urbanitas.
                            Eum aperiri indoctum eu, homero alterum.
                        </p>
                    </section>
                </Col>
                <Col>

                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Email address"
                            aria-label="Email address"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="primary" id="button-addon2">
                            Button
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}