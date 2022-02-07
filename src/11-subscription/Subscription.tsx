import React from 'react';
import s from './Subscription.module.scss'
import cs from "../0-common/styles/textStyles.module.scss";
import InputGroup from 'react-bootstrap/esm/InputGroup';
import {Button, FormControl} from "react-bootstrap";


export const Subscription = () => {
    return (
        <div className={s.subscription}>
            <div>
            <h3 className={cs.mainText}>
                Sign up for newsletter
            </h3>
            <p className={cs.text} style={{width: '330px'}}>
                Cu qui soleat partiendo urbanitas.
                Eum aperiri indoctum eu, homero alterum.
            </p>
            </div>
            <div>

                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Email address"
                        aria-label="Email address"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="primary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
            </div>
        </div>
    )
}