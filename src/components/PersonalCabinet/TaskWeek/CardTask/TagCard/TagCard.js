import React, { useState } from 'react';
import classes from "./TagCard.module.css";

const TagCard= (props) => { 
    return(
        <div className={classes.container} style={{backgroundColor:props.color}}>
              <span>{props.text}</span>  
        </div>

    );   
}

export default TagCard;