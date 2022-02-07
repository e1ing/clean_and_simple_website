import React from 'react';
import {Header} from "../1-header/Header";
import s from './Footer.module.scss';
import cs from "../0-common/styles/textStyles.module.scss";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <Header/>
            <p className={cs.text} style={{ fontSize: '12px'}}>
                Copyright © 2018 by Random site
            </p>
        </div>
    )
}