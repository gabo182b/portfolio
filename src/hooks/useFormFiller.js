const initialState = {
    name: "",
    email: "",
    message: ""
}

function reducer(state, action) {
    switch (action.type) {
        case "update_input":
            return {
                ...state,
                [action.key]: action.value
            }
        default:
            return state
    }
}

export { initialState, reducer }