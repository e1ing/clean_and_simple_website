import React from 'react';
import s from './Home.module.scss';
import cs from '../0-common/styles/textStyles.module.scss';
import {Col, Container, Row} from "react-bootstrap";

export const Home = () => {
    return (
        <Container fluid={'md'} className={s.home}>
            <Row>
                <Col >
                        <span className={cs.preliminaryText}>PLAN YOUR LIFE</span>
                    <section>
                        <h2 className={cs.mainText}>Increase your productivity</h2>
                        <p className={cs.text}>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
                            atqui laudem an, insolens gubergren similique est cu.
                            Et vel modus congue vituperata</p>
                    </section>
                   {/* <Image src={wave} className={s.img} />*/}
                </Col>

            </Row>

        </Container>
    )
}