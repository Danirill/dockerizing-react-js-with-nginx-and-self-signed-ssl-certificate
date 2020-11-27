import React, { useState } from 'react';
import classes from "./CardTask.module.css";
import TagCard from './TagCard/TagCard';
import {ReactComponent as ImageCard}from "./img/imageCard1.svg"
import {ReactComponent as ImageNext}from "./img/imageNext.svg"

const CardTask= (props) => { 
    return(
        <div className={classes.container} >
                <ImageCard/>
                <div className={classes.content}>
                    <span>{props.textCard}</span>
                    <div className={classes.tags}>
                        <TagCard text="~ 8 минут" color="#BBE3FE"/>
                        <TagCard text="До 8.30" color="#FF6262"/>
                    </div>
                    
                </div>
                <button>
                    <ImageNext/>
                </button>    
        </div>

    );   
}

export default CardTask;