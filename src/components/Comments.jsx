import React, {useState} from 'react';
import Comment from "./Comment";
import NewCommentInput from "./NewCommentInput";

const Comments = () => {



    const [comments, setComments] = useState([
        {
            id: 0, depth: 0, comment: 'comment1',
            replies: [{
                id: 1, depth: 1, comment: 'reply comment1',
                replies: []
            }]
        },
        {
            id: 1, depth: 0, comment: 'comment2',
            replies: [{
                id: 3, depth: 1, comment: 'reply1 comment2',
                replies: [{
                    id: 4, depth: 2, comment: 'reply1 reply2',
                    replies: [{
                        id: 5, depth: 3, comment: 'reply reply1',
                        replies: []
                    }]
                }]
            },
                {
                    id: 0, comment: 'reply2 comment2',
                    replies: [{
                        id: 1, comment: 'reply comment1',
                        replies: []
                    }]
                },
            ]
        },
    ])


    const deleteComment = (comment) => {
        console.log('delete',comment)
    }
    const replyComment = (comment) =>{
        console.log('reply',comment)
    }
    const editComment = (comment) =>{
        console.log('edit',comment)
    }


    return (
        <>
            <NewCommentInput comments={comments} setComments={setComments}/>
            <div className={'comments'}>
                {comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                        deleteComment={deleteComment}
                        replyComment={replyComment}
                        editComment={editComment}
                    />
                ))}
            </div>
        </>

    );
};

export default Comments;