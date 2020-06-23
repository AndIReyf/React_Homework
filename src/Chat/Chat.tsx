import React from "react";
import style from "./Chat.module.scss";
import Avatar from "./Avatar/Avatar";
import Dialog from "./Dialog/Dialog";

const Chat = () => {

    const message = [
        {name: 'Andrey', text: 'I love React!', postTime: '12:30'}
    ];

    return (
        <div className={style.chatBox}>
            <Avatar/>
            <Dialog message={message} />
        </div>
    )
}

export default Chat;