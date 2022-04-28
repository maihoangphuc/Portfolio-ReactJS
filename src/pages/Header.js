import React, { useContext } from 'react'

import HamburgerMenu from '../component/Menu/HamburgerMenu'
import DarkMode from '../component/DarkMode/DarkMode';
import Logo from '../component/Logo/Logo';
import { ContextShowNav } from '../context/contexts';

export const menuLists = ['Home', 'About', 'Skill', 'Project', 'Contact']

const Header = () => {

    const { showNav } = useContext(ContextShowNav)
    
    return (
        <>
            <nav className={showNav ? "nav-active shadow-nav" : "nav"}>
                {/* flex logo & menu */}
                <div className="flex justify-between items-center container-90">

                    {/* logo */}
                    <Logo/>
                    {/* end logo */}

                    {/* flex menu & dark mode */}
                    <div className="flex items-center">

                        {/* list menu */}
                        <div>
                            <HamburgerMenu/>
                        </div>
                        {/* end list menu */}

                        {/* dark mode */}
                        <div>
                            <DarkMode/>
                        </div>
                        {/* end dark mode */}

                    </div>
                    {/* end flex menu & dark mode */}
                </div>
                {/* end flex logo & menu */}
            </nav>
        </>
    )
}

export default Header