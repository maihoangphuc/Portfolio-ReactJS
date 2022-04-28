import React, { memo, useContext } from 'react'
import { ContextDarkMode, ContextColorLight, ContextColorDark } from '../../context/contexts'
import { colorsLight, colorsDark } from '../../customHook/useColors'

import logoLight1 from '../../assets/images/logo/logo-light1.png'
import logoLight2 from '../../assets/images/logo/logo-light2.png'
import logoLight3 from '../../assets/images/logo/logo-light3.png'
import logoLight4 from '../../assets/images/logo/logo-light4.png'

import logoDark1 from '../../assets/images/logo/logo-dark1.png'
import logoDark2 from '../../assets/images/logo/logo-dark2.png'
import logoDark3 from '../../assets/images/logo/logo-dark3.png'
import logoDark4 from '../../assets/images/logo/logo-dark4.png'


const Logo = () => {

    const { darkMode } = useContext(ContextDarkMode)
    const { colorLight } = useContext(ContextColorLight)
    const { colorDark } = useContext(ContextColorDark)

    const [colorLight1, colorLight2, colorLight3, colorLight4] = colorsLight
    const [colorDark1, colorDark2, colorDark3, colorDark4] = colorsDark

    return (
        <>
            <div className="mobile-sm:delay mobile-sm:w-[20px] mobile-lg:w-[25px] table-sm:w-[30px] cursor-pointer">
                {
                    darkMode ?
                    colorDark === colorDark1 ? <a href='/'><img src={logoDark1} alt="logoDark1" /></a> : '' ||
                    colorDark === colorDark2 ? <a href='/'><img src={logoDark2} alt="logoDark2" /></a> : '' ||
                    colorDark === colorDark3 ? <a href='/'><img src={logoDark3} alt="logoDark3" /></a> : '' ||
                    colorDark === colorDark4 ? <a href='/'><img src={logoDark4} alt="logoDark4" /></a> : '' :

                    colorLight === colorLight1 ? <a href='/'><img src={logoLight1} alt="logoLight1" /></a> : '' ||
                    colorLight === colorLight2 ? <a href='/'><img src={logoLight2} alt="logoLight2" /></a> : '' ||
                    colorLight === colorLight3 ? <a href='/'><img src={logoLight3} alt="logoLight3" /></a> : '' ||
                    colorLight === colorLight4 ? <a href='/'><img src={logoLight4} alt="logoLight4" /></a> : ''
                }
            </div>
        </>
    )
}

export default memo(Logo)