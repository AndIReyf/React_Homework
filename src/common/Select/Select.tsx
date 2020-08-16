import React, {ChangeEvent} from "react";

export type OptionsType = Array<string>
type PropsType = {
    options: OptionsType
    value: string
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export function Select(props: PropsType) {
    return (
        <div className={`Select`}>
            <h3>Native Select</h3>
            <select onChange={props.onChange} value={props.value}>
                {
                    props.options.map((item, index) => {
                        return (
                            <option value={item} key={index}>
                                {item}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}