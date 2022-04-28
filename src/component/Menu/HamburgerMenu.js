import React, { memo, useContext } from 'react'

import { BiMenuAltRight } from 'react-icons/bi';
import { VscClose } from 'react-icons/vsc';
import Menu from './Menu';
import {
    ContextResize,
    ContextOpenMenu,
    ContextDarkMode,
    ContextColorLight,
    ContextColorDark
} from '../../context/contexts';



const HamburgerMenu = () => {

    const { isMobile } = useContext(ContextResize)
    const { openMenu, setOpenMenu } = useContext(ContextOpenMenu)
    const { darkMode } = useContext(ContextDarkMode)
    const { colorLight } = useContext(ContextColorLight)
    const { colorDark } = useContext(ContextColorDark)
    
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const styleColorLight = {
        color: colorLight
    }

    const styleColorDark = {
        color: colorDark
    }

    return (
        <>
            {openMenu && isMobile ? (
                <>
                    {darkMode ? (
                        <>
                            <VscClose
                                style={styleColorDark}
                                className="hamburger-menu"
                                onClick={handleOpenMenu}
                            />
                            <Menu />
                        </>
                    ) : (
                        <>
                            <VscClose
                                style={styleColorLight}
                                className="hamburger-menu"
                                onClick={handleOpenMenu}
                            />
                            <Menu/>
                        </>
                    )}
                </>
            ) : !openMenu && isMobile ? (
                <>
                    {darkMode ? (
                        <>
                            <BiMenuAltRight
                                style={styleColorDark}
                                className="hamburger-menu"
                                onClick={handleOpenMenu}
                            />
                        </>
                    ): (
                        <>
                            <BiMenuAltRight
                                style={styleColorLight}
                                className="hamburger-menu"
                                onClick={handleOpenMenu}
                            /> 
                        </>
                    )}
                </>
            ) : (
                <Menu />
            )}
        </>
    )
}

export default memo(HamburgerMenu)