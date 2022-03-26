import React from 'react';

const CommentHeader = ({comment}) => {
    return (
        <div className={'comment__comment-header'}>
            {comment.comment === null ?
                <span
                    className={'comment-header__comment-log'}
                >
                    {`Комментарий был удален ${comment.datetime}`}
                </span>
                :
                <>
                    <span className={'comment-header__comment-author'}>
                        {comment.username}
                    </span>
                    <time
                        className={'comment-header__comment-log'}
                        dateTime={`${comment.datetime}`}
                    >
                        {`${comment.datetime}`}
                    </time>
                </>
            }
        </div>
    );
};

export default CommentHeader;