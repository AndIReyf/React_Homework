import React from "react";
import './Junior.scss';
import {Menu} from "../../Menu/Menu";

type PropsType = {}

export function Junior(props: PropsType) {
    return (
        <div className={'junior'}>
            <h1>Junior Page</h1>
            <Menu/>
        </div>
    )
}