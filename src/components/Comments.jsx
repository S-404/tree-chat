import React, {useContext, useMemo} from 'react';
import Comment from "./Comment";
import NewCommentInput from "./NewCommentInput";
import {Context} from "../context";

const Comments = () => {

    const {comments, setComments} = useContext(Context)


    const commentsData = useMemo(() => {
        const nestedData = (items, id = null) => {
            return items
                .filter(item => item['parentID'] === id)
                .map(item => ({...item, replies: nestedData(items, item.id)}));
        }
        return nestedData(comments)
    }, [comments])

    const deleteComment = (comment) => {
        const newCommentsObj = [...comments]
        const objIndex = newCommentsObj.findIndex((comment_) => comment_.id === comment.id)
        newCommentsObj[objIndex].comment = null
        newCommentsObj[objIndex].username = null
        setComments(newCommentsObj)
    }

    const updateComment = () => {

    }

    const deleteCommentHandler = (comment) => {
        deleteComment(comment)
    }

    const replyCommentHandler = (comment) => {
        console.log('reply', comment)
    }
    const editCommentHandler = (comment) => {
        console.log('edit', comment)
    }


    return (
        <>
            <div className={'comments'}>
                {commentsData.map((comment) => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                        deleteCommentHandler={deleteCommentHandler}
                        replyCommentHandler={replyCommentHandler}
                        editCommentHandler={editCommentHandler}
                    />
                ))}
            </div>
            <NewCommentInput comments={comments} setComments={setComments}/>
        </>

    );
};

export default Comments;