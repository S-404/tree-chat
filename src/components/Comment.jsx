import React, {useContext} from 'react';
import {Context} from "../context";
import TextArea from "./TextArea";

const Comment = ({comment}) => {
    const {user} = useContext(Context)
    const {selectedComment, setSelectedComment} = useContext(Context)
    const {addNewComment,deleteComment,updateComment} = useContext(Context)

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
        <div className={'comments__comment'}>
            <div>
                {comment.comment === null ?
                    <span>{`Комментарий был удален ${comment.datetime}`}</span>
                    :
                    <>
                        <span>{comment.username}</span>
                        <span>{`${comment.datetime}`}</span>
                    </>
                }
            </div>

            <span>{comment.comment}</span>
            <div className={'comment__buttons'}>

                <button onClick={() => replyCommentHandler(comment)}>⮪</button>

                {user.userID === comment.userID ?
                    <>
                        <button onClick={() => editCommentHandler(comment)}>✎</button>
                        <button onClick={() => deleteCommentHandler(comment)}>✖</button>
                    </>
                    : null}

            </div>

            <div>
                {selectedComment.id === comment.id ?
                   <TextArea/>
                    :null}
            </div>

            <div className={'comment__replies'}>
                {comment.replies.map(reply => (
                    <Comment
                        key={reply.id}
                        comment={reply}
                        deleteCommentHandler={deleteCommentHandler}
                        replyCommentHandler={replyCommentHandler}
                        editCommentHandler={editCommentHandler}
                    />
                ))}
            </div>
        </div>

    );
};

export default Comment;