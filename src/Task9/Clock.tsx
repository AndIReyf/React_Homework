import React from "react";
import './Clock.scss'
import {Button} from "../common/Button/Button";

type PropsType = {}

export function Clock(props: PropsType) {

    const [timerId, setTimerId] = React.useState(0);
    const [date, setDate] = React.useState(new Date());

    const getDate = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let d = date.getDate()
        let m = date.getMonth()
        let y = date.getFullYear()
        return `${d} ${monthNames[m]} ${y}`
    }
    const getTime = () => {
        let h = date.getHours()
        let m = date.getMinutes()
        let s = date.getSeconds()
        return `${h}:${m}:${s}`
    }
    const timer = () => {
        const tId = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(tId)
    }
    const stopTimer = () => clearInterval(timerId)

    return (
        <div className={'Clock'}>
            <h3>Task 9</h3>
            <div className={'clockTimer'}>
                <div>{getTime()}</div>
                <div className={'Date'}>{getDate()}</div>
            </div>
            <div className={'clockBtn'}>
                <Button btnName={'Start'} onClick={timer}/>
                <Button btnName={'Stop'} onClick={stopTimer}/>
            </div>
        </div>
    )
}