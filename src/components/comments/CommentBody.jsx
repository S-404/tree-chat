import React, {useContext} from 'react';
import ReplyCommentInput from "../commentInput/ReplyCommentInput";
import {Context} from "../../context";
import EditorButtons from "../UI/buttons/EditorButtons";

const CommentBody = ({comment}) => {

    const {selectedComment} = useContext(Context)

    if (!comment.comment) return (
        <section className={'comment__comment-body'}>
            <EditorButtons comment={comment}/>
        </section>
    )
    return (
        <section className={'comment__comment-body'}>

            <article className={'comment-body__comment-text'}>{comment.comment}</article>

            <EditorButtons comment={comment}/>

            {selectedComment.id === comment.id && selectedComment.action ?
                <ReplyCommentInput/>
                : null}
        </section>
    );
};

export default CommentBody;