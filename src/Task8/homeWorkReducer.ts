export type StateType = {
    id: string
    name: string
    age: number
}
type ActionType = SortType | SortByAgeType
type PayloadType = 'up' | 'down'
type SortType = {
    type: 'SORT'
    payload: PayloadType
}
type SortByAgeType = {
    type: 'CHECK'
    payload: number
}

export const initialState: Array<StateType> = [
    {id: '1', name: 'Bob', age: 18},
    {id: '2', name: 'Andy', age: 30},
    {id: '3', name: 'Max', age: 13}
]

export const hwReducer = (initialState: Array<StateType>, action: ActionType): Array<StateType> => {
    switch (action.type) {
        case "SORT": {
            if (action.payload === 'up') {
                const newState = initialState.sort(function (a, b): any {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                })
                return [...newState]
            }
            const newState = initialState.sort(function (a, b): any {
                if (a.name > b.name) {
                    return -1;
                }
                if (a.name < b.name) {
                    return 1;
                }
                return 0;
            })
            return [...newState]
        }
        case "CHECK": {
            return initialState.filter(item => item.age >= action.payload)
        }
        default:
            return [...initialState]
    }
};

export const sortAC = (payload: PayloadType): SortType => {
    return {type: "SORT", payload}
}
export const sortByAgeAC = (payload: number): SortByAgeType => {
    return {type: "CHECK", payload}
}