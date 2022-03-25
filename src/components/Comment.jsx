import React from 'react';

const Comment = ({comment, deleteCommentHandler, replyCommentHandler, editCommentHandler}) => {

    return (
        <div className={'comments__comment'}>
            <span>{comment.comment}</span>
            <div className={'comment__buttons'}>
                <button onClick={() => editCommentHandler(comment)}>✎</button>
                <button onClick={() => replyCommentHandler(comment)}>⮪</button>
                <button onClick={() => deleteCommentHandler(comment)}>✖</button>
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