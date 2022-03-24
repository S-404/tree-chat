import React, {useState} from 'react';

const NewCommentInput = ({comments, setComments}) => {

    const [newCommentInputVisible, setNewCommentInputVisible] = useState(false)
    const [newComment, setNewComment] = useState('')
    const newCommentInputHandler = (e) => {
        setNewComment(e.target.value)
    }


    const newCommentObj = (id, comment, parentID = 0, replies = []) => {
        return {id, parentID, replies, comment}
    }

    const addNewComment = () => {
        if (newComment) {
            const commentObj = newCommentObj(comments.length, newComment)
            setComments([...comments, commentObj])
            setNewComment('')
            setNewCommentInputVisible(false)
        }
    }

    return (
        <>
            {newCommentInputVisible ?
                <div>
                    <input
                        placeholder={'your comment'}
                        type={'text'}
                        value={newComment}
                        onChange={newCommentInputHandler}/>
                    <button onClick={addNewComment}
                    >confirm
                    </button>
                    <button onClick={() => setNewCommentInputVisible(false)}
                    >cancel
                    </button>
                </div>
                :
                <button onClick={() => setNewCommentInputVisible(true)}
                >add comment
                </button>
            }
        </>
    );
};

export default NewCommentInput;