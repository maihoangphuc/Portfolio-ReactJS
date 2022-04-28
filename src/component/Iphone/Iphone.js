import React, { useContext, memo } from 'react'
import Video from '../Video/Video'
import VideoLight from '../../assets/video/it-light.mp4'
import VideoDark from '../../assets/video/it-dark.mp4'

import LineLeft from '../../assets/images/img/line-left.png'
import LineRight from '../../assets/images/img/line-right.png'

import {
  ContextDarkMode,
  ContextColorLight,
  ContextColorDark
} from '../../context/contexts';

const Iphone = () => {

  const { darkMode } = useContext(ContextDarkMode)
  const { colorLight } = useContext(ContextColorLight)
  const { colorDark } = useContext(ContextColorDark)
    
  return (
      <>
        <div
          className="
            mobile-sm:my-[-90px]
            mobile-sm:w-auto
            mobile-sm:h-auto
           

            mobile-lg:my-[-20px]
            mobile-lg:w-auto
            mobile-lg:h-auto
            mobile-lg:m-auto
            
            tablet-lg:my-0
          "
        >
          <div
            className="
              mobile-sm:scale-[.55]
              
              mobile-lg:scale-[.80]
              
              tablet-lg:scale-[.90]

              w-[280px]
              h-[500px]
              bg-[#111]
              border-[5px]
              border-solid
              border-[#3d3d3d]
              rounded-[40px]
              shadow-iphone
              flex
              items-center
              m-auto
              relative
            "
          >
            <img src={LineLeft} className="mobile-sm:hidden mobile-lg:hidden laptop:block absolute w-[240px] top-0 left-0 ml-[-280px] mt-[40px]" alt="line-left" />
            <img src={LineRight} className="mobile-sm:hidden mobile-lg:hidden laptop:block absolute w-[240px] bottom-0 right-0 mr-[-280px] mb-[50px]" alt="line-right" />

            <div className="buttons">
              <div className="common w-[3px] h-[25px] top-[70px] left-[-8px]"></div>
              <div className="common w-[4px] h-[70px] top-[130px] right-[-8px] left-auto rounded-t-none rounded-r-[2px] rounded-b-[2px] rounded-l-none"></div>
              <div className="common left-[-8px] w-[4px] h-[40px] top-[120px]"></div>
              <div className="common left-[-8px] w-[4px] h-[40px] top-[170px]"></div>
            </div>

            <div className="absolute top-[4px] w-[100%] flex z-[4] justify-center">
              <div className="relative mt-[2px] w-[55%] h-[25px] flex items-center bg-[black] z-[2] rounded-t-none rounded-r-none rounded-b-[15px] rounded-l-none"></div>
            </div>

            <div className="absolute top-[20px] pl-[12px] flex items-center justify-center">
              <div className="left-[105px] absolute w-[55px] h-[6px] mx-none my-[30px] bg-[#222] z-[100] rounded-[6px] border-b-[1px] border-b-solid border-b-[#333]"></div>
              <div className="ml-[-10px] left-[180px] absolute w-[10px] h-[10px] rounded-[50%] border-b-[1px] border-b-solid border-b-[#444] opacity-50 z-[4]">
                <div style={{background: 'radial-gradient(black, #333)'}} className="blur-[1.8px] w-[10px] h-[10px] border-l-[4px] border-l-solid border-l-[dodgerblue] border-r-[transparent] rounded-[50%] before:content-[''] before:absolute before:right-0 before:h-[8px] before:w-[8px] before:rounded-[4px] before:border-r-[2px] before:border-solid"></div>
              </div>
            </div>

            <div className="z-[3] w-[100%] h-[100%] flex flex-col justify-center items-center border-[7px] border-solid border-[black] rounded-[40px] overflow-hidden">

              <Video url={ darkMode ? VideoDark : VideoLight } />

              <div className="absolute mt-[5px] top-[11px] right-[32px] w-[17px] h-[10px] flex items-center justify-center border-[1px] border-solid border-[#fff] rounded-[2px]">

                {darkMode ? (
                  <>
                    <div style={{background: `${colorDark}`}} className="absolute top-[2px] right-[-4px] w-[1px] h-[4px] rounded-t-none rounded-r-[4px] rounded-b-[4px] rounded-l-none"></div>
                    <div style={{background: `${colorDark}`}} className="absolute left-[1px] w-[10px] h-[7px] rounded-t-[1px] rounded-r-none rounded-b-none rounded-l-[1px]"></div>
                  </>
                )
                : (
                  <>
                    <div style={{background: `${colorLight}`}} className="absolute top-[2px] right-[-4px] w-[1px] h-[4px] rounded-t-none rounded-r-[4px] rounded-b-[4px] rounded-l-none"></div>
                    <div style={{background: `${colorLight}`}} className="absolute left-[1px] w-[10px] h-[7px] rounded-t-[1px] rounded-r-none rounded-b-none rounded-l-[1px]"></div>
                  </>
                )}

              </div>

            <div className="absolute mt-[5px] top-[11px] left-[30px] font-light text-[10px] text-[#fff]">MHP</div>
            <div className="absolute bottom-[15px] h-[3px] w-[45%] rounded-[2px] bg-[#fff]"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Iphone)