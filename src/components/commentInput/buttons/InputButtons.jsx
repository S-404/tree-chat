import React from 'react';
import add_svg from "../../../assets/add.svg";

const InputButtons = ({cancelButtonHandler, addButtonHandler}) => {
    return (
        <div className={'comment-input__buttons'}>
            <button
                className={'buttons__cancel-button buttons__button'}
                onClick={cancelButtonHandler}
            >Cancel
            </button>

            <button
                className={'buttons__confirm-button buttons__button'}
                onClick={addButtonHandler}
            >
                <img
                    className={'confirm-button__image'}
                    src={add_svg}
                    alt={'+'}/>
                <span
                    className={'confirm-button__text'}
                >Add Comment
                </span>
            </button>
        </div>
    );
};

export default InputButtons;