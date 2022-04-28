const initState = {
    gototop: false,
}


const reducerGoToTop = (state = initState, action) => {

    switch (action.type) {
        case 'gototop/addGoToTop':
            return{
               
                gototop: action.payload
            }
        
        default:
            return state
    }
}

export default reducerGoToTop