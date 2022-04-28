import React, { memo, useContext } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs';

import { ContextDarkMode, ContextColorLight } from '../../context/contexts';


const DarkMode = () => {

    const { darkMode, setDarkMode } = useContext(ContextDarkMode)
    const { colorLight } = useContext(ContextColorLight)

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    
    return (
        <>
            <div className="cursor-pointer flex items-center ml-[20px]">
                {darkMode ? (<BsSun className="darkmode" onClick={handleDarkMode}/>
                ): (<BsMoon style={{color: `${colorLight}`}} className="darkmode" onClick={handleDarkMode}/>)}
            </div>
        </>
    )
}

export default memo(DarkMode)