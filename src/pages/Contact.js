import React, { useContext, useRef, useState } from 'react'
import { Element } from "react-scroll";
import { menuLists } from './Header'
import Title from '../component/Title/Title'
import TitleSmall from '../component/Title/TitleSmall'
import Box from '../component/Box/Box';
import Button from '../component/Button/Button'

import { AiOutlineMail } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPhone } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'

import emailjs from 'emailjs-com';

import {
    ContextDarkMode,
    ContextColorLight,
    ContextColorDark,
    ContextClickColor,
  } from '../context/contexts';
import Toast from '../component/Toast/Toast';
import Social from '../component/Social/Social';

const Contact = () => {

    const [ , , , , contact] = menuLists

    const { darkMode } = useContext(ContextDarkMode)
    const { colorLight } = useContext(ContextColorLight)
    const { colorDark } = useContext(ContextColorDark)
    const { clickColor } = useContext(ContextClickColor)

    const formRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const messRef = useRef();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mess, setMess] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xvkqo7n', 'template_osopyyk', formRef.current, 'ahn09EsIZArzxLSH0')
            .then((result) => {
              console.log(result.text);
            }, (error) => {
              console.log(error.text);
            });

        showToast()

        setName('')
        setEmail('')
        setMess('')
        nameRef.current.focus()
    };

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMess = (e) => {
        setMess(e.target.value)
    }

    const showToast = () => {
        const toast = document.querySelector('.toast')
        toast.classList.remove('hidden')

        setTimeout(()=>{
            toast.classList.add('hidden')
        }, 4000)
    }

    return (
        <>
            <section
                className="
                    mobile-sm:relative
                    mobile-sm:z-[5]
                    mobile-sm:flex
                    mobile-sm:items-center
                    mobile-sm:justify-center
                    mobile-sm:w-[100%]
                    mobile-sm:h-[750px]
                    mobile-sm:mt-[20px]
                    mobile-sm:delay

                    mobile-lg:h-[980px]
                    mobile-lg:mt-0

                    tablet-sm:h-[840px]
                    
                    tablet-lg:h-[700px]
                    tablet-lg:mt-0

                    laptop:h-[770px]
                "
            >
                <Element
                    id={contact}
                    className="
                        mobile-sm:h-auto
                        mobile-sm:w-[100%]
                        mobile-sm:container-90
                    
                        mobile-lg:h-auto
                        mobile-lg:w-[100%]
                        mobile-lg:container-90

                        tablet-sm:h-[740px]

                        tablet-lg:h-[550px]

                        laptop:h-[700px]
                    "
                >
                    {/* title */}
                    <div className="text-center">
                        <TitleSmall content="Get In Touch"/>
                        <Title content="Contact" className="title"/>
                    </div>
                    {/* end title */}

                    {/* flex */}
                    <div
                        className="
                            mobile-sm:flex
                            mobile-sm:flex-col
                            mobile-sm:items-center
                            mobile-sm:mt-[20px]

                            mobile-lg:mt-[70px]

                            tablet-lg:flex-row
                            tablet-lg:items-start
                            laptop:flex-row
                            laptop:items-start
                        "
                    >
                        {/* box */}
                        <div
                            className="
                                mobile-sm:flex
                                mobile-sm:flex-col
                                mobile-sm:justify-center
                                mobile-sm:items-center
                                mobile-sm:w-[100%]

                                mobile-lg:flex
                                mobile-lg:flex-col
                                mobile-lg:justify-center
                                mobile-lg:items-center
                                mobile-lg:w-[100%]
                        
                                tablet-sm:flex-col
                
                                tablet-lg:w-[40%]
                                tablet-lg:h-[100%]
                                tablet-lg:flex-col
                                tablet-lg:items-end

                                laptop:w-[40%]
                                laptop:h-[100%]
                                laptop:flex-col
                                laptop:items-end
                            "
                        >
                        {darkMode ? (
                            <>
                                <Box size="box-contact" bgColor="#35323c" colorText="#6B7B8E" colorTitle="#fff" icon={<AiOutlineMail className="icon-textbox"/>} title="Email" link="Send Email" href="mailto:maihoangphuc000@gmail.com" />
                                <Box size="box-contact" bgColor="#35323c" colorText="#6B7B8E" colorTitle="#fff" icon={<RiMessengerLine className="icon-textbox"/>} title="Messenger" link="Send Message" href="https://m.me/Mai.Hoang.Phuc.1.2.3" />
                                <Box size="box-contact" bgColor={colorDark} colorText="#D4D7DD" colorTitle="#454d56" icon={<BsPhone className="icon-textbox"/>} title="Phone" link="Call Me" href="tel:0347023283" />
                            </>
                        )
                        : (
                            <>
                                <Box size="box-contact" bgColor="#DBDBDB" colorText="#6B7B8E" colorTitle="#454d56" icon={<AiOutlineMail className="icon-textbox"/>} title="Email" link="Send Email" href="mailto:maihoangphuc000@gmail.com" />
                                <Box size="box-contact" bgColor="#DBDBDB" colorText="#6B7B8E" colorTitle="#454d56" icon={<RiMessengerLine className="icon-textbox"/>} title="Messenger" link="Send Message" href="https://m.me/Mai.Hoang.Phuc.1.2.3" />
                                <Box size="box-contact" bgColor={colorLight} colorText="#D4D7DD" colorTitle="#fff" icon={<BsPhone className="icon-textbox"/>} title="Phone" link="Call Me" href="tel:0347023283" />
                            </>
                        )}
                        </div>
                        {/* end box */}


                        {/* mail */}
                        <div
                            className="
                                mobile-sm:h-auto
                                mobile-sm:w-[100%]

                                mobile-lg:w-[100%]
                                mobile-lg:mt-[10px]

                                tablet-sm:w-[100%]
                                tablet-sm:mt-[15px]

                                tablet-lg:w-[60%]
                                tablet-lg:ml-[30px]
                                tablet-lg:mt-0

                                laptop:w-[60%]
                                laptop:ml-[40px]
                            "
                        >
                            <form
                                ref={formRef}
                                onSubmit={sendEmail}
                                className="
                                    mobile-sm:flex
                                    mobile-sm:flex-col
                                    mobile-sm:h-[100%]
                                    mobile-sm:items-center

                                    tablet-sm:items-center
                                    tablet-lg:items-start
                                
                                    laptop:items-start
                                "
                            >
                                <input
                                    ref={nameRef}
                                    value={name}
                                    required
                                    spellCheck="false"
                                    type="text"
                                    name="name"
                                    placeholder="Your Full Name"
                                    onChange={handleName}
                                    className="
                                        mobile-sm:w-[180px]
                                        mobile-sm:py-[6px]
                                        mobile-sm:px-[10px]
                                        mobile-sm:rounded-[7px]
                                        mobile-sm:border-[1px]
                                        mobile-sm:border-solid
                                        mobile-sm:bg-transparent
                                        mobile-sm:outline-0
                                        mobile-sm:caret-[gray]
                                        mobile-sm:text-[#b0a2a2]
                                        dark:mobile-sm:border-[#505157]
                                        mobile-sm:border-[#dcd2d2]
                                        mobile-sm:placeholder:text-[13px]
                                        mobile-sm:mb-[15px]

                                        mobile-lg:w-[330px]
                                        mobile-lg:py-[10px]
                                        mobile-lg:px-[15px]
                                        
                                        tablet-sm:w-[350px]
                                        tablet-sm:placeholder:text-[15px]
                                        
                                        tablet-lg:w-[60%]
                                    
                                        laptop:w-[60%]
                                    "
                                />
                                <input
                                    ref={emailRef}
                                    value={email}
                                    required
                                    spellCheck="false"
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    onChange={handleEmail}
                                    className="
                                        mobile-sm:w-[180px]
                                        mobile-sm:py-[6px]
                                        mobile-sm:px-[10px]
                                        mobile-sm:rounded-[7px]
                                        mobile-sm:border-[1px]
                                        mobile-sm:border-solid
                                        mobile-sm:bg-transparent
                                        mobile-sm:outline-0
                                        mobile-sm:caret-[gray]
                                        mobile-sm:text-[#b0a2a2]
                                        dark:mobile-sm:border-[#505157]
                                        mobile-sm:border-[#dcd2d2]
                                        mobile-sm:placeholder:text-[13px]
                                        mobile-sm:mb-[15px]

                                        mobile-lg:w-[330px]
                                        mobile-lg:py-[10px]
                                        mobile-lg:px-[15px]
                                        
                                        tablet-sm:w-[350px]
                                        tablet-sm:placeholder:text-[15px]
                                        
                                        tablet-lg:w-[60%]
                                    
                                        laptop:w-[60%]
                                    "
                                />
                                <textarea
                                    ref={messRef}
                                    value={mess}
                                    style={{resize:'none'}}
                                    required
                                    spellCheck="false"
                                    name="message"
                                    placeholder="Your Message"
                                    onChange={handleMess}
                                    className="
                                        mobile-sm:w-[180px]
                                        mobile-sm:h-[100px]
                                        mobile-sm:py-[6px]
                                        mobile-sm:px-[10px]
                                        mobile-sm:rounded-[7px]
                                        mobile-sm:border-[1px]
                                        mobile-sm:border-solid
                                        mobile-sm:bg-transparent
                                        mobile-sm:outline-0
                                        mobile-sm:caret-[gray]
                                        mobile-sm:text-[#b0a2a2]
                                        dark:mobile-sm:border-[#505157]
                                        mobile-sm:border-[#dcd2d2]
                                        mobile-sm:placeholder:text-[13px]
                                        mobile-sm:mb-[15px]

                                        mobile-lg:w-[330px]
                                        mobile-lg:py-[10px]
                                        mobile-lg:px-[15px]
                                        mobile-lg:h-[140px]

                                        tablet-sm:w-[350px]
                                        tablet-sm:h-[150px]
                                        tablet-sm:placeholder:text-[15px]

                                        tablet-lg:w-[60%]
                                        tablet-lg:h-[150px]

                                        laptop:w-[60%]
                                        laptop:h-[180px]
                                    "
                                >
                                </textarea>
                                
                                {/* button */}
                                <Button
                                    disabled={!name || !email || !mess}
                                    content="Send Message"
                                    className={clickColor === true ? 'button' : 'button'}
                                />
                                {/* end button */}
                            </form>
                        </div>
                        {/* end mail */}
                    </div>
                    {/* end flex */}
                
                    {/* toast */}
                    {darkMode ? (
                        <>
                            <Toast icon={<FiSend className="text-white text-[15px]"/>} mess="Sent Message" color={colorDark}/>
                        </>
                    )
                    : (
                        <>
                            <Toast icon={<FiSend className="text-white text-[15px]"/>} mess="Sent Message" color={colorLight}/>
                        </>
                    )}
                    {/* end toast */}

                    {/* icon */}
                    <Social/>
                    {/* icon */}
                </Element>
            </section>
        </>
    )
}

export default Contact