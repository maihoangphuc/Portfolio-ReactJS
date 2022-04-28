import React, { createContext, useMemo } from 'react'
import useGoToTop from '../customHook/useGoToTop'
import useClickColor from '../customHook/useClickColor'
import useDarkMode from '../customHook/useDarkMode'
import useColors from '../customHook/useColors'
import useOpenMenu from '../customHook/useOpenMenu'
import useResize from '../customHook/useResize'
import useShowNav from '../customHook/useShowNav'


const ContextGoToTop = createContext()
const ContextClickColor = createContext()
const ContextDarkMode = createContext()
const ContextColorLight = createContext()
const ContextColorDark = createContext()
const ContextOpenMenu = createContext()
const ContextResize = createContext()
const ContextShowNav = createContext()

const Context = ({ children }) => {
    
    const [showGoToTop, setShowGoToTop] = useGoToTop()
    const [clickColor, setClickColor] = useClickColor()
    const [darkMode, setDarkMode] = useDarkMode()
    const [colorLight, setColorLight, colorDark, setColorDark] = useColors()
    const [openMenu, setOpenMenu] = useOpenMenu()
    const [isMobile, setIsMobile] = useResize()
    const [showNav, setShowNav] = useShowNav()

    const valueGoToTop = useMemo(()=>({
        showGoToTop,
        setShowGoToTop
    }), [setShowGoToTop, showGoToTop])

    const valueClickColor = useMemo(()=>({
        clickColor,
        setClickColor
    }), [clickColor, setClickColor])

    const valueDarkMode = useMemo(()=>({
        darkMode,
        setDarkMode
    }), [darkMode, setDarkMode])


    const valueColorLight = useMemo(()=>({
        colorLight,
        setColorLight
    }), [colorLight, setColorLight])

    const valueColorDark = useMemo(()=>({
        colorDark,
        setColorDark
    }), [colorDark, setColorDark])

    const valueOpenMenu =  useMemo(()=>({
        openMenu,
        setOpenMenu
    }), [openMenu, setOpenMenu])

    const valueResize = useMemo(()=>({
        isMobile,
        setIsMobile
    }), [isMobile, setIsMobile])

    const valueShowNav = useMemo(()=>({
        showNav,
        setShowNav
    }), [setShowNav, showNav])


    return (
        <>
            <ContextGoToTop.Provider value={valueGoToTop}>
            <ContextClickColor.Provider value={valueClickColor}>
            <ContextDarkMode.Provider value={valueDarkMode}>
            <ContextColorLight.Provider value={valueColorLight}>
            <ContextColorDark.Provider value={valueColorDark}>
            <ContextOpenMenu.Provider value={valueOpenMenu}>
            <ContextResize.Provider value={valueResize}>
            <ContextShowNav.Provider value={valueShowNav}>
                {children}
            </ContextShowNav.Provider>
            </ContextResize.Provider>
            </ContextOpenMenu.Provider>
            </ContextColorDark.Provider>
            </ContextColorLight.Provider>
            </ContextDarkMode.Provider>
            </ContextClickColor.Provider>
            </ContextGoToTop.Provider>
        </>
    )
}

export {
    Context,
    ContextGoToTop,
    ContextClickColor,
    ContextDarkMode,
    ContextColorLight,
    ContextColorDark,
    ContextOpenMenu,
    ContextResize,
    ContextShowNav
}