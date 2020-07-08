import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import style from './Task3.module.scss';
import {Button} from "../common/Button/Button";
import {Input} from "../common/Input/Input";

type PropsType = {
    users: Array<UserType>
    addUser: (value: string) => void
}

export type UserType = {
    id?: string
    name?: string
}

export function Task3(props: PropsType) {

    const placeholderValue: string = 'Enter your name...';
    const typeInput: string = 'text';
    const [inpValue, setInpValue] = useState<string>('');
    const isInpEmpty = (value: string) => value.trim() === '';
    const showAlert = (value: string) => {
        setInpValue('');
        alert(value);
    }
    const showErrorAlert = () => showAlert('Input is empty. Please enter your name!');
    const showSuccessAlert = (name: string) =>  showAlert(`Hi ${name.trim()}, welcome to samurai's way!`);
    const showUserName = () => {
        if (isInpEmpty(inpValue)) {
            showErrorAlert();
        }
        else {
            props.addUser(inpValue);
            showSuccessAlert(inpValue);
        }
    }
    const onInpValueChange = (e: ChangeEvent<HTMLInputElement>) => setInpValue(e.currentTarget.value);
    const onKeyPressInInput = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            showUserName();
        }
    }
    const addNewUserName = () => showUserName();

    return (
        <div className={style.task3Box}>
            <h3>Task3</h3>
            <div className={style.inpBox}>
                <Input placeholder={placeholderValue}
                       type={typeInput}
                       value={inpValue}
                       onChange={onInpValueChange}
                       onKeyPress={onKeyPressInInput}
                />
                <Button btnStyle={'Add'}
                        onClick={addNewUserName}
                />
            </div>
            <ul>
                {
                    props.users.map(u => <li key={u.id} className={style.name}>
                        {u.name}
                    </li>)
                }
            </ul>
        </div>
    )
}