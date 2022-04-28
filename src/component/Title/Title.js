import React, { memo, useContext } from 'react'
import {
    ContextDarkMode,
    ContextColorLight,
    ContextColorDark
} from '../../context/contexts';

const Title = (props) => {
    
    const { className, content } = props

    const { darkMode } = useContext(ContextDarkMode)
    const { colorLight } = useContext(ContextColorLight)
    const { colorDark } = useContext(ContextColorDark)

    return (
        <>
            {darkMode ? (
                <div
                    style={{color: `${colorDark}`}}
                    className={className}
                >
                    {content}
                </div>
            )
            : (
                <div
                    style={{color: `${colorLight}`}}
                    className={className}
                >
                    {content}
                </div>
            )}
        </>
    )
}

export default memo(Title)