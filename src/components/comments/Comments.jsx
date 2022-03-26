import React, {useEffect, useMemo, useState} from 'react';
import Comment from "./Comment";
import NewCommentInput from "../commentInput/NewCommentInput";
import {Context} from "../../context";
import {newCommentObj} from "../../helpers/objects";
import {datetimeFormat} from "../../helpers/formats";
import {commentsMockData} from "../../mockData/commentsData";

const Comments = () => {

    const [user] = useState({userID: 10, username: 'Имяпользователя И.И.'})
    const [comments, setComments] = useState([])
    const [selectedComment, setSelectedComment] = useState({
        id: -1, mode: '', action: () => {
        }
    })

    useEffect(() => setComments(commentsMockData), [])

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
        newCommentsObj[objIndex].datetime = datetimeFormat(new Date())
        setComments(newCommentsObj)
    }

    const updateComment = (newComment, commentID) => {
        const newCommentsObj = [...comments]
        const objIndex = newCommentsObj.findIndex((comment_) => comment_.id === commentID)
        newCommentsObj[objIndex].comment = newComment
        newCommentsObj[objIndex].datetime = datetimeFormat(new Date())
        setComments(newCommentsObj)
    }

    const addNewComment = (newComment, parentID = null) => {
        if (newComment) {
            const maxID = comments.reduce((prev, curr) => Math.max(prev, curr.id), 0)
            const commentObj = newCommentObj(
                maxID + 1,
                newComment,
                user,
                datetimeFormat(new Date()),
                parentID
            )
            setComments([...comments, commentObj])

        }
    }


    return (
        <Context.Provider value={
            {
                user,
                comments, setComments,
                selectedComment, setSelectedComment,
                addNewComment, deleteComment, updateComment,
            }
        }>
            <div className={'comments'}>
                {commentsData.map((comment) => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                    />
                ))}
            </div>
            <NewCommentInput/>
        </Context.Provider>

    );
};

export default Comments;