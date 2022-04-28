const initState = {
    colorlight: localStorage.getItem('colorLight') ? localStorage.getItem('colorLight') : '#99abb8',
    colordark: localStorage.getItem('colorDark') ? localStorage.getItem('colorDark') : '#5D6D7E',
}


const reducerColors = (state = initState, action) => {

    switch (action.type) {
        case 'colorlight/addColorLight':
            return{
                ...state,
                colorlight: action.payload
            }
        case 'colordark/addColorDark':
            return{
                ...state,
                colordark: action.payload
            }
        default:
            return state
    }
}

export default reducerColors