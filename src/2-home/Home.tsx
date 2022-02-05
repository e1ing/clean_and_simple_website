import React from 'react';
import s from './Home.module.scss';
import cs from '../0-common/styles/textStyles.module.scss';


export const Home = () => {
    return (
        <div className={s.home}>
            <p className={cs.preliminaryText}>PLAN YOUR LIFE</p>
            <h2 className={cs.mainText}>Increase your productivity</h2>
            <p className={cs.text}>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
                atqui laudem an, insolens gubergren similique est cu.
                Et vel modus congue vituperata</p>
        </div>
    )
}