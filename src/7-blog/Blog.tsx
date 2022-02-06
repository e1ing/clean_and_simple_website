import React from 'react';
import s from './Blog.module.scss';
import cs from "../0-common/styles/textStyles.module.scss";
import {CustomButton} from "../0-common/components/CustomButton";
import rectangle_1 from "../0-common/pict/rectangle_1.png";
import rectangle_2 from "../0-common/pict/rectangle_2.png";
import rectangle_3 from "../0-common/pict/rectangle_3.png";
import Image from 'react-bootstrap/Image'

export const Blog = () => {
    return (
        <div className={s.blog}>
            <div className={s.text}>
                <p className={cs.preliminaryText}>OUR RESOURCES</p>
                <h2 className={cs.mainText}>Start reading our blog</h2>
            </div>
            <div className={s.blogBlock}>
                    <div className={s.pictures}>
                        <Image
                            width={267.32}
                            height={267}
                            src={rectangle_1}
                            />
                        <Image
                            width={126.84}
                            height={126.58}
                            src={rectangle_2}
                        />
                        <Image
                            width={126.84}
                            height={126.58}
                            alt="171x180"
                            src={rectangle_3}
                        />
                    </div>

                <div className={s.blogText}>
                    <h3 className={s.blogTopic}>How to start planning</h3>
                    <p className={cs.text}>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.
                        Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                        Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...
                    </p>
                    <CustomButton>Read now</CustomButton>
                    <button className={s.secondButton} >Add to your bookmarks</button>
                </div>
            </div>
        </div>
    )
}