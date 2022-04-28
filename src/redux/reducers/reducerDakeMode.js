const initState = {
    darkmode: 'true',
}


const reducerDakeMode = (state = initState, action) => {

    switch (action.type) {
        case 'darkmode/addDarkMode':
            return{
                ...state,
                darkmode: action.payload
            }
        default:
            return state
    }
}

export default reducerDakeMode