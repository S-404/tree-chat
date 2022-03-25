import React, {useContext, useState} from 'react';
import {Context} from "../context";

const NewCommentInput = () => {

    const {addNewComment} = useContext(Context)

    const [newComment, setNewComment] = useState('')

    const newCommentInputHandler = (e) => {
        setNewComment(e.target.value)
    }

    const addCommentButtonHandler = () => {
        addNewComment(newComment, null)
    }

    return (
        <div>
            <input
                placeholder={'your comment'}
                type={'text'}
                value={newComment}
                onChange={newCommentInputHandler}
            />
            <button onClick={addCommentButtonHandler}>confirm</button>
        </div>


    );
};

export default NewCommentInput;