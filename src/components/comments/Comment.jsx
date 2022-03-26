import React from 'react';
import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";

const Comment = ({comment}) => {


    return (
        <section className={'comments__comment'}>
            <CommentHeader comment={comment}/>
            <CommentBody  comment={comment} />

            <section className={'comment__replies'}>
                {comment.replies.map(reply => (
                    <Comment
                        key={reply.id}
                        comment={reply}
                    />
                ))}
            </section>

        </section>

    );
};

export default Comment;