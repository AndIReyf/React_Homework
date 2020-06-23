import React from "react";
import style from "./Dialog.module.scss";

type MessageType = {
    name: string,
    text: string,
    postTime: string
}

type PropsType = {
    message: Array<MessageType>
}

const Dialog = (props: PropsType) => {
    return (
        <div className={style.dialogBox}>
            <div>
                <div className={style.name}>{props.message[0].name}</div>
                <div className={style.text}>{props.message[0].text}</div>
            </div>
            <div className={style.time}>{props.message[0].postTime}</div>
        </div>
    )
}

export default Dialog;