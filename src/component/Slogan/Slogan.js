import React, { memo, useContext } from 'react'
import {
    ContextDarkMode,
    ContextColorLight,
    ContextColorDark
} from '../../context/contexts';


const Slogan = (props) => {

    const { text, name, className } = props

    const { darkMode } = useContext(ContextDarkMode)
    const { colorLight } = useContext(ContextColorLight)
    const { colorDark } = useContext(ContextColorDark)
  
    return (
        <div className={className}>
            {text}

            {darkMode ? (
                <span style={{color: `${colorDark}`}}> {name}</span>
            )
            : (
                <span style={{color: `${colorLight}`}}> {name}</span>
            )}
        </div>
    )
}

export default memo(Slogan)