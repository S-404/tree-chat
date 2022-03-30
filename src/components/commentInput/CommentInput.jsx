import React from 'react';
import './styles/commentInput.scss'
import MyTextArea from "../UI/myTextArea/MyTextArea";
import InputButtons from "./buttons/InputButtons";

const CommentInput = ({text,onChangeHandler, cancelButtonHandler, addButtonHandler}) => {

    return (
        <div className={'comment-input'}>

            <div
                className={
                    `comment-input__textarea 
                ${text.length ? 'comment-input__textarea_expanded' : null}`
                }>
                <MyTextArea
                    text={text}
                    onChangeHandler={onChangeHandler}
                />
            </div>
            {text.length ?
                <InputButtons
                    addButtonHandler={addButtonHandler}
                    cancelButtonHandler={cancelButtonHandler}
                />:null
            }
        </div>
    );
};

export default CommentInput;