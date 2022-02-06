import React from 'react';
import s from "./Testimonials.module.scss";
import cs from "../0-common/styles/textStyles.module.scss";
import Image from 'react-bootstrap/Image'
import avatar from "../0-common/pict/avatar.png"

export const Testimonials = () => {
    return (
        <div className={s.testimonials}>
            <div className={s.textBlock}>
                <p className={cs.preliminaryText}>TESTIMONIALS</p>
                <h2 className={cs.mainText}>Customers's quotes</h2>
                <p className={cs.text}>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
                    <br/>  Usu atqui laudem an.
                </p>

            </div>

            <div className={s.quote}>
                <p className={cs.text}>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.
                   Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                </p>
                <Image src={avatar} className="float-md-none"/>
            </div>
        </div>
    )
}