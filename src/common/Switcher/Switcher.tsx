import React from "react";
import '../icon/iconStyle.css'
import './Switcher.scss'

type PropsType = {
    darkTheme: boolean
    changeTheme: () => void
}

export const Switcher = React.memo(function Switcher(props:PropsType) {
    return (
        <div className={'switcherBox'}>
            <label className={'switcher'}>
                <input
                    onChange={props.changeTheme}
                    checked={props.darkTheme}
                    type="checkbox"/>
                <span className={'switcherBtn'}> </span>
                <i className={'switcherIcon icon-power-off'}> </i>
            </label>
        </div>
    )
})