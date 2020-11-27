import {authAPI, registrationAPI} from "../api/api";

const SET_FREE_EMAIL = "SET_FREE_EMAIL";
const SET_ERRORS = "SET_ERRORS";
const SET_ERRORS_EMAIL = "SET_ERRORS_EMAIL";
const SET_IS_REGISTERED = "SET_IS_REGISTERED";
const SET_FETCH_CONFIRM_EMAIL = "SET_FETCH_CONFIRM_EMAIL";
const SET_CONFIRM_EMAIL = "SET_CONFIRM_EMAIL";
const SET_USER_DATA = "SET_USER_DATA";

let initialState={
    errors: null,
    errorsEmail: null,
    freeEmail: false,
    isRegistered: false,
    fetchConfirmEmail: true,
    isConfirmEmail: false,
    isAuth: false,
    user: null
}

const authReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_FREE_EMAIL:
            return {
                ...state,
                freeEmail: action.freeEmail
            }
        case SET_ERRORS:
            return {
                ...state,
                errors: action.errors
            }
        case SET_ERRORS_EMAIL:{
            return {
                ...state,
                errorsEmail: action.errorsEmail
            }
        }
        case SET_IS_REGISTERED:
            return {
                ...state,
                isRegistered: action.isRegistered
            }
        case SET_FETCH_CONFIRM_EMAIL:
            return {
                ...state,
                fetchConfirmEmail: action.fetchConfirmEmail
            }
        case SET_CONFIRM_EMAIL:
            return {
                ...state,
                isConfirmEmail: action.isConfirmEmail
            }
        case SET_USER_DATA:{
            return {
                ...state,
                user: action.user,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

const setFreeEmail = (freeEmail) => ({type: SET_FREE_EMAIL, freeEmail})
export const setErrors = (errors) => ({type: SET_ERRORS, errors})
const setErrorsEmail = (errorsEmail) => ({type: SET_ERRORS_EMAIL, errorsEmail})
export const refreshEmail = () => (dispatch) =>{
    dispatch(setFreeEmail(false))
    dispatch(setErrorsEmail(null))
}
const setIsRegistered = (isRegistered) => ({type: SET_IS_REGISTERED, isRegistered})

const setFetchConfirmEmail = (fetchConfirmEmail) => ({type: SET_FETCH_CONFIRM_EMAIL, fetchConfirmEmail})
const setConfirmEmail = (isConfirmEmail) => ({type: SET_CONFIRM_EMAIL, isConfirmEmail})

const setUser = (user) => ({type: SET_USER_DATA, user})

export const checkEmail = (email) => (dispatch) => {
    registrationAPI.checkEmail(email)
        .then(response => {
            if(response.status === 202){
                dispatch(setFreeEmail(true))
            }else{
                dispatch(setErrorsEmail(response.data.details))
            }
        }).catch(errors => {
            if(errors.response.status === 403){
                dispatch(setErrorsEmail(errors.response.data.details))
            }else{
                dispatch(setErrors("Ошибка на сервере: не удалось проверить Ваш email. Напишите в тех. поддержку, либо попробуйте позже!"))
            }
    })
}

export const signUp = (name, email, password) => (dispatch) => {
    registrationAPI.signup(name, email, password)
        .then(response => {
            if(response.status === 201){
                dispatch(setIsRegistered(true))
            }else{
                dispatch(setErrorsEmail(response.data.details))
            }
        }).catch(errors => {
            if(errors.response.status === 400){
                dispatch(setErrors(errors.response.data.details))
            }else{
                dispatch(setErrors("Ошибка на сервере, попробуйте снова!"))
            }
    })
}

export const confirmEmail = (token) => (dispatch) =>{
    dispatch(setFetchConfirmEmail(true))
    registrationAPI.confirmEmail(token)
        .then(response => {
            if(response.status === 200){
                dispatch(setConfirmEmail(true))
            }
            dispatch(setFetchConfirmEmail(false))
        }).catch(error => {
            dispatch(setFetchConfirmEmail(false))
    })
}

export const getAuthUserData = () => dispatch =>{
    authAPI.me()
        .then(response => {
            if(response.status === 200){
                dispatch(setUser(response.data))
            }
        }).catch(error => {

    })
}

export const login = (email, password) => (dispatch) =>{
    authAPI.login(email, password)
        .then(response => {
            console.log(response)
            if(response.status === 200){
                localStorage.setItem("token", response.data.access);
                localStorage.setItem("tokenRefresh", response.data.refresh);
                dispatch(getAuthUserData())
            }else{
                dispatch(setErrors(response.data.details))
            }
        }).catch( (error) => {
            if(error.response.status === 401){
                dispatch(setErrors("Неправильный логин или пароль!"))
            }else{
                dispatch(setErrors(error.response.data.details))
            }
    })
}

export default authReducer;