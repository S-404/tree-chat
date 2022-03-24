import React from 'react';

const Comment = ({prevComment,comment, deleteComment, replyComment, editComment}) => {


    return (
        <div className={'comments__comment'}>
            <span>{comment.comment}</span>
            <div className={'comment__buttons'}>
                <button onClick={() => editComment(prevComment,comment)}>✎</button>
                <button onClick={() => replyComment(prevComment,comment)}>⮪</button>
                <button onClick={() => deleteComment(prevComment,comment)}>✖</button>
            </div>
            <div className={'comment__replies'}>
                {comment.replies.map(reply => (
                    <Comment
                        key={reply.id}
                        prevComment={comment}
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