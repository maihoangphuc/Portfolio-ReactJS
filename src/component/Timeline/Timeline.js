import React, { useContext, memo } from 'react'
import {
    ContextDarkMode,
    ContextColorLight,
    ContextColorDark
} from '../../context/contexts';

const Timeline = (props) => {

    const { time, name, type, content } = props

    const { darkMode } = useContext(ContextDarkMode)
    const { colorLight } = useContext(ContextColorLight)
    const { colorDark } = useContext(ContextColorDark)

    return (
        <>
            {darkMode ? (
                <li className="mt-10 ml-6 w-[400px]">
                    <div
                        style={{borderColor: colorDark}}
                        className="
                            absolute
                            w-4
                            h-4
                            bg-white
                            border-4
                            rounded-full
                            left-[-0.6rem]
                        "
                    >
                    </div>
                    <p
                        className="
                            mobile-sm:relative
                            mobile-sm:text-[22px]
                            mobile-sm:left-0

                            mobile-lg:relative
                            mobile-lg:left-0
                            mobile-lg:text-[18px]

                            tablet-lg:left-[-90px]
                            tablet-lg:absolute

                            font-bold
                            dark:color-gray-light
                            color-gray-bold
                        "
                    >
                        {time}
                    </p>

                    <p
                        style={{color: colorDark}}
                        className="
                            mobile-sm:text-[21px]
                            mobile-lg:text-[18px]
                            tablet-lg:ml-[20px]
                            font-bold
                            text-lg
                            mb-1
                        "
                    >
                        {name}
                    </p>
                    
                    <p 
                        className="
                            mobile-sm:text-[18px]

                            mobile-lg:text-[16px]

                            tablet-lg:ml-[20px]
                            font-bold
                            text-sm
                            mb-2
                            dark:color-gray-light
                            color-gray-bold
                        "
                    >
                        {type}
                    </p>

                    <p
                        className="
                            mobile-sm:text-[22px]
                            mobile-sm:leading-[30px]
                            mobile-sm:pt-[10px]

                            mobile-lg:leading-0
                            mobile-lg:pt-0
                            mobile-lg:text-[17px]
                            
                            tablet-lg:ml-[20px]
                            text-[#b9a2a2]
                        "
                    >
                        {content}
                    </p>
                </li>
            )
            : (
                <li className="mt-10 ml-6 w-[400px]">
                    <div
                        style={{borderColor: colorLight}}
                        className="
                            absolute
                            w-4
                            h-4
                            bg-white
                            border-4
                            rounded-full
                            left-[-0.6rem]
                        "
                    >
                    </div>
                    <p
                        className="
                            mobile-sm:relative
                            mobile-sm:text-[22px]
                            mobile-sm:left-0

                            mobile-lg:relative
                            mobile-lg:left-0
                            mobile-lg:text-[18px]

                            tablet-lg:left-[-90px]
                            tablet-lg:absolute

                            font-bold
                            dark:color-gray-light
                            color-gray-bold
                        "
                    >
                        {time}
                    </p>

                    <p
                        style={{color: colorLight}}
                        className="
                            mobile-sm:text-[21px]
                            mobile-lg:text-[18px]
                            tablet-lg:ml-[20px]
                            font-bold
                            text-lg
                            mb-1
                        "
                    >
                        {name}
                    </p>
                    
                    <p 
                        className="
                            mobile-sm:text-[18px]

                            mobile-lg:text-[16px]

                            tablet-lg:ml-[20px]
                            font-bold
                            text-sm
                            mb-2
                            dark:color-gray-light
                            color-gray-bold
                        "
                    >
                        {type}
                    </p>

                    <p
                        className="
                            mobile-sm:text-[22px]
                            mobile-sm:leading-[30px]
                            mobile-sm:pt-[10px]

                            mobile-lg:leading-0
                            mobile-lg:pt-0
                            mobile-lg:text-[17px]
                            
                            tablet-lg:ml-[20px]
                            text-[#b9a2a2]
                        "
                    >
                        {content}
                    </p>
                </li>
            )}
        </>
    )
}


const Timelines = () => {

    return (
        <>
            <Timeline
                time="Present"
                name="Website profile"
                type="(Personal Project)"
                content="self-introduction website"
            />
            <Timeline
                time="2022"
                name="Deep Virtual Try On With Clothes Transform"
                type="(Personal Project)"
                content="an image-based virtual try-on system with deep learning"
            />
            <Timeline
                time="2021"
                name="3D Simulation of Binh Duong Leadership"
                type="(Personal Project)"
                content="simulate Binh Duong leaders in 3D based on augmented reality technology"
            />
            <Timeline
                time="2020"
                name="Website That Sells Headphones"
                type="(Personal Project)"
                content="design a multi-page static website to sell headphones"
            />
        </>
    )
}

export default memo(Timelines)