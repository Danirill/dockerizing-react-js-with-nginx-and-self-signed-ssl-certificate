import classes from "./MainMenu.module.css";
import React, { useState, useEffect, useRef } from 'react';
import Logo from "./../../Logo/Logo";
import {ReactComponent as IconMain} from "./iconsMenu/iconMain.svg";
import {ReactComponent as IconTaskList} from "./iconsMenu/iconTaskList.svg";
import {ReactComponent as IconCalendar} from "./iconsMenu/iconCalendar.svg";
import {ReactComponent as IconGroup} from "./iconsMenu/iconGroup.svg";
import {ReactComponent as IconChats} from "./iconsMenu/iconChats.svg";
import {ReactComponent as IconCommunity} from "./iconsMenu/iconCommunity.svg";
import {ReactComponent as IconStatistic} from "./iconsMenu/iconStatistic.svg";
import {ReactComponent as IconMaterials} from "./iconsMenu/iconMaterials.svg";
import {ReactComponent as IconCheck} from "./iconsMenu/iconCheck.svg";
import {Link} from "react-router-dom";
import {FormattedMessage} from 'react-intl'

const MainMenu = () => {
    return(
        <div className={classes.container}>
            <Logo/>
            <menu className={classes.mainActiveLi}>
                <Link to={"/personal_cabinet"}><li><IconMain/><FormattedMessage id = "menuMain"/></li></Link>
                <Link to={"/personal_cabinet"}><li><IconCalendar/><FormattedMessage id = "menuTimeTable"/></li></Link>
                <li className={classes.inactive}><IconTaskList/><FormattedMessage id = "menuTasks"/></li>          
                <li className={classes.inactive}><IconGroup/><FormattedMessage id = "menuGroup"/></li>
                <li className={classes.inactive}><IconChats/><FormattedMessage id = "menuChats"/></li>
                <li className={classes.inactive}><IconCommunity/><FormattedMessage id = "menuCommunity"/></li>
                <li className={classes.inactive}><IconStatistic/><FormattedMessage id = "menuStatistics"/></li>
                <li className={classes.inactive}><IconMaterials/><FormattedMessage id = "menuAttachments"/></li>
                {/* <Link to={"/personal_cabinet/events"} ><li><IconTaskList/><FormattedMessage id = "menuTasks"/></li></Link>          
                <Link to={"/personal_cabinet"}><li><IconGroup/><FormattedMessage id = "menuGroup"/></li></Link>
                <Link to={"/personal_cabinet/chats"}><li><IconChats/><FormattedMessage id = "menuChats"/></li></Link>
                <Link to={"/personal_cabinet"}><li><IconCommunity/><FormattedMessage id = "menuCommunity"/></li></Link>
                <Link to={"/personal_cabinet"}><li><IconStatistic/><FormattedMessage id = "menuStatistics"/></li></Link>
                <Link to={"/personal_cabinet"}><li><IconMaterials/><FormattedMessage id = "menuAttachments"/></li></Link> */}
            </menu>
            <menu className={classes.mainInactivelyLi}>
                <li className={classes.inactive}><IconCheck/><FormattedMessage id = "menuCheckHardware"/></li>
            </menu>
            
        </div>
    )
}

export default MainMenu;