import {eventsAPI} from "../api/api";

const SET_COUTH_INFO = "SET_COUTH_INFO";
const SET_FETCH_GET_COUTH_INFO = "SET_FETCH_GET_COUTH_INFO";

let initialState={
    couth:{
        data: null,
        fetchGetCouthInfo: true
    }
}

const dashboardReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_COUTH_INFO:{
            return {
                ...state,
                couth: {
                    fetchGetCouthInfo: false,
                    data: action.couthData
                }
            }
        }
        case SET_FETCH_GET_COUTH_INFO:{
            return {
                ...state,
                couth: {
                    ...state.lastEvent,
                    fetchGetCouthInfo: action.fetchGetCouthInfo
                }
            }
        }
        default:
            return state;
    }
}

const setCouthInfo = (couthData) => ({type: SET_COUTH_INFO, couthData})
const setFetchCouthInfo = (fetchGetCouthInfo) => ({type: SET_FETCH_GET_COUTH_INFO, fetchGetCouthInfo})


export const getCouthInfo = (idUser) => (dispatch) =>{
    dispatch(setFetchCouthInfo(true))
    eventsAPI.getInfoUser(idUser)
        .then(response => {
            dispatch(setCouthInfo(response.data))
        }).catch(error => {
        dispatch(setFetchCouthInfo(false))
    })
}

export default dashboardReducer;