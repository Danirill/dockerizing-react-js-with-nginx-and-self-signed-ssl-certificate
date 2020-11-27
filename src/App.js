import React, {useEffect, useState} from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import classes from "./App.module.css"
import AuthContainer from "./components/Auth/AuthContainer";
import {Route} from "react-router-dom";
import ConfirmEmailPage from "./components/Auth/Signup/confirmEmailPage/confirmEmail";
import PersonalCabinet from "./components/PersonalCabinet/PersonalCabinet";
import {connect} from "react-redux";
import {confirmEmail, getAuthUserData} from "./redux/auth-reducer";
import * as axios from "axios";

import English from "./Language/English"
import Russian from "./Language/Russian"
import VideoCallFrame from './components/VideoChatRoom/VideoCallFrame/VideoCallFrame';
import VideoChatRoom from './components/VideoChatRoom/VideoChatRoom';



function App(props) {
    const [changeLanguage, setChangeLanguage] = useState("en")
    const [fetchGetInfo, setFetchGetInfo] = useState(true)
    const language = changeLanguage == "ru" ? Russian.messagesInRussian : English.messagesInEnglish;
    /*const [countryName, setCountryName] = useState(null);*/
    const getGeoInfo = () => {
        setFetchGetInfo(true)
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
            if(data.country_name == "Russia"){
                setChangeLanguage("ru");
                localStorage.setItem('language', "ru")
                setFetchGetInfo(false)
            }
        }).catch((error) => {
            setFetchGetInfo(false)
            console.log(error);
        });
    }
    useEffect(()=>{
        getGeoInfo()
        props.getAuthUserData()
    },[])
    if(fetchGetInfo){
        return (
            <>
                <div>Загрузка языка!</div>
            </>
        )
    }
  return (
    <>
        <div className={classes.container}>
          {/* <button onClick={()=>{setChangeLanguage("en")}}>Сменить язык на английский</button>
          <button onClick={()=>{setChangeLanguage("ru")}} >Сменить язык на Русский </button> */}
            <Route exact path='/' render={() => <AuthContainer language = {language}/>}/>
            <Route path='/confirm_email/:token?' render={()=><ConfirmEmailPage confirmEmail={props.confirmEmail}
                                                                               fetchConfirmEmail={props.fetchConfirmEmail}
                                                                               isConfirmEmail={props.isConfirmEmail}
                                                                               language = {language}
            />}/>
            <Route path='/personal_cabinet' render={()=><PersonalCabinet language = {language}/>}/>
            <Route path='/room/' render={()=><VideoChatRoom/>}/>
        </div>
        {/*<VideoCallFrame url = "https://wellbe.daily.co/hello-daily" />*/}
    </>
  );
}
const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{getAuthUserData})(App);
