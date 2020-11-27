import React, {useState} from "react";
import classes from "./Signup.module.css"
import googleIco from "../icons/flat-color-icons_google.svg"
import appleIco from "../icons/Vector.svg"
import facebookIco from "../icons/facebook.svg"
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Checkbox} from "primereact/checkbox";
import {Button} from "primereact/button";
import {useFormik} from "formik";
import showIco from "../icons/show.svg";
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'

const  Signup = (props) =>{
    const [disabledBtn, setDisabledBtn] = useState(true)
    const [disabledPassword, setDisabledPassword] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [showErrorEmail, setShowErrorEmail] = useState(false)

    const validate = values =>{
        const errors = {}

        if (!values.email) {
            errors.email = <FormattedMessage id="authField"/>;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = <FormattedMessage id="authWrongEmail"/>;
        }

        if (!values.password) {
            errors.password = <FormattedMessage id="authField"/>;
        }else if(values.password.length < 6){
            errors.password = <FormattedMessage id="authWrongPassword"/>
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = <FormattedMessage id="authField"/>;
        } else if(values.password !== values.confirmPassword){
            errors.confirmPassword = <FormattedMessage id="authPasswordsDont"/>;
        }

        if (!values.name) {
            errors.name = <FormattedMessage id="authField"/>;
        }

        if (values.dataProcessing !== true) {
            errors.dataProcessing = <FormattedMessage id="authdFieldRequire"/>;
        }

        let dis = values.email.length !== 0 &&
            values.password.length !== 0 &&
            values.name.length !== 0 &&
            values.confirmPassword.length !== 0 &&
            Object.keys(errors).length == 0
        setDisabledBtn(!dis)

        let disPassword = values.password.length !== 0
        setDisabledPassword(!disPassword)

        return errors
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email:'',
            password:'',
            confirmPassword: '',
            dataProcessing: false
        },
        validate,
        validateOnBlur: true,
        onSubmit: values => {
            if(props.freeEmail){
                props.signUp(formik.values.name, formik.values.email, formik.values.password)
                if(props.isRegistered){
                    props.setConfirmEmail(true)
                }
            }else{
                setShowErrorEmail(true)
            }
        }
    })

    const emailOnBlur = (e) =>{
        e.preventDefault();
        formik.handleBlur(e);
        if (formik.values.email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.email) && !props.freeEmail) {
            props.checkEmail(formik.values.email)
        }
    }

    const emailOnCange = (e) =>{
        e.preventDefault();
        formik.handleChange(e);
        setShowErrorEmail(false)
        props.refreshEmail()
        if(!props.freeEmail) {
            props.setErrors(null)
        }
    }

    return(
        <div>
            <div className={classes.continueInner}>
                <span className={classes.continueText}><FormattedMessage id="authContinueText"/></span>
                <img className={classes.continueImg} src={googleIco} alt="google"/>
                <img className={classes.continueImg} src={appleIco} alt="apple"/>
                <img className={classes.continueImg} src={facebookIco} alt="facebook"/>
            </div>
            <div className={classes.orInner}>
                <div className={classes.line}></div>
                <span className={classes.textLine}><FormattedMessage id="authOrLine"/></span>
                <div className={classes.line}></div>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="name" className={classes.titleForms}><FormattedMessage id="authName"/></label>
                        <InputText id="name" type="text"
                                   className={formik.errors.name ? "p-invalid": ''}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.name}
                        />
                        {formik.errors.name ?  <small id="username2-help" className="p-invalid p-d-block">{formik.errors.name}!</small> : null}
                    </div>
                    <div
                        className={`p-field ${props.freeEmail ? classes.validate : ''}`}
                        onBlur={emailOnBlur}
                    >
                        <label htmlFor="email" className={classes.titleForms}>Email</label>
                        <InputText id="email" type="text"
                                   className={`${formik.errors.email ? "p-invalid": showErrorEmail ? "p-invalid" : ''}`}
                                   onChange={emailOnCange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.email}
                        />
                        {formik.errors.email ?  <small id="username2-help" className="p-invalid p-d-block">{formik.errors.email}!</small> : null}
                        {props.errorsEmail ?  <small id="username2-help" className="p-invalid p-d-block">{props.errorsEmail}!</small> : null}
                        {showErrorEmail ? <small id="username2-help" className="p-invalid p-d-block">Данный email не был проверен, либо уже зарегистрирован!</small> : null}
                    </div>
                    <div className={`p-field`}>
                        <label htmlFor="password" className={classes.titleForms}><FormattedMessage id="authPassword"/></label>
                        <Password id="password"
                                  className={formik.errors.password ? "p-invalid": ''}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.password}
                        />
                        <div className={classes.showPassword} onClick={()=>{
                            setShowPassword(!showPassword)
                            if(showPassword){
                                document.querySelector('#password').type = 'text'
                            }else{
                                document.querySelector('#password').type = 'password'
                            }
                        }}><img src={showIco} alt="show"/></div>
                        {formik.errors.password ?  <small id="username2-help" className="p-invalid p-d-block">{formik.errors.password}!</small> : null}
                    </div>
                    <div className={`p-field`}>
                        <label htmlFor="confirmPassword" className={classes.titleForms}><FormattedMessage id="authPasswordCheck"/></label>
                        <InputText
                                  type="password" id="confirmPassword"
                                  className={formik.errors.confirmPassword ? "p-invalid": ''}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.confirmPassword}
                                  disabled={disabledPassword}
                        />
                        {formik.errors.confirmPassword ?  <small id="username2-help" className="p-invalid p-d-block">{formik.errors.confirmPassword}!</small> : null}
                    </div>
                </div>
                {props.errors != null &&
                <div className={classes.errorsForm}>{props.errors}</div>
                }
                <div className={classes.registrationBtnCheck}>
                    <Checkbox className={classes.checkbox} id="dataProcessing" checked={formik.values.dataProcessing} onChange={formik.handleChange}></Checkbox>
                    <label htmlFor="dataProcessing" className="p-checkbox-label"><FormattedMessage id="authConsent"/></label>
                    {formik.errors.dataProcessing ?  <small id="username2-help" className="p-invalid p-d-block">{formik.errors.dataProcessing}!</small> : null}
                </div>
                <div>
                    <Button type="submit" label={<FormattedMessage id="authButtonSignup"/>} disabled={disabledBtn} className={`p-button-rounded ${classes.btn} ${classes.btnLogin} ${classes.btnRegistration}`} />
                </div>
            </form>
        </div>
    )
}

export default Signup;