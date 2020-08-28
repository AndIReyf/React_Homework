import {combineReducers, createStore} from "redux";
import {loadingReducer} from "./loading-reducer";

export type AppRootType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    loading: loadingReducer
})
export const store = createStore(rootReducer)