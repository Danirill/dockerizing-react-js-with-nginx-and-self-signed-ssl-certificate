import {eventsAPI} from "../api/api";

const SET_LAST_EVENT = "SET_LAST_EVENT";
const SET_FETCH_LAST_EVENT = "SET_FETCH_LAST_EVENT";

let initialState = {
    lastEvent: {
        data: null,
        fetchLastEvent:true
    }
}

const eventsReducer = (state = initialState, action)=>{
    switch (action.type){
        case SET_LAST_EVENT:{
            return {
                ...state,
                lastEvent: {
                    fetchLastEvent: false,
                    data: action.lastEventData
                }
            }
        }
        case SET_FETCH_LAST_EVENT:{
            return {
                ...state,
                lastEvent: {
                    ...state.lastEvent,
                    fetchLastEvent: action.fetchLastEvent
                }
            }
        }
        default:
            return state;
    }
}

const setLastEvent = (lastEventData) => ({type: SET_LAST_EVENT, lastEventData})
const setFetchLastEvent = (fetchLastEvent) => ({type: SET_FETCH_LAST_EVENT, fetchLastEvent})


export const getLastEvent = (idUser) => (dispatch) =>{
    dispatch(setFetchLastEvent(true))
    eventsAPI.getLastEvent(idUser)
        .then(response => {
            dispatch(setLastEvent(response.data.closest_event))
        }).catch(error => {
            dispatch(setFetchLastEvent(false))
    })
}

export default eventsReducer;
