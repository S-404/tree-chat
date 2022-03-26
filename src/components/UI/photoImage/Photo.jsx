import React from 'react';
import DefaultPhoto from '../../../assets/DefaultPhoto.svg'

const Photo = ({imgSource}) => {
    return (
            <img
                className={'comment-header__photo-img'}
                src={imgSource?imgSource:DefaultPhoto} alt={'img'}
            />
    );
};

export default Photo;