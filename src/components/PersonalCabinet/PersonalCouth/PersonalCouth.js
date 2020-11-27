import React from "react";
import classes from './PersonalCouth.module.css'
import TaskWeek from "../TaskWeek/TaskWeek";
import {ReactComponent as PlaceholderPhoto} from "./placeholderPhoto.svg";
import { Button } from 'primereact/button';

const PersonalCouth = (props) =>{
    if(props.couth.fetchGetCouthInfo){
        return (
            <div>Загрузка данных</div>
        )
    }
    return(
        <div className={classes.container}>
            <h2 className={classes.h2}>Ваш коуч</h2>
            <div className={classes.infoCouth}>
                <PlaceholderPhoto/>
                <div className={classes.textInfo}>
                    <div className={classes.name}>{props.couth.data.name}</div>
                    <div className={classes.email}>{props.couth.data.email}</div>
                </div>
            </div>
            <div className={classes.btns}>
                <Button label="Информация" className={`p-button-outlined ${classes.btn}`} />
                <Button label="Написать" className={`p-button-rounded ${classes.btn}`} />   
            </div>
        </div>
    )
}

export default PersonalCouth;