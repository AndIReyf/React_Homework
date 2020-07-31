import React from "react";
import './Button.scss';

type PropsType = {
    btnStyle?: string
    btnName?: string
    onClick: () => void
}

export function Button(props: PropsType) {

    const btnClass = (value: string | undefined) => {
        switch (value) {
            case 'Add': {
                return `btn ${value}`;
            }
            case 'Del': {
                return `btn ${value}`;
            }
            default: {
                return `btn`;
            }
        }
    }

    return (
        <div className={'btnBox'}>
            <button className={btnClass(props.btnStyle)}
                    onClick={props.onClick}>
                {props.btnName}
            </button>
        </div>
    )
}