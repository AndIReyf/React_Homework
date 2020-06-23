import React from "react";
import Ava from "./avatar.jpeg";
import style from "./Avatar.module.scss";

const Avatar = () => {
    return (
        <div className={style.avatarBox}>
            <img className={style.avatar} src={Ava} alt="Avatar"/>
        </div>
    )
}

export default Avatar;