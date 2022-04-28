import React, { memo, useContext } from 'react'

import {
    ContextDarkMode,
    ContextResize
  } from '../../context/contexts';

const BgPage = () => {

    const { darkMode } = useContext(ContextDarkMode)
    const { isMobile } = useContext(ContextResize)

    return (
        <>
            {isMobile ? (
                <>
                    {darkMode ? (
                        <>
                            <div
                                style={{background:'#1c1e21'}}
                                className="
                                    absolute
                                    delay
                                    bg-mobile-page-dark

                                    mobile-sm:w-[100%]
                                    mobile-sm:h-[100%]

                                    mobile-lg:w-[100%]
                                    mobile-lg:h-[100%]

                                    tablet-sm:w-[100%]
                                    tablet-sm:h-[100%]
                                " 
                            >
                            </div>
                        </>
                    ) : (
                        <>
                            <div
                                style={{background:'#fbfdfc'}}
                                className="
                                    absolute
                                    delay
                                    bg-mobile-page-light

                                    mobile-sm:w-[100%]
                                    mobile-sm:h-[100%]

                                    mobile-lg:w-[100%]
                                    mobile-lg:h-[100%]

                                    tablet-sm:w-[100%]
                                    tablet-sm:h-[100%]
                                " 
                            >
                            </div>
                        </>
                    )}
                </>
            )
                
            : (
                
                <>
                    {darkMode ? (
                        <>
                            <div
                                style={{background:'#1c1e21'}}
                                className="
                                    bg-page-dark
                                    absolute
                                    delay

                                    mobile-sm:w-[100%]
                                    mobile-sm:h-[100%]

                                    mobile-lg:w-[100%]
                                    mobile-lg:h-[100%]

                                    tablet-sm:w-[100%]
                                    tablet-sm:h-[100%]
                                " 
                            >
                            </div>
                        </>
                    ) : (
                        <>
                            <div
                                style={{background:'#fbfdfc'}}
                                className="
                                    bg-page-light
                                    absolute
                                    delay

                                    mobile-sm:w-[100%]
                                    mobile-sm:h-[100%]

                                    mobile-lg:w-[100%]
                                    mobile-lg:h-[100%]

                                    tablet-sm:w-[100%]
                                    tablet-sm:h-[100%]
                                " 
                            >
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default memo(BgPage)