import React from 'react';
import Photo from "../UI/photoImage/Photo";

const CommentHeader = ({comment}) => {
    return (
        <div className={'comment__comment-header'}>
            <Photo  imgSource={comment.imgSource}/>
            <div className={'comment-header__comment-log'}>
            {comment.comment === null ?
                <span
                    className={'comment-log__datetime'}
                >
                    {`Комментарий был удален ${comment.datetime}`}
                </span>
                :
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
            }
            </div>
        </div>
    );
};

export default CommentHeader;