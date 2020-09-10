import {combineReducers, createStore} from "redux";
import {loadingReducer} from "./loading-reducer";
import {themeReducer} from "./theme-reducer";

export type AppRootType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    loading: loadingReducer,
    darkTheme: themeReducer
})
export const store = createStore(rootReducer)