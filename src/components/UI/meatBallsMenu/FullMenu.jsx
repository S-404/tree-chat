import React from 'react';
import Dots from '../../../assets/Dots.svg'
import classes from "./FullMenu.module.css";

const FullMenu = ({...props}) => {
    return (
        <div className={classes.FullMenu} {...props}>
            <img src={Dots} alt={'menu'}/>
        </div>

    );
};

export default FullMenu;