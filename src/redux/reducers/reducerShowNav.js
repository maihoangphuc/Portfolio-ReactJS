const initState = {
    shownav: false,
}


const reducerShowNav = (state = initState, action) => {

    switch (action.type) {
        case 'shownav/addShowNav':
            return{
                shownav: action.payload
            }
        default:
            return state
    }
}

export default reducerShowNav