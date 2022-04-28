import React, { useContext } from 'react'
import { Link, Element } from 'react-scroll'

import Image1 from '../assets/images/img/image1.png'

import Slogan from '../component/Slogan/Slogan';
import Text from '../component/Slogan/Text';
import ChangeColor from '../component/Color/ChangeColor';
import Banner from '../component/Banner/Banner';

import { BsMouse } from 'react-icons/bs';
import { BsArrowDownShort } from 'react-icons/bs';
import { menuLists } from './Header';

import {
    ContextDarkMode,
    ContextClickColor,
    ContextColorLight,
    ContextColorDark,
} from '../context/contexts';


const Home = () => {

    const { clickColor, setClickColor } = useContext(ContextClickColor)
    const { darkMode } = useContext(ContextDarkMode)
    const { colorLight } = useContext(ContextColorLight)
    const { colorDark } = useContext(ContextColorDark)

    const [home, about] = menuLists

    return (
        <>
            <Element
                id={home}
                className="
                    mobile-sm:h-auto
                    mobile-sm:pt-[150px]
                    mobile-sm:container-90
                    mobile-sm:delay

                    mobile-lg:h-auto
                    mobile-lg:pt-[100px]
                    mobile-lg:container-90

                    tablet-sm:pt-[130px]

                    tablet-lg:pt-[130px]
                    tablet-lg:h-[730px]

                    laptop:h-[730px]
                    laptop:pt-[100px]
                "
            >

                    
                {/* flex icon & slogan, banner */}
                <div className="h-[100%] flex justify-between items-center">

                    {/* flex slogan & banner */}
                    <div className="
                            mobile-sm:flex
                            mobile-sm:flex-col-reverse
                            mobile-sm:justify-center
                            mobile-sm:items-center
                            mobile-sm:w-[100%]
                            mobile-sm:text-center

                            mobile-lg:flex
                            mobile-lg:flex-col-reverse
                            mobile-lg:justify-center
                            mobile-lg:items-center
                            mobile-lg:w-[100%]
                            mobile-lg:text-center
                           
                            tablet-sm:flex-col-reverse       
                            
                            tablet-lg:flex-row
                            tablet-lg:text-left
                            tablet-lg:pl-[75px]
                            
                            laptop:flex-row
                            laptop:justify-between
                            laptop:pl-[90px]
                        "
                    >
                        {/* content */}
                        <div
                            className="
                                mobile-sm:mt-[30px]
                                mobile-sm:w-[100%]

                                mobile-lg:w-[100%]
                            "
                        >
                            {/* slogan */}
                            <Slogan
                                text="Hi, I'm"
                                name="Mai Hoang Phuc"
                                className={clickColor === true ? 'slogan animate__animated animate__fadeInDown' : 'slogan'}
                            />
                            {/* end slogan */}

                            {/* text small */}
                            <div className={clickColor === true ? 'text-small animate__animated animate__fadeInUp' : 'text-small'}>
                                {'<Frontend developer/>'}
                            </div>
                            {/* end text small */}

                            {/* text */}
                            <div
                                className="
                                    mobile-sm:flex
                                    mobile-sm:justify-center

                                    mobile-lg:flex
                                    mobile-lg:justify-center

                                    tablet-lg:justify-start
                                "
                            >
                                <div
                                    className="
                                        mobile-sm:w-[77%]
                                        mobile-sm:text-clip

                                        mobile-lg:w-[75%]
                                        mobile-lg:text-center
                    
                                        tablet-sm:w-[60%]
                    
                                        tablet-lg:text-left
                                        tablet-lg:w-[60%]
                    
                                        laptop:w-[50%]
                                    "
                                >
                                    <Text
                                        content="I am a technology enthusiast, I love web design, it seems to be indispensable in my life"
                                        className={clickColor === true ? 'text animate__animated animate__flash' : 'text'}
                                    />
                                </div>
                            </div>
                            {/* end text */}

                            <div
                                className="
                                    mobile-sm:flex
                                    mobile-sm:justify-center
                                    mobile-sm:mt-[10px]
                                    mobile-sm:w-[100%]

                                    mobile-lg:flex
                                    mobile-lg:justify-center
                                    mobile-lg:mt-[10px]
                                    mobile-lg:w-[100%]

                                    tablet-sm:mt-[20px]

                                    tablet-lg:justify-start
                                "
                            >
                                <ChangeColor/>
                            </div>
                            
                            {/* scroll down */}
                            <Link to={about} smooth={true} offset={-100} spy={true}>
                                <span
                                    className="
                                        group

                                        mobile-sm:mt-[10px]
                                        mobile-sm:inline-flex
                                        mobile-sm:items-center
                                        mobile-sm:w-auto
                                        mobile-sm:gap-[5px]
                                        mobile-sm:cursor-pointer

                                        mobile-lg:mt-[10px]
                                        mobile-lg:inline-flex
                                        mobile-lg:items-center
                                        mobile-lg:w-auto
                                        mobile-lg:gap-[5px]
                                        mobile-lg:cursor-pointer

                                        tablet-lg:mt-[50px]
                                    "
                                >
                                    {darkMode ? (<BsMouse style={{color: `${colorDark}`}} className="icon-mouse"/>) 
                                    : (<BsMouse style={{color: `${colorLight}`}} className="icon-mouse"/>)}

                                    <div className="h-[50px] inline-flex items-center gap-[5px]">
                                        <div
                                            className="
                                                mobile-sm:text-[13px]
                                                mobile-sm:color-gray-bold
                                                mobile-sm:dark:color-gray-light
                                                mobile-sm:font-semibold
                                                mobile-sm:group-hover:color-gray-bold

                                                mobile-lg:text-[15px]
                                                mobile-lg:color-gray-bold
                                                mobile-lg:dark:color-gray-light
                                                mobile-lg:font-semibold
                                                mobile-lg:group-hover:color-gray-bold

                                                tablet-sm:text-[16px]

                                                laptop:text-[18px]
                                            "
                                        >
                                            Scroll down
                                        </div>

                                        {darkMode ? (<BsArrowDownShort style={{color: `${colorDark}`}} className="icon-arrow-down"/>) 
                                        : (<BsArrowDownShort style={{color: `${colorLight}`}} className="icon-arrow-down"/>)}

                                    </div>
                                </span>
                            </Link>
                            {/* end scroll down */}

                        </div>
                        {/* end content */}

                        {/* banner */}
                        <div>
                            <Banner
                                className="
                                    mobile-sm:translate-shape
                                    mobile-sm:rounded-shape
                                    mobile-sm:animate-border
                                    mobile-sm:w-[220px]
                                    mobile-sm:h-[220px]
                                    mobile-sm:mt-[-50px]

                                    mobile-lg:translate-shape
                                    mobile-lg:rounded-shape
                                    mobile-lg:animate-border
                                    mobile-lg:w-[280px]
                                    mobile-lg:h-[280px]
                                    mobile-lg:mt-[20px]
                            
                                    tablet-sm:w-[320px]
                                    tablet-sm:h-[320px]
                                    tablet-sm:mt-[-30px]
                            
                                    tablet-lg:w-[300px]
                                    tablet-lg:h-[300px]
                            
                                    laptop:w-[380px]
                                    laptop:h-[380px]
                                    laptop:right-0
                                    laptop:top-[50%]
                                "
                            />

                            <img
                                src={Image1}
                                onAnimationEnd={()=>setClickColor(e=>!e)}
                                className={clickColor === true ? 'image1 animate__animated animate__jackInTheBox' : 'image1'}
                                alt="people"
                            />
                        </div>
                        {/* end banner */}
                    </div>
                    {/* end flex slogan & banner */}
                </div>
                {/* end flex icon & slogan, banner */}
            </Element>
        </>
    )
}

export default Home