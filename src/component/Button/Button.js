import React, { memo, useContext } from 'react'
import {
    ContextDarkMode,
    ContextColorLight,
    ContextColorDark
} from '../../context/contexts';

const Button = (props) => {

    const { disabled, content, className, href, download } = props

    const { darkMode } = useContext(ContextDarkMode)
    const { colorLight } = useContext(ContextColorLight)
    const { colorDark } = useContext(ContextColorDark)
    
    return (
        <>
            {darkMode ? (
                <a href={href} download={download}>
                    <button disabled={disabled} className={className} style={{background: `${colorDark}`}}>{content}</button>
                </a>
            )
            : (
                <a href={href} download={download}>
                    <button disabled={disabled} className={className} style={{background: `${colorLight}`}}>{content}</button>
                </a>
            )}
        </>
    )
}

export default memo(Button)