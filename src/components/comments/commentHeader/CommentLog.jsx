import React from 'react';

const CommentLog = ({comment}) => {

    if (comment.comment === null) return (
        <span className={'comment-log__datetime'}>
            {`Комментарий был удален ${comment.datetime}`}
        </span>
    )

    return (

        <>
            <span className={'comment-log__author'}>
                {comment.username}
            </span>

            <time
                className={'comment-log__datetime'}
                dateTime={comment.datetime}
            >
                {`${comment.datetime}`}
            </time>
        </>

    );
};

export default CommentLog;