import * as axios from "axios";

const instanceWithToken = () => axios.create({
    withCredentials: true,
    baseURL: "https://api.wellbe.club/api/v1/",
    headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
    }
});

const instanceWithRefreshToken = () => axios.create({
    withCredentials: true,
    baseURL: "https://api.wellbe.club/api/v1/",
    headers: {
        "Authorization": "Bearer " + localStorage.getItem("tokenRefresh")
    }
});

const instance = () => axios.create({
    withCredentials: true,
    baseURL: "https://api.wellbe.club/api/v1/",
});

export const authAPI = {
    login(email,password){
        return  instance().post(`users/auth/sign_in/`, {email, password});
    },
    me(){
        return  instanceWithToken().get(`users/auth/me`);
    },
    refresh(){
        return  instanceWithRefreshToken().get(`users/auth/sign_in/refresh`);
    }
}

export const registrationAPI = {
    signup(name,email,password){
        return  instance().post(`users/auth/sign_up/me/`, {name, email, password});
    },
    checkEmail(email){
        return instance().post(`users/auth/sign_up/check_email/`, {email})
    },
    confirmEmail(token){
        return instance().get(`users/auth/sign_up/confirm_email/${token}`)
    }
}

export const eventsAPI ={
    getLastEvent(idUser){
        return instanceWithToken().get(`events/get_user_closest_event/${idUser}`)
    },
    getInfoUser(idUser){
        return instanceWithToken().get(`users/info/${idUser}`)
    }
}