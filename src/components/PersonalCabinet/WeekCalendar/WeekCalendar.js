import classes from "./WeekCalendar.module.css";
import React from 'react';

const WeekCalendar= (props) => {   
    const theme = props.theme;

    return(
        <div className={classes.container} >
            <div className={classes.text}>
                <span>Тема недели</span>
                <span className={classes.theme}>{theme}</span>
            </div>
            <div className={classes.choiece}>

            </div>
        </div>

    );   
}

export default WeekCalendar;