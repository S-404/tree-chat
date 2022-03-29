import React, {useContext, useState} from 'react';
import {Context} from "../../context";
import CommentInput from "./CommentInput";

const NewCommentInput = () => {

    const {addNewComment} = useContext(Context)

    const [newComment, setNewComment] = useState('')

    const addCommentButtonHandler = () => {
        addNewComment(newComment, null)
        setNewComment('')
    }

    const onChangeHandler=(e)=>{
        setNewComment(String(e.target.value))
    }

    const cancelButtonHandler = () => {
        setNewComment('')
    }

    return (
            <CommentInput
                text={newComment}
                onChangeHandler={onChangeHandler}
                cancelButtonHandler={cancelButtonHandler}
                addButtonHandler={addCommentButtonHandler}
            />
    );
};

export default NewCommentInput;