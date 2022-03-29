import React from 'react';
import Photo from "./photoImage/Photo";
import CommentLog from "./CommentLog";

const CommentHeader = ({comment}) => {
    return (
        <div className={'comment__comment-header'}>
            <Photo imgSource={comment.imgSource}/>
            <div className={'comment-header__comment-log'}>
                <CommentLog comment={comment}/>
            </div>
        </div>
    );
};

export default CommentHeader;