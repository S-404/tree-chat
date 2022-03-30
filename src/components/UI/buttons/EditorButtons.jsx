import React, {useContext} from 'react';
import {Context} from "../../../context";
import FullMenu from "../meatBallsMenu/FullMenu";
import ExpandButton from "./ExpandButton";


const EditorButtons = ({comment}) => {
    const {user} = useContext(Context)
    const {selectedComment, setSelectedComment} = useContext(Context)
    const {addNewComment, deleteComment, updateComment} = useContext(Context)


    const deleteCommentHandler = (comment) => {
        deleteComment(comment)
    }

    const replyCommentHandler = (comment) => {
        const newSelectedObj = {
            ...selectedComment,
            id: comment.id,
            action: addNewComment
        }
        setSelectedComment(newSelectedObj)
    }
    const editCommentHandler = (comment) => {
        const newSelectedObj = {
            ...selectedComment,
            id: comment.id,
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
            action: null,
            isFullMenu: isFullNewValue,
        }
        setSelectedComment(newSelectedObj)
    }

    const isOwnComment = user.userID === comment.userID

    const accessEditDelete = isOwnComment &&
        comment.id === selectedComment.id &&
        selectedComment.isFullMenu

    if (!comment?.expanded) return (
        <ExpandButton comment={comment}/>
    )

    if (!comment.comment) return null

    return (
        <div className={'comment-body__comment-buttons'}>

            <button
                className={'comments-buttons__button comments-buttons__reply-button'}
                onClick={() => replyCommentHandler(comment)}>Reply
            </button>

            {accessEditDelete ?
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

            {isOwnComment ? <FullMenu onClick={() => fullMenuHandler(comment)}/> : null}

        </div>
    );
};

export default EditorButtons;