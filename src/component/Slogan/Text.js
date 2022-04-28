import React, { memo, useContext } from 'react'
import {
    ContextDarkMode,
    ContextColorLight,
    ContextColorDark
} from '../../context/contexts';

const Text = (props) => {

    const { content, className } = props

    const { darkMode } = useContext(ContextDarkMode)
    const { colorLight } = useContext(ContextColorLight)
    const { colorDark } = useContext(ContextColorDark)
    
    return (
        <>
            {darkMode ? (
                <span className={className} style={{color: `${colorDark}`}}> {content}</span>
            )
            : (
                <span className={className} style={{color: `${colorLight}`}}> {content}</span>
            )}
        </>
    )
}

export default memo(Text)