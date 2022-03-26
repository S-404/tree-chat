import React, {useContext, useState} from 'react';
import {Context} from "../../context";
import CommentInput from "./CommentInput";

const NewCommentInput = () => {

    const {addNewComment} = useContext(Context)

    const [newComment, setNewComment] = useState('')

    const addCommentButtonHandler = () => {
        addNewComment(newComment, null)
    }

    const onChangeHandler=(e)=>{
        setNewComment(e.target.value)
    }

    const cancelButtonHandler = () => {
        setNewComment('')
    }

    return (
        <div>
            <CommentInput
                text={newComment}
                onChangeHandler={onChangeHandler}
                cancelButtonHandler={cancelButtonHandler}
                addButtonHandler={addCommentButtonHandler}
            />

        </div>


    );
};

export default NewCommentInput;