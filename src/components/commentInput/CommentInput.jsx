import React from 'react';

const CommentInput = ({text, onChangeHandler, cancelButtonHandler, addButtonHandler}) => {
    return (
        <div className={'comment-input'}>
            <textarea
                className={'comment-input__textarea'}
                placeholder={'Write something...'}
                value={text}
                onChange={onChangeHandler}
            />
            <div className={'comment-input__buttons'}>
                <button
                    className={'buttons__cancel-button buttons__button'}
                    onClick={cancelButtonHandler}
                >cancel
                </button>

                <button
                    className={'buttons__confirm-button buttons__button'}
                    onClick={addButtonHandler}
                >confirm
                </button>
            </div>

        </div>
    );
};

export default CommentInput;