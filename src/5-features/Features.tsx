import React from 'react';
import cs from "../0-common/styles/textStyles.module.scss";
import s from "./Features.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faFolderOpen} from "@fortawesome/free-regular-svg-icons/faFolderOpen";
import {faCommentAlt} from "@fortawesome/free-regular-svg-icons/faCommentAlt";
import {faUpload} from "@fortawesome/free-solid-svg-icons/faUpload";

export const Features = () => {
    return (
        <div className={s.features}>
            <div>
                <p className={cs.preliminaryText}>ABOUT US</p>
                <h2 className={cs.mainText}>Read about our app</h2>
            </div>
            <div className={s.featuresBlock}>
                <div className={s.feature}> <FontAwesomeIcon icon={faHome}/></div>
                <div className={s.feature}> <FontAwesomeIcon icon={faFolderOpen}/></div>
                <div className={s.feature}> <FontAwesomeIcon icon={faCommentAlt}/></div>
                <div className={s.feature}> <FontAwesomeIcon icon={faUpload}/></div>
            </div>
            <div className={s.buttonBlock}>
                <button className={s.readMoreBtn}>Read more</button>
               <p className={cs.preliminaryText}> - OR -</p>
                <button className={s.getStartedBtn}>Get started</button>
            </div>
        </div>
    )
}