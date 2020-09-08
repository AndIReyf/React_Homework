import React, {ChangeEvent} from "react";
import './InputRange.scss'

type PropsType = {
    minValue: number
    maxValue: number
    currentValue: number
    currentValueDouble: number
    changeRangeValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeRangeValueDouble: (e: ChangeEvent<HTMLInputElement>) => void
    double: boolean
}

export const InputRange = React.memo(function InputRange(props: PropsType) {

    const setRangeValueColor = (value: number) => {
        if (value < (props.maxValue * 25 / 100)) return 'blue'
        if (value >= (props.maxValue * 25 / 100) && value < (props.maxValue * 50 / 100)) return 'purple'
        if (value >= (props.maxValue * 50 / 100) && value < (props.maxValue * 75 / 100)) return 'violet'
        if (value >= (props.maxValue * 75 / 100)) return 'pink'
    }

    return (
        <>
            {
                props.double
                    ? <div className={'rangeDouble'}>
                        <div className={'wrap'}>
                            <span className={'priceBefore'}>{props.currentValue}</span>
                            <span className={'priceAfter'}>{props.currentValueDouble}</span>
                            <input
                                className={'range left'}
                                type="range"
                                value={props.currentValue}
                                min={props.minValue} max={props.maxValue} onChange={props.changeRangeValue}/>
                            <input
                                className={'range right'}
                                type="range"
                                value={props.currentValueDouble}
                                min={props.minValue} max={props.maxValue} onChange={props.changeRangeValueDouble}/>
                            <div className="slider">
                                <div className="track"> </div>
                                <div className="range"> </div>
                            </div>
                        </div>
                    </div>
                    : <div className={'rangeSingle'}>
                        <div className={'wrap'}>
                            <span className={`rangeValue ${setRangeValueColor(props.currentValue)}`}>
                                {props.currentValue}
                            </span>
                            <div className={'rangeBefore'}> </div>
                            <input className={'range'}
                                   type="range"
                                   value={props.currentValue}
                                   min={props.minValue}
                                   max={props.maxValue}
                                   onChange={props.changeRangeValue}/>
                            <div className={'rangeAfter'}
                                 style={{width: 100 - (props.currentValue * 100) / props.maxValue + '%'}}> </div>
                        </div>
                    </div>
            }
        </>
    )
})