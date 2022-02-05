import React from 'react';
import atlassianPict from "../0-common/pict/atlassian.png"
import bitbucketPict from "../0-common/pict/bitbucket.png"
import watchPict from "../0-common/pict/watch.png"
import audiPict from "../0-common/pict/audi.png"
import facebookPict from "../0-common/pict/facebook.png"
import s from "./Triggers.module.scss"


export const Triggers = () => {
    return (
        <div className ={s.triggers}>
            <img src={bitbucketPict}/>
            <img src={watchPict}/>
            <img src={facebookPict}/>
            <img src={atlassianPict}/>
            <img src={audiPict}/>
        </div>
    )
}
