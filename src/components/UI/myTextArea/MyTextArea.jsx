import React from 'react';
import classes from "./myTextArea.module.css";

const MyTextArea = ({text,onChangeHandler}) => {
    return (
        <textarea
            className={classes.MyTextArea}
            placeholder={'Write something...'}
            value={text}
            onChange={onChangeHandler}
        />
    );
};

export default MyTextArea;