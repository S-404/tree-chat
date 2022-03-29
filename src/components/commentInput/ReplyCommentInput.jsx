import React, {useContext, useState} from 'react';
import {Context} from "../../context";
import CommentInput from "./CommentInput";

const ReplyCommentInput = () => {

    const {selectedComment, setSelectedComment} = useContext(Context)

    const [text, setText] = useState('')

    const cancelButtonHandler = () => {
        setSelectedComment({
            id: null, action: () => {}
        })
    }

    const addButtonHandler = () => {
        if (text) {
            selectedComment.action(text, selectedComment.id)
            cancelButtonHandler()
        }
    }

    const onChangeHandler = (e) => {
        setText(e.target.value)
    }

    return (
        <CommentInput
            text={text}
            onChangeHandler={onChangeHandler}
            cancelButtonHandler={cancelButtonHandler}
            addButtonHandler={addButtonHandler}
        />
    );
};

export default ReplyCommentInput;