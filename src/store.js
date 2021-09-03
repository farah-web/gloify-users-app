import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import { userReducer, userProfileReducer } from "./redux/userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    userProfile: userProfileReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;