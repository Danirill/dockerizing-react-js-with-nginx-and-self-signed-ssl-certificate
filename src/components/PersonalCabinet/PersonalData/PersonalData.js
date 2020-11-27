import React, {useEffect} from "react";
import classes from './PersonalData.module.css'
import TaskWeek from "../TaskWeek/TaskWeek";
import {ReactComponent as PlaceholderPhoto} from "./placeholderPhoto.svg";
import {ReactComponent as Settings} from "./settings.svg";

const PersonalData = (props) =>{
    const user = props.user;
    useEffect(()=>{
        console.log(user)
    },[])
    return(
        <div className={classes.container}>
            <PlaceholderPhoto/>
            <div className={classes.info}>
                <div className={classes.name}>{props.user.name}</div>
                <div className={classes.email}>{props.user.email}</div>
            </div>
            {/* <Settings className={classes.settings}/> */}
        </div>
    )
}

export default PersonalData;