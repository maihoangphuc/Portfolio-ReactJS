import React, { memo, useContext } from 'react'

import BgFooterLight from '../../assets/background/bg-footer-light.png'
import BgFooterDark from '../../assets/background/bg-footer-dark.png'
import BgMobileFooterLight from '../../assets/background/bg-mobile-footer-light.png'
import BgMobileFooterDark from '../../assets/background/bg-mobile-footer-dark.png'

import {
    ContextDarkMode,
    ContextResize
  } from '../../context/contexts';

const BgFooter = () => {

    const { darkMode } = useContext(ContextDarkMode)
    const { isMobile } = useContext(ContextResize)

    return (
        <>
            {isMobile ? (
                <>
                    {darkMode ? (
                        <img
                            src={BgMobileFooterDark}
                            alt="BgMobilePage"
                            className="
                                absolute
                                z-[1]
                              
                                mobile-sm:w-[100%]
                                mobile-sm:h-[100%]
                                mobile-sm:delay

                                mobile-lg:w-[100%]
                                mobile-lg:h-[100%]

                                tablet-sm:w-[100%]
                                tablet-sm:h-[100%]
                            "
                        />
                    ) : (
                        <img
                            src={BgMobileFooterLight}
                            alt="BgMobilePage"
                            className="
                                absolute
                                delay

                                mobile-sm:w-[100%]
                                mobile-sm:h-[100%]
                                mobile-sm:delay

                                mobile-lg:w-[100%]
                                mobile-lg:h-[100%]

                                tablet-sm:w-[100%]
                                tablet-sm:h-[100%]
                            "
                        />
                    )}
                </>
            )
                
            : (
                
                <>
                    {darkMode ? (
                        <img
                            src={BgFooterDark}
                            alt="BgMobilePage"
                            className="
                                absolute
                                delay

                                mobile-sm:w-[100%]
                                mobile-sm:h-[100%]
                                mobile-sm:delay

                                mobile-lg:w-[100%]
                                mobile-lg:h-[100%]

                                tablet-sm:w-[100%]
                                tablet-sm:h-[100%]
                            "
                        />
                    ) : (
                        <img
                            src={BgFooterLight}
                            alt="BgMobilePage"
                            className="
                                absolute
                                delay

                                mobile-sm:w-[100%]
                                mobile-sm:h-[100%]
                                mobile-sm:delay

                                mobile-lg:w-[100%]
                                mobile-lg:h-[100%]

                                tablet-sm:w-[100%]
                                tablet-sm:h-[100%]
                            "
                        />
                    )}
                </>
            )}
        </>
    )
}

export default memo(BgFooter)