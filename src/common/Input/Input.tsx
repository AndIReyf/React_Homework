import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import './Input.scss';

type PropsType = {
    error?: boolean
    placeholder: string
    type: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
}

export function Input(props: PropsType) {

    const isInpEmpty = (value: string) => value === '';
    const inpError = (error: boolean | undefined) => {
        if (error && !isInpEmpty(props.value)) {
            return 'inp error';
        } else {
            return 'inp';
        }
    }

    return (
        <div className={'inputBox'}>
            <input className={inpError(props.error)}
                   type={props.type}
                   value={props.value}
                   placeholder={props.placeholder}
                   onChange={props.onChange}
                   onKeyPress={props.onKeyPress}
            />
        </div>
    )
}