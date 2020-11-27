import React, {useEffect} from "react";
import classes from './PersonalCabinet.module.css'
import MainMenu from "./MainMenu/MainMenu";
import Events from "./Events/Events";
import {Redirect, Route} from "react-router-dom";
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
import Dashboard from "./Dashboard/Dashboard";
import {connect} from "react-redux";
import {getLastEvent} from "../../redux/events-reducer";
import {getCouthInfo} from "../../redux/dashboard-reducer";

const PersonalCabinet = (props) =>{
    useEffect(()=>{
        if(props.isAuth){
            props.getLastEvent(props.user.id)
            props.getCouthInfo(props.user.id)
        }
    },[props.isAuth])
    if(!props.isAuth){
        return <Redirect to={'/'}/>
    }
    return(
        <IntlProvider messages={props.language}>   
        <div className={classes.inner}>
            <MainMenu language={props.language}/>
            <Route exact path='/personal_cabinet/' render={()=><Dashboard
                user={props.user}
                lastEvent={props.lastEvent}
                couth={props.couth}
            />}/>
            <Route path='/personal_cabinet/chats' render={()=><>Тут чаты</>}/> 
        </div>
        
        </IntlProvider>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user,
    isAuth: state.auth.isAuth,
    lastEvent: state.events.lastEvent,
    couth: state.dashboard.couth,
})

export default connect(mapStateToProps,{getLastEvent, getCouthInfo})(PersonalCabinet);