import React from "react";
import './Preloader.scss'
import preloader from './2.svg'

export function Preloader() {
    return (
        <div className={'Preloader'}>
            <img src={preloader} alt="Loading"/>
        </div>
    )
}