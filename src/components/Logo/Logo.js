import React, {useEffect, useState} from 'react';
import classes from "./Logo.module.css"
import logo from "./logoWellbe.svg"
import { Dropdown } from 'primereact/dropdown';

const Logo = (props) =>{
    // const [selectedLang, setSelectedLang] = useState(null);
    // const cities = [
    //     {name: 'Русский', code: 'ru'},
    //     {name: 'English', code: 'en'}
    // ];
    // const onLangChange = (e) => {
    //     setSelectedLang(e.value);
    // }

    return(
        <div className={classes.inner}>
            <img className={classes.img} src={logo} alt="logo"/>
            <span className={classes.text}>WELLBE</span> 
            {/* <Dropdown value={selectedLang} options={cities} onChange={onLangChange} optionLabel="name" placeholder="Select a language" className={classes.drop}/> */}
        </div>
    )
}

export default Logo;