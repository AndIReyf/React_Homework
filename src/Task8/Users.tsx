import React from "react";
import {hwReducer, initialState, sortAC, sortByAgeAC} from "./homeWorkReducer";

type PropsType = {}

export function Users(props: PropsType) {

    const sortPayloadUp = 'up'
    const sortPayloadDown = 'down'
    const sortPayloadAge = 18

    const [state, setState] = React.useState(initialState)
    const sortUp = () => setState(hwReducer(state, sortAC(sortPayloadUp)))
    const sortDown = () => setState(hwReducer(state, sortAC(sortPayloadDown)))
    const sortByAge = () => setState(hwReducer(state, sortByAgeAC(sortPayloadAge)))

    return (
        <div>
            <h3>Task 8</h3>
            {
                state.map(item => {
                    return (
                        <div key={item.id}>
                            <span>{item.name} </span>
                            <span> {item.age}</span>
                        </div>
                    )
                })
            }
            <div>
                <button onClick={sortUp}>Sort Up</button>
                <button onClick={sortDown}>Sort Down</button>
                <button onClick={sortByAge}>Sort +18</button>
            </div>
        </div>
    )
}