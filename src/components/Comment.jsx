import React, {useContext} from 'react';
import {Context} from "../context";

const Comment = ({comment, deleteCommentHandler, replyCommentHandler, editCommentHandler}) => {
    const {user} = useContext(Context)
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