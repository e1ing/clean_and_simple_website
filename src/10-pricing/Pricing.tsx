import React from 'react';
import s from "./Pricing.module.scss";
import cs from "../0-common/styles/textStyles.module.scss";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons/faPlay";

export const Pricing = () => {
    return (
        <div className={s.pricing}>
            <p className={cs.preliminaryText} style={{color: '#FFFFFF'}}>PLAN YOUR LIFE</p>
            <h2 className={cs.mainText} style={{color: '#FFFFFF'}}>Get started now</h2>
            <p className={cs.text} style={{color: '#FFFFFF', width: '712px', textAlign: 'center'}}>
                Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
                Usu atqui laudem an, insolens gubergren similique est cu.
                Et vel modus congue vituperata.
            </p>

            <div>
                <Button variant='light' style={{color: '#0d6efd'}}>
                    View pricing
                </Button>
                <Button variant="outline-primary" style={{color: '#FFFFFF', borderColor: '#FFFFFF'}}>
                    Read documentation
                </Button>{' '}
            </div>
        </div>

    )
}
