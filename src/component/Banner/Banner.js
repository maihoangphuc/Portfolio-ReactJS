import React, { memo, useContext } from 'react'
import {
  ContextDarkMode,
  ContextColorLight,
  ContextColorDark
} from '../../context/contexts';

const Banner = (props) => {

  const { className } = props

  const { darkMode } = useContext(ContextDarkMode)
  const { colorLight } = useContext(ContextColorLight)
  const { colorDark } = useContext(ContextColorDark)


  return (
    <>
      {darkMode ? (
        <div
          className={className}
          style={{backgroundColor: `${colorDark}`}}
        >
        </div>
      )
      : (
        <div
          className={className}
          style={{backgroundColor: `${colorLight}`}}
        >
        </div>
      )}
    </>
  )
}

export default memo(Banner)