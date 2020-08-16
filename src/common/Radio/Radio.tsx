import React from "react";

export type RadioItemsType = Array<string>
type PropsType = {
    radioItems: RadioItemsType
    radioName: string
}

export function Radio(props: PropsType) {

    const [checked, setChecked] = React.useState<number | null>(null)

    return (
        <div>
            <h3>Native Radio</h3>
            {
                props.radioItems.map((item, index) => {
                    return (
                        <div key={index}>
                            <label htmlFor={item}>
                                <input
                                    checked={checked === index}
                                    onChange={() => setChecked(index)}
                                    value={item}
                                    name={props.radioName}
                                    id={item}
                                    type="radio"/>
                                {item}
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}