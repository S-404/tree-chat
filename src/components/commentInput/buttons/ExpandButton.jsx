import React, {useContext} from 'react';
import {Context} from "../../../context";

const ExpandButton = ({comment}) => {
    const {expandCommentBranch} = useContext(Context)

    const expandCommentBranchHandler = () => {
        expandCommentBranch(comment)
    }
    return (
        <div className={'comment-body__comment-buttons'}>
            <button
                className={'comments-buttons__button comments-buttons__expand-button'}
                onClick={expandCommentBranchHandler}
            >Expand branch
            </button>
        </div>
    );
};

export default ExpandButton;