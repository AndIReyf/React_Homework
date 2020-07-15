import React, {useState} from "react";
import './Checkbox.scss';

type PropsType = {}

export function Checkbox(props: PropsType) {

    const [checked, setChecked] = useState(false);
    const isChecked = () => checked ? setChecked(false) : setChecked( true);

    return (
        <div className={'checkboxContainer'}>
            <div data-value={checked}
                 className={'checkbox'}
                 onClick={isChecked}>
                {
                    checked && <div className={'check'}> </div>
                }
            </div>
        </div>
    )
}