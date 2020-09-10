import React, {useState} from "react";
import './Menu.scss'
import {NavLink} from "react-router-dom";
import {Button} from "../common/Button/Button";

export function Menu() {

    const btnName: string = 'Menu';
    const [menu, setMenu] = useState(false);
    const onClick = () => menu ? setMenu(false) : setMenu(true);

    return (
        <div className={`menu ${menu ? 'active' : ''}`}>
            <Button onClick={onClick} btnName={btnName}/>
            <div className={'menuBtnWrapper'}>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/preJunior">PreJunior</NavLink>
                <NavLink to="/junior">Junior</NavLink>
                <NavLink to="/juniorPlus">Junior Plus</NavLink>
            </div>
        </div>
    )
}