import React from 'react';
import CommentHeader from "./commentHeader/CommentHeader";
import CommentBody from "./CommentBody";

const Comment = ({comment}) => {

    return (
        <section
            className={`comments__comment 
            ${comment.parentID ? 'comments__comment_reply' : null}`}
        >
            <CommentHeader comment={comment}/>
            <CommentBody comment={comment}/>

            {comment?.expanded ?
                <>
                    {/*для ответов на комменты используется тот же объект что и для самих комментов*/}
                    {comment.replies.map(reply => (
                        <Comment
                            key={reply.id}
                            comment={reply}
                        />
                    ))}
                </>
                : null
            }
        </section>

    );
};

export default Comment;