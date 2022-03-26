import React, {useContext} from 'react';
import ReplyCommentInput from "../commentInput/ReplyCommentInput";
import {Context} from "../../context";
import EditorButtons from "../UI/EditorButtons";

const CommentBody = ({comment}) => {
    const {selectedComment} = useContext(Context)
    if (!comment.comment) return null
    return (
        <section className={'comment__comment-body'}>

            <article className={'comment-body__comment-text'}>{comment.comment}</article>

            <EditorButtons comment={comment}/>

            {selectedComment.id === comment.id && selectedComment.mode?
                <ReplyCommentInput/>
                : null}
        </section>
    );
};

export default CommentBody;