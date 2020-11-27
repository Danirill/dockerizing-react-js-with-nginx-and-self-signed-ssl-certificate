import React from "react";
import TagCard from "./TagCard/TagCard";
import classes from "./CardEvent.module.css"
import { Button } from 'primereact/button';
import {Link} from "react-router-dom";

const CardEvent = (props) =>{
    const weekday = 'Понедельник 9.11';
    /*const startTime = props.lastEvent.start_time;
    const endTime = props.lastEvent.stop_time;*/
    const startTime = "16.00";
    const endTime = "16.45";
    const onClickJoinRoom = () =>{

    }
    return(
        <div className={classes.container}>
            <div className={classes.title}>{props.lastEvent.event_name}</div>
            <div className={classes.row}>
                <div className={classes.calendarBlock}>
                    <span className={classes.weekday}>{weekday}</span>
                    <span className={classes.time}>{startTime} - {endTime}</span>
                </div>
                <Button className={`p-button-rounded ${classes.btn}`}>
                    Перенести
                </Button>
            </div>
            <div className={classes.visitors}>
                лут?
            </div>
            <div className={classes.linkInner}>
                <Link to={`../room?code=${props.lastEvent.link_to_daily}`} className={`p-button-rounded ${classes.link}`} >
                    Присоединиться
                </Link>
            </div>
        </div>
    )
}

export default CardEvent;