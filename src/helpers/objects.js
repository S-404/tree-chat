export const newCommentObj = (id, comment, user, datetime,userPhoto , parentID = null) => {
    return {
        id,
        parentID,
        userID: user.userID,
        username: user.username,
        imgSource: userPhoto,
        datetime,
        comment,
    }
}