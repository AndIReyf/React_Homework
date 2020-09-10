import React from "react";
import '../icon/iconStyle.css'
import './Switcher.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../../Redux/store";
import {darkModeAC, ThemeStateType} from "../../Redux/theme-reducer";

export const Switcher = React.memo(function Switcher() {

    const dispatch = useDispatch()
    const darkTheme = useSelector<AppRootType, ThemeStateType>(state => state.darkTheme)
    const changeTheme =  () => {
        dispatch(darkModeAC(!darkTheme.darkTheme))
    }

    return (
        <div className={'switcherBox'}>
            <label className={'switcher'}>
                <input
                    onChange={changeTheme}
                    checked={darkTheme.darkTheme}
                    type="checkbox"/>
                <span className={'switcherBtn'}> </span>
                <i className={'switcherIcon icon-power-off'}> </i>
            </label>
        </div>
    )
})