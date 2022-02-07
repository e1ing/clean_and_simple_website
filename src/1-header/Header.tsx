import React from 'react';
import s from './Header.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {Button, Col, Container, Nav, Row} from "react-bootstrap";

export const Header = () => {
    return (
        <Container className={s.containerBlock} fluid={'md'}>
            <Row>
                <Col>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>Features</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled> Pricing </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled> Documentation </Nav.Link>
                </Nav.Item>
            </Nav>

                </Col>
                <Col className={s.iconsBlock}>

                <span className={s.iconStyle}> <FontAwesomeIcon icon={faFacebookF}/></span>
                <span className={s.iconStyle}><FontAwesomeIcon icon={faPaperPlane}/></span>
                <span className={s.iconStyle}> <FontAwesomeIcon icon={faTwitter}/></span>
                <Button variant="primary">Get started</Button>{' '}

                </Col>
            </Row>
        </Container>

    )
}