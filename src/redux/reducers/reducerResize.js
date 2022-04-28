const initState = {
    ismobile: false,
}


const reducerResize = (state = initState, action) => {

    switch (action.type) {
       
        case 'ismobile/addIsMobile':
            return{
               
                ismobile: action.payload
            }
        default:
            return state
    }
}

export default reducerResize