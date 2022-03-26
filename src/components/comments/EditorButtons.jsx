import React, {useContext} from 'react';
import {Context} from "../../context";

const EditorButtons = ({comment}) => {
    const {user} = useContext(Context)
    const {setSelectedComment} = useContext(Context)
    const {addNewComment, deleteComment, updateComment} = useContext(Context)

    const deleteCommentHandler = (comment) => {
        deleteComment(comment)
    }

    const replyCommentHandler = (comment) => {
        const newSelectedObj = {
            id: comment.id,
            mode: 'reply',
            action: addNewComment
        }
        setSelectedComment(newSelectedObj)
    }
    const editCommentHandler = (comment) => {
        const newSelectedObj = {
            id: comment.id,
            mode: 'edit',
            action: updateComment
        }
        setSelectedComment(newSelectedObj)
    }


    return (
        <div className={'comment-body__comment-buttons'}>

            <button
                className={'comments-buttons__button'}
                onClick={() => replyCommentHandler(comment)}>⮪
            </button>

            {user.userID === comment.userID ?
                <>
                    <button
                        className={'comments-buttons__button'}
                        onClick={() => editCommentHandler(comment)}>✎
                    </button>
                    <button
                        className={'comments-buttons__button'}
                        onClick={() => deleteCommentHandler(comment)}>✖
                    </button>
                </> : null}
        </div>
    );
};

export default EditorButtons;