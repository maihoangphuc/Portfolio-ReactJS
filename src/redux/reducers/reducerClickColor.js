const initState = {
    clickcolor: true,
}


const reducerClickColor = (state = initState, action) => {

    switch (action.type) {
        case 'clickcolor/addClickColor':
            return{
                ...state,
                clickcolor: action.payload
            }
        default:
            return state
    }
}

export default reducerClickColor