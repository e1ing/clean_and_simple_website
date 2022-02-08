import React from 'react';
import s from "./Statistics.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons/faUsers";
import {faTachometerAlt} from "@fortawesome/free-solid-svg-icons/faTachometerAlt";
import {Col, Container, Row} from "react-bootstrap";

export const Statistics = () => {
    return (
        <Container fluid={'md'} className={s.statistics}>
            <Row>
            <Col className={s.customers}>
                <FontAwesomeIcon icon={faTachometerAlt}/>
                <div className={s.counter}>89%</div>
                <span className={s.description}>Customers who have increased their productivity</span>
            </Col>
            <Col className={s.users}>
                <FontAwesomeIcon icon={faUsers}/>
                <div className={s.counter}>3123</div>
                <span className={s.description}>Users who have used our application</span>
            </Col>
            </Row>
        </Container>
    )
}