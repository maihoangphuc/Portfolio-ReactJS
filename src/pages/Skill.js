import React from 'react'
import { Element } from "react-scroll";
import { menuLists } from './Header'
import Title from '../component/Title/Title'
import TitleSmall from '../component/Title/TitleSmall'
import Iphone from '../component/Iphone/Iphone'
import TextBox from '../component/TextBox/TextBox'

import Fe from '../assets/images/img/fe.svg'
import Be from '../assets/images/img/be.svg'


const Skill = () => {

  const [ , , skill] = menuLists

  return (
    <>
      <section
        className="
          mobile-sm:relative
          mobile-sm:z-[1]
          mobile-sm:flex
          mobile-sm:items-center
          mobile-sm:justify-center
          mobile-sm:w-[100%]
          mobile-sm:delay

          mobile-sm:h-auto
          mobile-sm:py-[65px]

          mobile-lg:h-auto
          mobile-lg:py-[50px]

          tablet-sm:h-auto
          tablet-sm:py-[95px]
          
          tablet-lg:h-auto
          tablet-lg:py-[50px]
        

          laptop:h-auto
          laptop:py-[50px]
        "
      >
        <Element
          id={skill}
          className="
            mobile-sm:relative
            mobile-sm:z-[1]
            mobile-sm:w-[100%]
            mobile-sm:container-90

            mobile-sm:h-[600px]
          
            mobile-lg:h-[800px]

            tablet-sm:h-[780px]

            tablet-lg:h-[610px]

            laptop:h-[610px]
          "
        >
          {/* title */}
          <div className="text-center">
            <TitleSmall content="What Skill I Have"/>
            <Title content="Skill" className="title"/>
          </div>
          {/* end title */}

          {/* flex */}
          <div
            className="
              mobile-sm:flex
              mobile-sm:flex-col
              mobile-sm:justify-center
              mobile-sm:items-center
              mobile-sm:w-[100%]
              mobile-sm:h-auto
              mobile-sm:mt-[50px]
              mobile-sm:relative

              mobile-lg:flex
              mobile-lg:flex-col
              mobile-lg:justify-center
              mobile-lg:items-center
              mobile-lg:w-[100%]
              mobile-lg:h-auto
              mobile-lg:mt-[50px]
              mobile-lg:relative

              tablet-lg:flex-row
            "
          >
            <div
              className="
                mobile-sm:w-[100%]
                mobile-sm:flex
                mobile-sm:justify-center
                mobile-sm:mt-[-20px]

                mobile-lg:mt-0
                mobile-lg:w-[100%]
                mobile-lg:flex
                mobile-lg:justify-center

                tablet-lg:mt-[-130px]
              "
            >
              <TextBox src={Fe} title="Frontend" content="Html, Css, Js, ReactJs, TailwindCss"/>
            </div>

            <Iphone/>

            <div
              className="
                mobile-sm:w-[100%]
                mobile-sm:flex
                mobile-sm:justify-center

                mobile-lg:w-[100%]
                mobile-lg:flex
                mobile-lg:justify-center

                tablet-lg:mt-[130px]
              "
            >
              <TextBox src={Be} title="Backend" content="NodeJs, Flask"/>
            </div>
          </div>
          {/* end flex */}
        </Element>
      </section>
    </>
  )
}

export default Skill