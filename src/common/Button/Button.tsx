import React from "react";
import './Button.scss';

type PropsType = {
    btnStyle?: string
    onClick: () => void
}

export function Button(props: PropsType) {

    let btnName: string | undefined;
    const btnClass = (value: string | undefined) => {
        if (value === undefined) {
            btnName = 'Default';
            return `btn`;
        }

        btnName = value;

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
                {btnName}
            </button>
        </div>
    )
}