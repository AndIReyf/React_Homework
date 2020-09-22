import React from "react";
import './Request.scss'
import {Button} from "../common/Button/Button";
import {request} from "./RequestsAPI";

type PropsType = {}

export function Request(props: PropsType) {

    const [isChecked, setIsChecked] = React.useState(false)
    const [response, setResponse] = React.useState<any>('')

    const getRequest = () => {
        request(isChecked)
            .then(response => setResponse(response.data.errorText))
            .catch(error => setResponse(JSON.stringify(error.message)))
    }

    return (
        <div className={'request'}>
            <h3>Task 13</h3>
            <div className={'requestBox'}>
                <Button btnName={'Send'} onClick={getRequest}/>
                <div>
                    <input onChange={(e) => {
                        setIsChecked(e.currentTarget.checked)
                    }} checked={isChecked} type="checkbox"/>
                </div>
            </div>
            <div className={'response'}>
                Response: {response}
            </div>
        </div>
    )
}