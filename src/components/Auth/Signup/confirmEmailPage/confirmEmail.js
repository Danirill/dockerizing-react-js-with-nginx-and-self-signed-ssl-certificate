import React, {useEffect} from "react";
import classes from "./confirmEmail.module.css";
import {connect} from "react-redux";
import {compose} from "redux";
import {Redirect, withRouter} from "react-router-dom";
import {confirmEmail} from "../../../../redux/auth-reducer";
import {FormattedMessage} from 'react-intl'

const ConfirmEmailPage = (props) =>{
    useEffect(()=>{
        let token = new URLSearchParams(props.location.search).get("token");
        debugger
        props.confirmEmail(token)
    },[])
    if(props.fetchConfirmEmail){
        return (
            <div>///</div>
        )
    }else if(props.isConfirmEmail){
        return(
            <Redirect to='/personal_cabinet'/>
        )
    }
    return(
        <div>
            ///
        </div>
    )
}

const mapStateToProps = (state) => ({
    fetchConfirmEmail: state.auth.fetchConfirmEmail,
    isConfirmEmail: state.auth.isConfirmEmail
})

export default compose(
    connect(mapStateToProps,{confirmEmail}),
    withRouter
)(ConfirmEmailPage);