import React, {useMemo, useState} from 'react';
import Comment from "./Comment";
import NewCommentInput from "./NewCommentInput";

const Comments = () => {

    const [comments, setComments] = useState([
        {
            id: 1,
            parentID: null,
            author: 'Иванов И. И.',
            imgSource: '',
            datetime: '10.12.18 15:00',
            comment: 'После того как ВПО отображает WebView, оно отправляет SMS-сообщение в службу Сбербанка AutoPay (79262000900) со словом «баланс». Получив ответ, ВПО парсит SMS сообщение, чтобы определить баланс счета. Если он меньше 3000 руб, троянец ничего не сделает. Если он превышает 68 тыс руб, троянец запрашивает  66 тыс, в противном случае он запросит доступную сумму минус 1000.',
        }, {
            id: 2,
            parentID: 1,
            author: 'Длиннаяфамилия И. И.',
            imgSource: '',
            datetime: '10.12.18 15:00',
            comment: 'Если он меньше 3000 руб, троянец ничего не сделает'
        }, {
            id: 3,
            parentID: null,
            author: 'Иванов И. И.',
            imgSource: '',
            datetime: '10.12.18 15:00',
            comment: 'После того как ВПО отображает WebView, оно отправляет SMS-сообщение в службу Сбербанка AutoPay (79262000900) со словом «баланс». Получив ответ, ВПО парсит SMS сообщение, чтобы определить баланс счета.',
        }, {
            id: 4,
            parentID: null,
            author: null,
            imgSource: '',
            datetime: '10.12.18 15:00',
            comment: null,
        }, {
            id: 5,
            parentID: 4,
            author: 'Петров И. И.',
            imgSource: '',
            datetime: '10.12.18 15:00',
            comment: 'Если он меньше 3000 руб, троянец ничего не сделает',
        }, {
            id: 6,
            parentID: 5,
            author: 'Петров И. И.',
            imgSource: '',
            datetime: '10.12.18 15:00',
            comment: 'Если он меньше 3000 руб, троянец ничего не сделает',
        }, {
            id: 7,
            parentID: 5,
            author: 'Петров И. И.',
            imgSource: '',
            datetime: '10.12.18 15:00',
            comment: 'Если он меньше 3000 руб, троянец ничего не сделает',
        }])


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
        const objIndex =  newCommentsObj.findIndex((comment_)=>comment_.id===comment.id)
        newCommentsObj[objIndex].comment = null
        newCommentsObj[objIndex].username = null
        newCommentsObj[objIndex].imgSource = null
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