import React, {useEffect, useMemo, useState} from 'react';
import Comment from "./Comment";
import NewCommentInput from "../commentInput/NewCommentInput";
import {Context} from "../../context";
import {newCommentObj} from "../../helpers/objects";
import {datetimeFormat} from "../../helpers/formats";
import {commentsMockData} from "../../mockData/commentsData";
import './styles/comments.scss'
import {userData} from "../../mockData/userData";


const Comments = () => {

    //>>>предполагается получение данных
    //подтягиваются фейковые данные userData и commentsMockData
    const [user, setUser] = useState({})

    //было принято решение хранить данные в "табличном" ввиде
    //где комментарий (начало ветки) имеет св-во parentID равным null
    //а в каждом ответе на комментарий св-во parentID ссылается на id другого объекта,
    const [comments, setComments] = useState([])
    useEffect(() => {
        setComments(commentsMockData)
        setUser(userData)
    }, [])
    //<<<
    //>>>состояние выбранного комментария
    const [selectedComment, setSelectedComment] = useState({
        id: -1, //для определения собственных комментов
        action: () => {},//функция edit или new comment/reply
        isFullMenu: false //для отображения кнопок (reply,edit,delete)
    })
    //<<<



    //>>>преобразует "табличный" вид данных в объект с комментариями со вложенными ответами
    //тем самым список комментариев разбивается
    // на ветки {...коммент, ответ: {...коммент, ответ: и тд...}}
    const commentsData = useMemo(() => {
        const nestedData = (items, id = null) => {
            return items
                .filter(item => item['parentID'] === id)
                .map(item => ({...item, replies: nestedData(items, item.id)}));
        }
        return nestedData(comments)
    }, [comments])
    //<<<

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
            //так как обрабатываются моковые данные
            // новая id вычисляется этим способом,
            // а не полученными данными от сервера.
            const maxID = comments.reduce((prev, curr) => Math.max(prev, curr.id), 0)

            const commentObj = newCommentObj(
                maxID + 1,
                newComment,
                user,
                datetimeFormat(new Date()),
                user.photo,
                parentID
            )
            setComments([...comments, commentObj])
        }
    }

    const expandCommentBranch = (comment) => {
        const newCommentsObj = [...comments]
        const objIndex = newCommentsObj.findIndex((comment_) => comment_.id === comment.id)
        newCommentsObj[objIndex].expanded = true
        setComments(newCommentsObj)
    }


    return (
        <Context.Provider value={
            {
                user,
                comments, setComments,
                selectedComment, setSelectedComment,
                addNewComment, deleteComment, updateComment, expandCommentBranch
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