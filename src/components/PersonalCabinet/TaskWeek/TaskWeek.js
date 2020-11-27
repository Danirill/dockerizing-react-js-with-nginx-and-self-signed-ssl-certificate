import classes from "./TaskWeek.module.css";
import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import CardTask from './CardTask/CardTask';



const TaskWeek= (props) => { 
    const displayValueTemplate = (value) => {
        return (
            <>
                {value}/<b>100</b>
            </>
        );
    }
    return(
        <div className={classes.container} >
            <h2>
                Задания недели
            </h2>
            <ProgressBar value={40} displayValueTemplate={displayValueTemplate}></ProgressBar>
            <div className={classes.cardsTask}>
                <CardTask textCard="Запомнить сведения об аллергических реациях"/>
                <CardTask textCard="Запомнить сведения об аллергических реациях"/>
                <CardTask textCard="Запомнить сведения об аллергических реациях"/>
                <CardTask textCard="Запомнить сведения об аллергических реациях"/>
                <CardTask textCard="Запомнить сведения об аллергических реациях"/>
            </div>
            
        </div>

    );   
}

export default TaskWeek;