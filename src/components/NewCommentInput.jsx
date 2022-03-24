import React, {useState} from 'react';

const NewCommentInput = ({comments, setComments}) => {

    const [newComment, setNewComment] = useState('')

    const newCommentInputHandler = (e) => {
        setNewComment(e.target.value)
    }

    const newCommentObj = (id, comment, parentID = null) => {
        return{
            id,
            parentID,
            author: 'author',
            imgSource: '',
            datetime: new Date(),
            comment,
        }
    }

    const addNewComment = () => {
        if (newComment) {
            const commentObj = newCommentObj(comments.length, newComment)
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