import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";
import s from "./CustomButton.module.scss";

type CustomButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const CustomButton: FC<CustomButtonPropsType> = ({className, ...restProps}) => {
    return (
        <button className={s.customButtonStyle} {...restProps}/>
    )
}