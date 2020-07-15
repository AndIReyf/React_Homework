import React from "react";
import './JuniorPlus.scss';
import {Menu} from "../../Menu/Menu";

type PropsType = {}

export function JuniorPlus(props: PropsType) {
    return (
        <div className={'juniorPlus'}>
            <h1>Junior Plus Page</h1>
            <Menu/>
        </div>
    )
}