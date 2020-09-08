import React from "react";
import './Button.scss';

type PropsType = {
    btnName?: string
    disabled?: boolean
    onClick: () => void
}

export function Button(props: PropsType) {

    return (
        <div className={'btnBox'}>
            <button
                className={`btn ${props.disabled ? 'dis' : ''}`}
                disabled={props.disabled}
                onClick={props.onClick}>
                {props.btnName}
            </button>
        </div>
    )
}