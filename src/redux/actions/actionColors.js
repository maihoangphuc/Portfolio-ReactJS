export const addColorLight = (data) => {
    return {
        type: 'colorlight/addColorLight',
        payload: data
    }
}

export const addColorDark = (data) => {
    return {
        type: 'colordark/addColorDark',
        payload: data
    }
}