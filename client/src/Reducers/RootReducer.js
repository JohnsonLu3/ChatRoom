import { combineReducers } from "redux"
import userReducer from "./UserReducer"

const rootReducer = () => {
    return combineReducers({
        user: userReducer
    })
}
export default rootReducer