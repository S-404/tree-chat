import React from 'react';
import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";

const Comment = ({comment}) => {


    return (
        <section
            className={`comments__comment 
            ${comment.parentID?'comments__comment_reply':null}`}>
            <CommentHeader comment={comment}/>
            <CommentBody comment={comment}/>

            {comment.replies.map(reply => (
                <Comment
                    key={reply.id}
                    comment={reply}
                />
            ))}
        </section>

    );
};

export default Comment;