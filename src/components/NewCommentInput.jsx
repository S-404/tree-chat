import React, {useContext, useState} from 'react';
import {Context} from "../context";
import {datetimeFormat} from "../helpers/formats";

const NewCommentInput = ({comments, setComments}) => {
    const {user} = useContext(Context)
    const [newComment, setNewComment] = useState('')

    const newCommentInputHandler = (e) => {
        setNewComment(e.target.value)
    }

    const newCommentObj = (id, comment, parentID = null) => {
        return{
            id,
            parentID,
            userID: user.userID,
            username: user.username,
            imgSource: '',
            datetime: datetimeFormat(new Date()),
            comment,
        }
    }

    const addNewComment = () => {
        if (newComment) {
            const maxID = comments.reduce((prev,curr)=>Math.max(prev,curr.id),0)
            const commentObj = newCommentObj(maxID+1, newComment)
            setComments([...comments, commentObj])
            setNewComment('')
        }
    }

    return (
        <div>
            <input
                placeholder={'your comment'}
                type={'text'}
                value={newComment}
                onChange={newCommentInputHandler}/>
            <button onClick={addNewComment}>confirm</button>
        </div>


    );
};

export default NewCommentInput;