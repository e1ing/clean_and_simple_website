import React from 'react';
import {Header} from "../1-header/Header";
import s from './Footer.module.scss';
import cs from "../0-common/styles/textStyles.module.scss";
import {Container, Row} from "react-bootstrap";

export const Footer = () => {
    return (
        <Container fluid={'md'} className={s.footer}>
            <Row>
                <Header/>
            </Row>
            <Row>
                <span className={cs.text} style={{fontSize: '12px'}}>
                    Copyright © 2018 by Random site
                </span>
            </Row>
        </Container>
    )
}