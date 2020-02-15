const CREATE_USER = "CREATE_USER"
const UPDATE_USER = "UPDATE_USER"


export const createUser = (userId, userName, userColor) => {
    return (
        {
            type: CREATE_USER,
            payload: {
                id: userId,
                userName: userName,
                color: userColor
            }
        }
    )
}

export const updateUser = (user) => {
    return (
        {
            type: UPDATE_USER,
            payload: user
        }
    )
}
