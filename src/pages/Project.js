import React, { useContext } from 'react'
import { Element } from "react-scroll";
import { menuLists } from './Header'
import Title from '../component/Title/Title'
import TitleSmall from '../component/Title/TitleSmall'
import Timelines from '../component/Timeline/Timeline'
import BgPage from '../component/Background/BgPage'

import {
    ContextDarkMode,
    ContextColorLight,
    ContextColorDark
} from '../context/contexts';

const Project = () => {

    const [ , , , project] = menuLists

    const { darkMode } = useContext(ContextDarkMode)
    const { colorLight } = useContext(ContextColorLight)
    const { colorDark } = useContext(ContextColorDark)

    return (
        <>
            <section
                className="
                    mobile-sm:relative
                    mobile-sm:z-[2]
                    mobile-sm:flex
                    mobile-sm:items-center
                    mobile-sm:justify-center
                    mobile-sm:w-[100%]
                    mobile-sm:h-auto
                    mobile-sm:py-[55px]
                    mobile-sm:delay
                 
                    mobile-lg:py-[90px]
            
                    tablet-sm:py-[90px]
                    
                    tablet-lg:py-[100px]

                    laptop:py-[100px]
                "
            >
                <BgPage/>

                <Element
                    id={project}
                    className="
                        mobile-sm:container-90
                        mobile-sm:w-[100%]
                        mobile-sm:h-[510px]

                        mobile-lg:h-[700px]

                        tablet-sm:h-[720px]

                        tablet-lg:h-[680px]
                    "
                >
                    {/* title */}
                    <div className="text-center">
                        <TitleSmall content="Current Experience"/>
                        <Title content="Project" className="title"/>
                    </div>
                    {/* end title */}


                    {/* timeline */}
                    <div
                        className="
                            mobile-sm:flex
                            mobile-sm:justify-center
                            mobile-sm:item-center
                            mobile-sm:mt-[-220px]
                            mobile-sm:pl-[30px]

                            mobile-lg:mt-[-50px]
                            mobile-lg:pl-0

                            tablet-sm:mt-[-30px]

                            tablet-lg:mt-[-10px]
                        "
                    >
                        <div
                            className="
                                mobile-sm:scale-[.50]
                                mobile-lg:scale-[.85]
                                tablet-sm:scale-[.90]
                                tablet-lg:scale-[.90]
                            "
                        >

                        {darkMode ? (
                            <ol style={{borderColor: colorDark}} className="relative border-l-4 leading-loose">
                                <Timelines/>
                            </ol>
                        )
                        : (
                            <ol style={{borderColor: colorLight}} className="relative border-l-4 leading-loose">
                                <Timelines/>
                            </ol>
                        )}

                        </div>
                    </div>
                    {/* end timeline */}
                </Element>
            </section>
        </>
    )
}

export default Project