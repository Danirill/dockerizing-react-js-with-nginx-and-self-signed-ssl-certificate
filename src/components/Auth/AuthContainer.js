import React, {useState} from 'react';
import classes from './AuthContainer.module.css'
import { TabView,TabPanel } from 'primereact/tabview';
import Login from "./Login/Login";
import './AuthContainer.css'
import Logo from "../Logo/Logo";
import Signup from "./Signup/Signup";
import AcceptEmail from "./Signup/AcceptEmail";
import {connect} from "react-redux";
import {checkEmail, login, refreshEmail, setErrors, signUp} from "../../redux/auth-reducer";
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
import {Redirect} from "react-router-dom";

const AuthContainer = (props) =>{
    const [activeIndex, setActiveIndex] = useState(0)
    const [confirmEmail, setConfirmEmail] = useState(false)
    if(props.isAuth){
        return <Redirect to={'/personal_cabinet'}/>
    }
    return(
        <IntlProvider messages={props.language}>     
        <div className={classes.inner}>
            <div className={classes.container}>
                <Logo/>
                {!props.isRegistered ?
                    <div className={classes.tabViewInner}>
                        <TabView className={classes.tabView} activeIndex={activeIndex}
                                 onTabChange={(e) => setActiveIndex(e.index)}>
                            <TabPanel header={<FormattedMessage id="authTabLogin"/>}>
                                <Login errors={props.errors}
                                       login={props.login}
                                       language = {props.language}
                                />
                            </TabPanel>
                            <TabPanel header={<FormattedMessage id="authTabSignUp"/>}>
                                <Signup setConfirmEmail={setConfirmEmail}
                                        errors={props.errors}
                                        checkEmail={props.checkEmail}
                                        freeEmail={props.freeEmail}
                                        signUp={props.signUp}
                                        errorsEmail={props.errorsEmail}
                                        isRegistered={props.isRegistered}
                                        refreshEmail={props.refreshEmail}
                                        setErrors={props.setErrors}
                                        language = {props.language}/>
                            </TabPanel>
                        </TabView>
                    </div> :
                    <div className={classes.center}>
                        <AcceptEmail/>
                    </div>
                }
            </div>
        </div>
        </IntlProvider>
    )
}

const mapStateToProps = (state) => ({
    errors: state.auth.errors,
    errorsEmail: state.auth.errorsEmail,
    freeEmail: state.auth.freeEmail,
    isRegistered: state.auth.isRegistered,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{
    checkEmail, signUp, refreshEmail, setErrors,
    login
})(AuthContainer);