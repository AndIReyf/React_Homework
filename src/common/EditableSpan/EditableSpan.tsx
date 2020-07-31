import React, {ChangeEvent, KeyboardEvent, FocusEvent, useState} from "react";
import './EditableSpan.scss';
import {Input} from "../Input/Input";

type PropsType = {
    type: string
    value: string
    autoFocus: boolean
    setInpValue: (value: string) => void
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onBlur: (e: FocusEvent<HTMLInputElement>) => void
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

export function EditableSpan(props: PropsType) {

    const defaultStatus: string = 'Add your status...';
    const [editMode, setEditMode] = useState(false);
    const setStatus = () => props.value.trim() ? props.value : defaultStatus;
    const changeStatusBlur = (e: FocusEvent<HTMLInputElement>) => {
        props.onBlur(e);
        setEditMode(false)
    }
    const changeStatusKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.onKeyPress(e);
            setEditMode(false);
        }
    }

    return (
        <div>
            {
                !editMode
                    ? <span className={'status'} onClick={() => {
                        setEditMode(true)
                    }}>
                        {setStatus()}
                    </span>
                    : <Input
                        type={props.type}
                        value={props.value}
                        onBlur={changeStatusBlur}
                        onKeyPress={changeStatusKeyPress}
                        onChange={props.onChange}
                        autoFocus={props.autoFocus}/>
            }
        </div>
    )
}