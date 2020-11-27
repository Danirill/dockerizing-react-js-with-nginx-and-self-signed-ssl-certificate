import React from "react";
import classes from './Dashboard.module.css'
import TaskWeek from "../TaskWeek/TaskWeek";
import Events from "../Events/Events";
import NextEvent from "../NextEvent/NextEvent";
import WeekCalendar from "../WeekCalendar/WeekCalendar";
import PersonalData from "../PersonalData/PersonalData";
import PersonalCouth from "../PersonalCouth/PersonalCouth";
import InactiveBlock from "../../InactiveBlock/InactiveBlock";

const Dashboard = (props) =>{
    return(
        <div className={classes.inner}>
            <div className={classes.column}>
                <PersonalData user={props.user}/>
                <PersonalCouth couth={props.couth}/>
                <NextEvent lastEvent={props.lastEvent} />
            </div>
            <div className={classes.column}>
                {/* <WeekCalendar/> */}
                <InactiveBlock text = "Ваш прогресс на курсе" height="220px" width="500px"/>
                <InactiveBlock text = "Задания недели" height="250px" width="500px"/>
                {/* <TaskWeek/> */}
            </div>
        </div>
    )
}

export default Dashboard;