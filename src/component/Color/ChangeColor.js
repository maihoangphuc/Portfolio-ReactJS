import React, { memo, useContext } from 'react'

import ColorDark from "./ColorDark"
import ColorLight from "./ColorLight"

import { ContextClickColor, ContextDarkMode } from '../../context/contexts';


const ChangeColor = () => {
    const { setClickColor } = useContext(ContextClickColor)
    const { darkMode } = useContext(ContextDarkMode)
    

    return (
        <>
            <div className='flex' onClick={()=>setClickColor(e=>!e)}>
                {darkMode ? <ColorDark/> : <ColorLight/> }
            </div>
        </>
    )
}

export default memo(ChangeColor)