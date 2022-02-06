import React from 'react';
import s from "./Pricing.module.scss";
import cs from "../0-common/styles/textStyles.module.scss";

export const Pricing = () => {
    return (
        <div className={s.pricing}>
            <p className={cs.preliminaryText}>PLAN YOUR LIFE</p>
            <h2 className={cs.mainText}>Get started now</h2>
            <p className={cs.text}>
                Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
                Usu atqui laudem an, insolens gubergren similique est cu.
                Et vel modus congue vituperata.
            </p>
        </div>

    )
}
