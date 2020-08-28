type ActionType = LoadingType
type LoadingType = {
    type: 'SET_LOADING'
    loading: boolean
}
export type StateType = {
    loading: boolean
}

const initialState = {
    loading: false
}

export const loadingReducer = (state: StateType = initialState, action: ActionType):StateType => {
    switch (action.type) {
        case "SET_LOADING": return {...state, loading: action.loading}
        default: return state
    }
}

export const loadingAC = (loading: boolean):LoadingType => ({type:'SET_LOADING', loading})