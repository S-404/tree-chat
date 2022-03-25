export const newCommentObj = (id, comment, user, datetime, parentID = null) => {
    return {
        id,
        parentID,
        userID: user.userID,
        username: user.username,
        imgSource: '',
        datetime,
        comment,
    }
}