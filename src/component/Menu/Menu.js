import React, { memo, useEffect, useContext } from 'react'
import ListMenu from './ListMenu'

import { menuLists } from '../../pages/Header';

import {
    ContextDarkMode,
    ContextColorLight,
    ContextColorDark
} from '../../context/contexts';


const Menu = () => {

    const { darkMode } = useContext(ContextDarkMode)
    const { colorLight } = useContext(ContextColorLight)
    const { colorDark } = useContext(ContextColorDark)

    useEffect(() => {
        <>
            {darkMode ? (document.documentElement.style.cssText = `--color-menu-dark: ${colorDark}`): 
            (document.documentElement.style.cssText = `--color-menu-light: ${colorLight}`)}
        </>
    }, [colorDark, colorLight, darkMode])

    return (
        <>
            <ul className="
                delay
                mobile-sm:fixed
                mobile-sm:w-[70%]
                mobile-sm:h-[100%]
                mobile-sm:top-0
                mobile-sm:right-0
                mobile-sm:flex
                mobile-sm:flex-col
                mobile-sm:justify-center
                mobile-sm:items-center
                mobile-sm:z-[-1]
                mobile-sm:shadow-nav-mobile
                mobile-sm:bg-[#fffefe]
                mobile-sm:dark:bg-[#24272b]
                mobile-sm:delay

                mobile-lg:fixed
                mobile-lg:w-[70%]
                mobile-lg:h-[100%]
                mobile-lg:top-0
                mobile-lg:right-0
                mobile-lg:flex
                mobile-lg:flex-col
                mobile-lg:justify-center
                mobile-lg:items-center
                mobile-lg:z-[-1]
                mobile-lg:shadow-nav-mobile
        
                tablet-sm:fixed
                tablet-sm:w-[70%]
                tablet-sm:h-[100%]
                tablet-sm:top-0
                tablet-sm:right-0
                tablet-sm:flex
                tablet-sm:flex-col
                tablet-sm:justify-center
                tablet-sm:items-center
                tablet-sm:z-[-1]
        
                tablet-lg:relative
                tablet-lg:bg-transparent
                tablet-lg:dark:bg-transparent
                tablet-lg:w-auto
                tablet-lg:h-auto
                tablet-lg:flex-row
                tablet-lg:z-[1]
                tablet-lg:shadow-none
                
                laptop:relative
                laptop:w-auto
                laptop:bg-transparent
                laptop:dark:bg-transparent
                laptop:flex-row
                laptop:z-[1]
            ">
                {
                    menuLists.map((menuList, index) => (
                        <li 
                            key={index}
                            className="menu"
                        > 
                            {darkMode ? (<ListMenu menuList={menuList} index={index} activeClass="color-menu-dark"/>)
                            : (<ListMenu menuList={menuList} index={index} activeClass="color-menu-light"/>)}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default memo(Menu)