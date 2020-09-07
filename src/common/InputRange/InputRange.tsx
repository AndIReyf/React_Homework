import React, {ChangeEvent} from "react";
import './InputRange.scss'

type PropsType = {
    minValue: number
    maxValue: number
    currentValue: number
    changeRangeValue: (e: ChangeEvent<HTMLInputElement>) => void
    double: boolean
}

export const InputRange = React.memo(function InputRange(props: PropsType) {

    const setRangeValueColor = (value: number) => {
        if (value < (props.maxValue*25/100)) return 'blue'
        if (value >= (props.maxValue*25/100) && value < (props.maxValue*50/100)) return 'purple'
        if (value >= (props.maxValue*50/100) && value < (props.maxValue*75/100)) return 'violet'
        if (value >= (props.maxValue*75/100)) return 'pink'
    }

    return (
        <>
            {
                props.double
                    ? <div className={'rangeDouble'}>
                        <input type="range" value={0} min={0} max={100}/>
                        <input type="range" value={0} min={0} max={100}/>
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
                                 style={{width: 100 - (props.currentValue*100) / props.maxValue + '%'}}> </div>
                        </div>
                    </div>
            }
        </>
    )
})