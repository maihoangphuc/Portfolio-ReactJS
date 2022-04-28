import React, { useContext, memo } from 'react'
import {
    ContextDarkMode,
    ContextColorLight,
    ContextColorDark
} from '../../context/contexts';

const TextBox = (props) => {

    const { src, title, content } = props

    const { darkMode } = useContext(ContextDarkMode)
    const { colorLight } = useContext(ContextColorLight)
    const { colorDark } = useContext(ContextColorDark)

    return (
        <>
            <div
                className="
                    mobile-sm:w-[70%]
                    mobile-sm:flex
                    mobile-sm:flex-col
                    mobile-sm:items-center

                    mobile-lg:w-[70%]
                    mobile-lg:flex
                    mobile-lg:flex-col
                    mobile-lg:items-center
        
                    tablet-lg:w-[50%]

                    laptop:w-[100%]
                "
            >
                <img
                    src={src}
                    alt="svg"
                    className="
                        mobile-sm:w-[23px]
                        mobile-sm:mb-[10px]

                        mobile-lg:w-[30px]
                        mobile-lg:mb-[10px]
                        
                        tablet-lg:w-[30px]
                        laptop:w-[40px]
                    "
                />
                
                <h2
                    className="
                        mobile-sm:dark:color-gray-light
                        mobile-sm:color-gray-bold
                        mobile-sm:text-[14px]

                        mobile-lg:text-[17px]
                        mobile-lg:dark:color-gray-light
                        mobile-lg:color-gray-bold
                        font-[700]
                    "
                >
                    {title}
                </h2>



                {darkMode ? (
                    <p
                        style={{color: `${colorDark}`}}
                        className="
                            mobile-sm:w-[60%]
                            mobile-sm:mt-[10px]
                            mobile-sm:text
                            mobile-sm:text-center

                            mobile-lg:w-[60%]
                            mobile-lg:mt-[10px]
                            mobile-lg:text
                            mobile-lg:text-center
                        
                            tablet-lg:w-[90%]
                        
                            laptop:w-[60%]
                        "
                    >
                        {content}
                    </p>
                )
                : (
                    <p
                        style={{color: `${colorLight}`}}
                        className="
                            mobile-sm:w-[60%]
                            mobile-sm:mt-[10px]
                            mobile-sm:text
                            mobile-sm:text-center

                            mobile-lg:w-[60%]
                            mobile-lg:mt-[10px]
                            mobile-lg:text
                            mobile-lg:text-center
                        
                            tablet-lg:w-[90%]
                        
                            laptop:w-[60%]
                        "
                    >
                        {content}
                    </p>
                )}

                
            </div>
        </>
    )
}

export default memo(TextBox)