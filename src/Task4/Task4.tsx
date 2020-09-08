import React, {ChangeEvent, useState} from "react";
import './Task4.css';
import {Button} from "../common/Button/Button";
import {Input} from "../common/Input/Input";
import {Checkbox} from "../common/Checkbox/Checkbox";

export function Task4() {

    const placeholderText: string = 'Enter here...';
    const [inpValue, setInpValue] = useState('');
    const onInpValueChange = (e: ChangeEvent<HTMLInputElement>) => setInpValue(e.currentTarget.value);

    return (
        <div className={'task4'}>
            <Checkbox/>
            <Input error={true}
                   type='text'
                   value={inpValue}
                   placeholder={placeholderText}
                   onChange={onInpValueChange}
            />
            <Button btnName={'Btn'} onClick={() => {}}/>
        </div>
    )
}