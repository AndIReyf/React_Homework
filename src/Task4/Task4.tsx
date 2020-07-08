import React, {ChangeEvent, useState} from "react";
import './Task4.css';
import {Button} from "../common/Button/Button";
import {Input} from "../common/Input/Input";
import {Checkbox} from "../common/Checkbox/Checkbox";

type BtnType = 'Add' | 'Del' | string;

export function Task4() {

    const type = 'text';
    const btnStyle: BtnType = 'Del';
    const error: boolean = true;
    const placeholderText: string = 'Enter here...';
    const [inpValue, setInpValue] = useState('');
    const onInpValueChange = (e: ChangeEvent<HTMLInputElement>) => setInpValue(e.currentTarget.value);

    return (
        <div className={'task4'}>
            <Checkbox />
            <Input error={error}
                   type={type}
                   value={inpValue}
                   placeholder={placeholderText}
                   onChange={onInpValueChange}
            />
            <Button btnStyle={btnStyle}
                    onClick={() => {}}
            />
        </div>
    )
}