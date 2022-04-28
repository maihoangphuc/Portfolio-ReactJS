import React, { useContext } from 'react'
import { Element } from "react-scroll";
import { menuLists } from './Header'

import { FaLaptopCode } from 'react-icons/fa'
import { AiOutlineProject } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'

import Text from '../component/Slogan/Text'
import Button from '../component/Button/Button'
import Card from '../component/Card/Card'
import Title from '../component/Title/Title'
import TitleSmall from '../component/Title/TitleSmall'
import Box from '../component/Box/Box';
import BgPage from '../component/Background/BgPage'

import CV from '../assets/cv/maihoangphuc.pdf'

import {
  ContextDarkMode,
  ContextColorLight,
  ContextColorDark,
  ContextClickColor
} from '../context/contexts';


const About = () => {

  const { darkMode } = useContext(ContextDarkMode)
  const { colorLight } = useContext(ContextColorLight)
  const { colorDark } = useContext(ContextColorDark)
  const { clickColor } = useContext(ContextClickColor)

  const [ , about] = menuLists

  return (
    <>
      <section
        className="
          mobile-sm:flex
          mobile-sm:items-center
          mobile-sm:justify-center
          mobile-sm:w-[100%]
          mobile-sm:h-auto
          mobile-sm:py-[65px]
          mobile-sm:mt-[30px]
          mobile-sm:relative
          mobile-sm:delay
        
          mobile-lg:py-[100px]
  
          tablet-sm:py-[100px]
          tablet-sm:mt-[50px]
          
          tablet-lg:py-[90px]
          tablet-lg:mt-0

          laptop:py-[90px]
        "
      >
        <BgPage/>

        <Element
          id={about}
          className="
            mobile-sm:container-90
            mobile-sm:w-[100%]
            mobile-sm:h-auto
           
            tablet-lg:h-[610px]
          "
        >
          {/* title */}
          <div className="text-center">
            <TitleSmall content="Get To Know"/>
            <Title content="About" className="title"/>
          </div>
          {/* end title */}

          {/* flex */}
          <div
            className="
              mobile-sm:flex
              mobile-sm:flex-col
              mobile-sm:pl-[10px]
              mobile-sm:mt-[70px]
              mobile-sm:justify-center
              mobile-sm:item-center

              mobile-lg:flex
              mobile-lg:flex-col
              mobile-lg:pl-[10px]
         
              mobile-lg:justify-center
              mobile-lg:item-center

              tablet-lg:flex-row
              tablet-lg:justify-between
              tablet-lg:items-center
              tablet-lg:mt-[120px]

              laptop:mt-[130px]
            "
          >

            {/* image */}
            <div
              className="
                mobile-sm:w-[100%]
                mobile-sm:flex
                mobile-sm:justify-center
                mobile-sm:delay

                mobile-lg:w-[100%]
                mobile-lg:flex
                mobile-lg:justify-center
              "
            >
              {/* card */}
              <Card
                className="
                  mobile-sm:w-[160px]
                  mobile-sm:rounded-[32px]
                  mobile-sm:mt-[-32px]
                  mobile-sm:delay

                  mobile-lg:w-[200px]
                  mobile-lg:rounded-[32px]
                  mobile-lg:mt-0
                  
                  tablet-sm:w-[210px]

                  tablet-lg:w-[250px]

                  laptop:w-[320px]
                "
              />
              {/* end card */}
            </div>
            {/* end image */}

            {/* content */}
            <div
              className="
                mobile-sm:w-[100%]
                mobile-sm:delay

                mobile-lg:w-[100%]
                w-[50%]
              "
            >

              {/* button */}
              <div
                className="
                  mobile-sm:flex
                  mobile-sm:justify-center
                  mobile-sm:delay

                  mobile-lg:flex
                  mobile-lg:justify-center

                  tablet-lg:justify-start
                "
              >
                <div
                  className="
                    mobile-sm:mt-[60px]
                    mobile-sm:mb-[10px]

                    mobile-lg:mt-[60px]
                    mobile-lg:mb-[10px]

                    tablet-lg:mt-0
                  "
                >
                  <Button content="Download CV" href={CV} download="maihoangphuc.pdf" className={clickColor === true ? 'button' : 'button'} />
                </div>
              </div>
              {/* end button */}

              {/* text */}
              <div
                className="
                  mobile-sm:flex
                  mobile-sm:justify-center
                  mobile-sm:delay

                  mobile-lg:flex
                  mobile-lg:justify-center

                  tablet-lg:justify-start
                "
              >
                <div
                  className="
                    mobile-sm:w-[77%]
                    mobile-sm:text-center
                    mobile-sm:delay

                    mobile-lg:w-[75%]
                    mobile-lg:text-center

                    tablet-sm:w-[60%]

                    tablet-lg:text-left
                    tablet-lg:w-[90%]

                    laptop:w-[80%]
                  "
                >
                  <Text
                    content="Web developer, with extensive knowledge and years of experience,
                    working in web technologies and UI / UX design, delivering quality work."
                    className={clickColor === true ? 'text animate__animated animate__flash' : 'text'}
                  />
                </div>
            </div>
            {/* end text */}

            {/* box */}
            <div
              className="
                mobile-sm:flex
                mobile-sm:flex-col
                mobile-sm:justify-center
                mobile-sm:items-center
                mobile-sm:w-[100%]
                mobile-sm:mt-[20px]
                mobile-sm:delay

                mobile-lg:flex
                mobile-lg:flex-col
                mobile-lg:justify-center
                mobile-lg:items-center
                mobile-lg:w-[100%]
                mobile-lg:mt-[20px]

                tablet-sm:flex-row

                tablet-lg:justify-start
              "
            >
              {darkMode ? (
                <>
                  <Box size="box-about" bgColor="#35323c" colorText="#6B7B8E" colorTitle="#fff" icon={<FaLaptopCode className="icon-textbox"/>} title="Experience" text="3+ Years Working" />
                  <Box size="box-about" bgColor="#35323c" colorText="#6B7B8E" colorTitle="#fff" icon={<BsPeople className="icon-textbox"/>} title="Clients" text="5+ Worldwide" />
                  <Box size="box-about" bgColor={colorDark} colorText="#D4D7DD" colorTitle="#454d56" icon={<AiOutlineProject className="icon-textbox"/>} title="Project" text="10+ Completed" />
                </>
              )
              : (
                <>
                  <Box size="box-about" bgColor="#DBDBDB" colorText="#6B7B8E" colorTitle="#454d56" icon={<FaLaptopCode className="icon-textbox"/>} title="Experience" text="1+ Years Working" />
                  <Box size="box-about" bgColor="#DBDBDB" colorText="#6B7B8E" colorTitle="#454d56" icon={<BsPeople className="icon-textbox"/>} title="Clients" text="5+ Worldwide" />
                  <Box size="box-about" bgColor={colorLight} colorText="#D4D7DD" colorTitle="#fff" icon={<AiOutlineProject className="icon-textbox"/>} title="Project" text="10+ Completed" />
                </>
              )}
            </div>
            {/* end box */}

            </div>
            {/* end content */}

          </div>
          {/* end flex */}
        </Element>
      </section>
    </>
  )
}

export default About