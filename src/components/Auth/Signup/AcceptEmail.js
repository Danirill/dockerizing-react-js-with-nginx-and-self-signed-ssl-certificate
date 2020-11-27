import React from "react";
import classes from "./AcceptEmail.module.css"
import {FormattedMessage} from 'react-intl'

const AcceptEmail = (props) => {
    return(
        <div className={classes.inner}>
            <div className={classes.title}><FormattedMessage id = "acceptEmailSignUp"/></div>
            <div className={classes.text}><FormattedMessage id = "acceptEmailLink"/></div>
            <div className={classes.resendEmail}>
                <div className={classes.resendText}><FormattedMessage id = "acceptEmailDontEmail"/></div>
                <div className={classes.resendBtnSend}><FormattedMessage id = "acceptEmailResend"/></div>
            </div>
        </div>
    )
}

export default AcceptEmail;