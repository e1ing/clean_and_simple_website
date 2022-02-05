import React from 'react';
import s from "./Statistics.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons/faUsers";
import {faTachometerAlt} from "@fortawesome/free-solid-svg-icons/faTachometerAlt";

export const Statistics = () => {
    return (
        <div className={s.statistics}>
            <div className={s.customers}>
                <FontAwesomeIcon icon={faTachometerAlt}/>
                <p className={s.counter}>89%</p>
                <p className={s.description}>Customers who have increased their productivity</p>
            </div>
            <div className={s.users}>
                <FontAwesomeIcon icon={faUsers}/>
                <p className={s.counter}>3123</p>
                <p className={s.description}>Users who have used our application</p>
            </div>
        </div>
    )
}