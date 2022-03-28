import React, {useContext} from 'react';
import {Context} from "../../context";
import FullMenu from "./meatBallsMenu/FullMenu";


const EditorButtons = ({comment}) => {
    const {user} = useContext(Context)
    const {selectedComment, setSelectedComment} = useContext(Context)
    const {addNewComment, deleteComment, updateComment} = useContext(Context)
    const {expandCommentBranch} = useContext(Context)

    const expandCommentBranchHandler = () => {
        expandCommentBranch(comment)
    }

    const deleteCommentHandler = (comment) => {
        deleteComment(comment)
    }

    const replyCommentHandler = (comment) => {
        const newSelectedObj = {
            ...selectedComment,
            id: comment.id,
            mode: 'reply',
            action: addNewComment
        }
        setSelectedComment(newSelectedObj)
    }
    const editCommentHandler = (comment) => {
        const newSelectedObj = {
            ...selectedComment,
            id: comment.id,
            mode: 'edit',
            action: updateComment
        }
        setSelectedComment(newSelectedObj)
    }

    const fullMenuHandler = (comment) => {
        if (user.userID !== comment.userID) return

        const isFullNewValue = comment.id === selectedComment.id ?
            !selectedComment.isFullMenu : true

        const newSelectedObj = {
            id: comment.id,
            mode: '',
            action: () => {
            },
            isFullMenu: isFullNewValue,
        }
        setSelectedComment(newSelectedObj)
    }

    if (!comment?.expanded) return (
        <div className={'comment-body__comment-buttons'}>
            <button
                className={'comments-buttons__button comments-buttons__expand-button'}
                onClick={expandCommentBranchHandler}
            >Expand branch
            </button>
        </div>
    )

    if(!comment.comment) return null

    return (
        <div className={'comment-body__comment-buttons'}>

            <button
                className={'comments-buttons__button comments-buttons__reply-button'}
                onClick={() => replyCommentHandler(comment)}>Reply
            </button>

            {
                user.userID === comment.userID &&
                comment.id === selectedComment.id &&
                selectedComment.isFullMenu ?
                    <>
                        <button
                            className={'comments-buttons__button  comments-buttons__edit-button'}
                            onClick={() => editCommentHandler(comment)}>Edit
                        </button>
                        <button
                            className={'comments-buttons__button comments-buttons__delete-button'}
                            onClick={() => deleteCommentHandler(comment)}>Delete
                        </button>
                    </> : null
            }

            {user.userID === comment.userID ?
                <FullMenu onClick={() => fullMenuHandler(comment)}/>
                : null}


        </div>
    );
};

export default EditorButtons;