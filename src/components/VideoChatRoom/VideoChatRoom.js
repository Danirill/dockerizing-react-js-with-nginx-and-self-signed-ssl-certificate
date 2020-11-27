import React, {useEffect, useState} from 'react';
import VideoCallFrame from './VideoCallFrame/VideoCallFrame';
import classes from "./VideoChatRoom.module.css"
import {useLocation, withRouter, Redirect, Link} from "react-router-dom";
import Logo from '../Logo/Logo';
import { Button } from 'primereact/button';

const VideoChatRoom = (props) =>{
    let code = new URLSearchParams(props.location.search).get("code");
    let link = `https://wellbe.daily.co/${code}`
    console.log(link)
    const redirectHome = () =>{
        return(
            <Redirect to={'/'}/>
        )
    }
    return(
        <div className={classes.container}>
            <div className={classes.bar}>
                <Link to={'../'}>
                    <Logo/>
                </Link>
                <h2>Личная встреча</h2>
                <Link to={'../'} onClick={redirectHome} className={`p-button-outlined p-button-danger ${classes.btnExit}`} >
                    Покинуть встречу
                </Link>
            </div>
                <VideoCallFrame url = {link} className={classes.videoCall} />
        </div>  
    )
}

export default withRouter(VideoChatRoom);