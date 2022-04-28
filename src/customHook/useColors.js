import { useState, useEffect } from 'react'

export const colorsLight = ['#99abb8', '#7781b7', '#abb787', '#66c4ac']
export const colorsDark = ['#51b089', '#9c9256', '#636aa0', '#5D6D7E']

const useColors = () => {

    const [colorLight, setColorLight] = useState(localStorage.getItem('colorLight') ? localStorage.getItem('colorLight') : colorsLight[0])
    const [colorDark, setColorDark] = useState(localStorage.getItem('colorDark') ? localStorage.getItem('colorDark') : colorsDark[3])
    
    useEffect(() => {
        localStorage.setItem('colorLight', colorLight ? colorLight : colorsLight[0])
    }, [colorLight]);

    useEffect(() => {
        localStorage.setItem('colorDark', colorDark ? colorDark : colorsDark[0])
    }, [colorDark]);

    return [colorLight, setColorLight, colorDark, setColorDark]
}

export default useColors