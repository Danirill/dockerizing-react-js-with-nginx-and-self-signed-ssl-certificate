import authReducer from "./auth-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import eventsReducer from "./events-reducer";
import dashboardReducer from "./dashboard-reducer";

let reducers = combineReducers({
    auth: authReducer,
    events: eventsReducer,
    dashboard: dashboardReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store

export default store