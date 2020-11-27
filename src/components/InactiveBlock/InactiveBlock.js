import React, {useEffect, useState} from 'react';
import classes from "./InactiveBlock.module.css"
import {ReactComponent as Building} from "./building.svg";

const InactiveBlock = (props) =>{
    return(
        <div className={classes.inactiveBlock} style={{minHeight:props.height, maxWidth:props.width}}>
            <h2>{props.text}</h2>
            <p className={classes.textP}>
                Блок находится в стадии разработки, но скоро появится на сайте! 
            </p>
            <Building className={classes.Building}/>
        </div>
        
    )
}

export default InactiveBlock;