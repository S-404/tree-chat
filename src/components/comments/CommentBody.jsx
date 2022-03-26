import React, {useContext} from 'react';
import ReplyCommentInput from "../commentInput/ReplyCommentInput";
import {Context} from "../../context";
import EditorButtons from "./EditorButtons";

const CommentBody = ({comment}) => {
    const {selectedComment} = useContext(Context)
    return (
        <section className={'comment__comment-body'}>

            <article className={'comment-body'}>{comment.comment}</article>

            <EditorButtons comment={comment}/>

            {selectedComment.id === comment.id ?
                <ReplyCommentInput/>
                : null}
        </section>
    );
};

export default CommentBody;