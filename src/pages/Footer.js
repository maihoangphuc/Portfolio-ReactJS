import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import { menuLists } from '../pages/Header'
import BgFooter from '../component/Background/BgFooter'

import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaGithubAlt } from 'react-icons/fa'

import {
    ContextDarkMode,
    ContextColorLight,
    ContextColorDark
} from '../context/contexts';


const Footer = () => {
    
    const { darkMode } = useContext(ContextDarkMode)
    const { colorLight } = useContext(ContextColorLight)
    const { colorDark } = useContext(ContextColorDark)

    return (
        <>
            <section
                className="
                    mobile-sm:relative
                    z-[1]
                    mobile-sm:flex
                    mobile-sm:items-center
                    mobile-sm:justify-center
                    mobile-sm:w-[100%]
                    mobile-sm:h-[250px]
                    mobile-sm:delay

                    mobile-lg:h-[270px]
                    mobile-lg:mt-[-20px]

                    tablet-sm:h-[290px]
                    tablet-sm:mt-[200px]
                    
                    tablet-lg:h-[300px]
                    tablet-lg:mt-0

                    laptop:z-[2]
                    laptop:h-[300px]
                    laptop:mt-[-80px]
                "
            >
                <BgFooter/>

                <div className="mobile-sm:pt-[35px] mobile-lg:pt-[60px] w-[100%] h-[100%] flex flex-col justify-center items-center container-90">

                {darkMode ? (
                    <div style={{color: colorDark}} className="mobile-sm:text-[20px] mobile-lg:text-[25px] font-[550] mb-[20px]">
                        <span>MHP</span>
                    </div>
                )
                : (
                    <div style={{color: colorLight}} className="mobile-sm:text-[20px] mobile-lg:text-[25px] font-[550] mb-[20px]">
                        <span>MHP</span>
                    </div>
                )}

                    <div>
                        <ul className="flex">
                            {
                                menuLists.map((menuList, index) => (
                                    <li 
                                        key={index}
                                        className="mobile-sm:mx-[5px] mx-[10px] my-0"
                                    >
                                        <Link
                                            href="#home"
                                            key={index}
                                            to={menuList}
                                            smooth={true}
                                            offset={-100}
                                            className="
                                                mobile-sm:text-[14px]

                                                mobile-lg:text-[16px]
                                                text-[#a1a9ae]
                                                font-[500]
                                                hover:text-[#8e929e]
                                            "
                                        >
                                            {menuList}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <ul className="flex">
                            <li>
                                <a href="https://www.facebook.com/Mai.Hoang.Phuc.1.2.3/" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF className="text-[#bccac0] my-[20px] mx-[15px] hover:text-[#86d17f]"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/Mai_Hoang_Phuc" target="_blank" rel="noopener noreferrer">
                                    <BsTwitter className="text-[#bccac0] my-[20px] mx-[15px] hover:text-[#beb37e]"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/mai.hoang.phuc/" target="_blank" rel="noopener noreferrer">
                                    <BsInstagram className="text-[#bccac0] my-[20px] mx-[15px] hover:text-[#858bc5]"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/maihoangphuc" target="_blank" rel="noopener noreferrer">
                                    <FaGithubAlt className="text-[#bccac0] my-[20px] mx-[15px] hover:text-[#c497b5]"/>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="z-[1] relative w-[100%] border-b-[1px] border-b-solid dark:border-b-[#292c31] border-b-[#40454c]"></div>

                    <div className="mt-[20px]">
                        <span className="mobile-sm:text-[13px] mobile-lg:text-[15px] text-[#a1a9ae]">© 2022 Design by
                            <a className="text-[#816d56]" href="https://www.facebook.com/Mai.Hoang.Phuc.1.2.3/" target="_blank" rel="noopener noreferrer"> maihoangphuc</a>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer