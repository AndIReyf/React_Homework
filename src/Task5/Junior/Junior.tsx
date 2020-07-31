import React, {ChangeEvent, FocusEvent, KeyboardEvent, useState} from "react";
import './Junior.scss';
import {Menu} from "../../Menu/Menu";
import {EditableSpan} from "../../common/EditableSpan/EditableSpan";
import {Button} from "../../common/Button/Button";
import {restoreState, saveState} from "../../LocalStorage/LocalStorage";

type PropsType = {}

export function Junior(props: PropsType) {

    const saveBtn: string = 'Save';
    const restoreBtn: string = 'Restore';
    const autoFocus: boolean = true;
    const typeInp: string = 'text';
    const [inpValue, setInpValue] = useState('');
    const onInpValueChange = (e: ChangeEvent<HTMLInputElement>) => setInpValue(e.currentTarget.value);
    const onKeyPressInInp = (e: KeyboardEvent<HTMLInputElement>) => setInpValue(e.currentTarget.value);
    const onBlur = (e: FocusEvent<HTMLInputElement>) => setInpValue(e.currentTarget.value);
    const saveStatus = () => {
        saveState('status', inpValue)
    }
    const restoreStatus = () => {
        setInpValue( restoreState('status', 'Default status ;)'))
    }

    return (
        <div className={'junior'}>
            <h1>Junior Page</h1>
            <Menu/>
            <EditableSpan
                type={typeInp}
                value={inpValue}
                onChange={onInpValueChange}
                onKeyPress={onKeyPressInInp}
                onBlur={onBlur}
                setInpValue={setInpValue}
                autoFocus={autoFocus}
            />
            <div className={'btnContainer'}>
                <Button
                    btnName={saveBtn}
                    onClick={saveStatus}/>
                <Button
                    btnName={restoreBtn}
                    onClick={restoreStatus}/>
            </div>
        </div>
    )
}