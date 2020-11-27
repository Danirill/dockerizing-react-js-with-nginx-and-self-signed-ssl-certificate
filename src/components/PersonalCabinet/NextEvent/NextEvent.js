import React from "react";
import CardEvent from "./CardEvent/CardEvent";
import classes from "./NextEvent.module.css"

const NextEvent = (props) =>{
    if(props.lastEvent.fetchLastEvent){
        return (
            <div>
                Загрузка ивента
            </div>
        )
    }
    return(
        <div className={classes.container}>
            <h2 className={classes.h2}>
                Ближайшее событие
            </h2>
            <CardEvent
                className={classes.cardsEvent}
                lastEvent={props.lastEvent.data}
            />
            
        </div>
    )
}

export default NextEvent;