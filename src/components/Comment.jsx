import React from 'react';

const Comment = ({comment, deleteComment, replyComment, editComment}) => {

    return (
        <div className={'comments__comment'}>
            <span>{comment.comment}</span>
            <div className={'comment__buttons'}>
                <button onClick={() => editComment(comment)}>✎</button>
                <button onClick={() => replyComment(comment)}>⮪</button>
                <button onClick={() => deleteComment(comment)}>✖</button>
            </div>
            <div className={'comment__replies'}>
                {comment.replies.map(reply => (
                    <Comment
                        key={reply.id}
                        comment={reply}
                        deleteComment={deleteComment}
                        replyComment={replyComment}
                        editComment={editComment}
                    />
                ))}
            </div>
        </div>

    );
};

export default Comment;