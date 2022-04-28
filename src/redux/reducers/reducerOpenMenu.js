const initState = {
    openmenu: false,
}


const reducerOpenMenu = (state = initState, action) => {

    switch (action.type) {
        case 'ismenu/addOpenMenu':
            return{
             
                openmenu: action.payload
            }
        default:
            return state
    }
}

export default reducerOpenMenu