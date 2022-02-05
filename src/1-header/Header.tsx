import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import s from './Header.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {CustomButton} from "../0-common/components/CustomButton";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faTwitter} from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.menuLinks}>
                <span className={s.iconStyle}> <FontAwesomeIcon icon={["fas", "hand-spock"]}/></span>
                <Button className={s.buttonStyle} variant="link">Home</Button>
                <Button className={s.buttonStyle} variant="link">Blog</Button>
                <Button className={s.buttonStyle} variant="link">Features</Button>
                <Button className={s.buttonStyle} variant="link">Pricing</Button>
                <Button className={s.buttonStyle} variant="link">Documentation</Button>
            </div>
            <div className={s.iconsBlock}>
                <span className={s.iconStyle}> <FontAwesomeIcon icon={faFacebookF}/></span>
                <span className={s.iconStyle}><FontAwesomeIcon icon={faPaperPlane}/></span>
                <span className={s.iconStyle}> <FontAwesomeIcon icon={faTwitter}/></span>
                <CustomButton>Get started</CustomButton>
            </div>
        </div>
    )
}