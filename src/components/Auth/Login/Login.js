import React, {useEffect, useState} from "react";
import classes from "./Login.module.css"
import {InputText} from "primereact/inputtext";
import {Checkbox} from 'primereact/checkbox';
import { Button } from 'primereact/button';
import {Password} from 'primereact/password';
import googleIco from "../icons/flat-color-icons_google.svg"
import appleIco from "../icons/Vector.svg"
import facebookIco from "../icons/facebook.svg"
import showIco from "../icons/show.svg";
import { Link } from "react-router-dom";
import {Formik, useFormik} from "formik";
import {connect} from "react-redux";
import {authAPI} from "../../../api/api";
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
import { change } from "redux-form";


const Login = (props) =>{
    const [disabledBtn, setDisabledBtn] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    
    /*useEffect(()=>{
        if(!formik.errors && formik.values.email.length !== 0 && formik.values.password.length !== 0){
            setDisabledBtn(false)
        }
    },[formik.values])*/
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

        let dis = values.email.length !== 0 && values.password.length !== 0 && Object.keys(errors).length == 0
        setDisabledBtn(!dis)

        return errors
    }

    const formik = useFormik({
        initialValues: {
            email:'',
            password:'',
            saveData: false
        },
        validate,
        validateOnBlur: true,
        onSubmit: values => {
            props.login(formik.values.email, formik.values.password)
        }
    })

    return(            
        <div className={classes.inner}>   
            <h2 className ={classes.titleAuth}><FormattedMessage id="authWelcome"/></h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="email" className={classes.titleForms}>Email</label>
                        <InputText id="email" type="text"
                                   className={formik.errors.email ? "p-invalid": ''}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.email}
                        />
                        {formik.errors.email ?  <small id="username2-help" className="p-invalid p-d-block">{formik.errors.email}!</small> : null}
                    </div>
                    <div className={`p-field`}>
                        <label htmlFor="password" className={classes.titleForms}><FormattedMessage id="authPassword"/></label>
                        <InputText id="password"
                                  type="password"
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
                </div>
                {props.errors != null &&
                    <div className={classes.errorsForm}>{props.errors}</div>
                }
                <Link className={classes.passForgot} href="#"><FormattedMessage id="authForgetPassword"/></Link>
                <div className={classes.saveDataAndBtnInner}>
                    <div>
                        <Checkbox className={classes.checkbox} id="saveData" checked={formik.values.saveData} onChange={formik.handleChange}></Checkbox>
                        <label htmlFor="saveData" className="p-checkbox-label"><FormattedMessage id="authRememberPassword"/></label>
                    </div>
                    <Button type="submit" label={<FormattedMessage id="authButtonLogin"/>} disabled={disabledBtn} className={`p-button-rounded ${classes.btn} ${classes.btnLogin}`} />
                </div>
            </form>
            <div>
                <Button className={`p-button-rounded ${classes.btn} ${classes.btnSocial}`}>
                    <img className={classes.btnSocialImg} src={googleIco} alt="google"/>
                    <span className={classes.btnSocialText}><FormattedMessage id="authSocial"/> Google</span>
                </Button>
                <Button className={`p-button-rounded ${classes.btn} ${classes.btnSocial}`}>
                    <img className={classes.btnSocialImg} src={appleIco} alt="apple"/>
                    <span className={classes.btnSocialText}><FormattedMessage id="authSocial"/> Apple</span>
                </Button>
                <Button className={`p-button-rounded ${classes.btn} ${classes.btnSocial}`}>
                    <img className={classes.btnSocialImg} src={facebookIco} alt="facebook"/>
                    <span className={classes.btnSocialText}><FormattedMessage id="authSocial"/> Facebook</span>
                </Button>
            </div>
        </div>
    )
}

export default Login;