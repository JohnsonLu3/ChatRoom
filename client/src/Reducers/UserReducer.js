let userID = Math.floor(Math.random() * 100000000);

const initialUser = {
    id: userID,
    userName: `Guest_${userID}`,
    color: "#7FDB7F"
}

const userReducer = (state = initialUser, action) => {
    if (action.type === "CREATE_USER") {
        return {
            ...state,
            user: action.payload
        }

    } if (action.type === "UPDATE_USER") {
        // incase I want to make update user more advance then a total replace
        return {
            ...state,
            user: action.payload
        }
    } else {
        return state;
    }
}
export default userReducer