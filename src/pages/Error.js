import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SnowStorm from 'react-snowstorm';

const Error = () => {

  const $ = require("jquery");

  useEffect(() => {
    // Declare Consts & Lets
    const today = new Date()
    const container = document.getElementById('js-snow')

    // Functions
    const startSnow = () => {
        container.classList.add('window--xmas')
        SnowStorm.targetElement = 'js-snow'
        SnowStorm.snowStick = false
        SnowStorm.followMouse = false
        SnowStorm.freezeOnBlur = false
        SnowStorm.randomizeWind()
    }
    const stopSnow = () => {
        container.classList.remove('window--xmas')
        SnowStorm.stop()
    }

    // Event Listeners
    document.addEventListener('DOMContentLoaded', () => {
        today.getMonth() === 11 ? startSnow() : stopSnow()
    })

    $(document).mousemove(function(event) {
        const eyeLeft = $("#eye-left");
        const eyeRight = $("#eye-right");

        const xL = (eyeLeft.offset().left) + (eyeLeft.width() / 2);
        const yL = (eyeLeft.offset().top) + (eyeLeft.height() / 2);
        const radL = Math.atan2(event.pageX - xL, event.pageY - yL);
        const rotL = (radL * (180 / Math.PI) * -1) + 180;

        const xR = (eyeLeft.offset().left) + (eyeLeft.width() / 2);
        const yR = (eyeLeft.offset().top) + (eyeLeft.height() / 2);
        const radR = Math.atan2(event.pageX - xR, event.pageY - yR);
        const rotR = (radR * (180 / Math.PI) * -1) + 180;

        eyeLeft.css({
            '-webkit-transform': 'rotate(' + rotL + 'deg)',
            '-moz-transform': 'rotate(' + rotL + 'deg)',
            '-ms-transform': 'rotate(' + rotL + 'deg)',
            'transform': 'rotate(' + rotL + 'deg)'
        });

        eyeRight.css({
            '-webkit-transform': 'rotate(' + rotR + 'deg)',
            '-moz-transform': 'rotate(' + rotR + 'deg)',
            '-ms-transform': 'rotate(' + rotR + 'deg)',
            'transform': 'rotate(' + rotR + 'deg)'
        });
    });

  }, [$])
    
    
  return (
    <>
      <div id="js-snow" className="mobile-sm:scale-[.70] mobile-lg:scale-100 absolute w-64 h-64 bg-[#8c8aa7] overflow-hidden top-[100px] left-[50%] translate-x-[-50%] shadow-window rounded-[50%]">
        <div>
          <div className="absolute w-[120px] h-[120px] bg-[#424b54] top-[60px] left-[50%] translate-x-[-50%] rounded-[100%] z-[-3]"/>
          <div
            className="
              absolute
              w-[80px]
              h-[40px]
              bg-[#424b54]
              top-[75px]
              left-[100px]
              rounded-[100%]
              z-[-1]
              content-['']
              
              before:absolute
              before:top-0
              before:w-[20px]
              before:h-[40px]
              before:bg-[#424b54]
              before:content-['']
              before:left-[-15px]
              before:rounded-[100%]
              before:rotate-[50deg]
            "
          />
          <div className="absolute w-[100px] h-[120px] bg-[#f0beaf] top-[80px] left-[50%] translate-x-[-50%] rounded-[150px] z-[-2]" />
          <div
            className="
              absolute
              w-5
              h-5
              bg-[#f0beaf]
              top-[135px]
              left-[67px]
              rounded-[100%]
              z-[-4]

              before:absolute
              before:w-2
              before:h-2
              before:bg-[#db9b99]
              before:content-['']
              before:top-[7px]
              before:left-[4px]
              before:rounded-[100%]
            "
          />
          <div
            className="
              absolute
              w-5
              h-5
              bg-[#f0beaf]
              top-[135px]
              left-[167px]
              rounded-[100%]
              z-[-4]

              before:left-[9px]
              before:top-[8px]
              before:absolute
              before:w-2
              before:h-2
              before:bg-[#db9b99]
              before:content-['']
              before:rounded-[100%]
            "
          />

          <div
            className="
              absolute
              top-[130px]
              left-[90px]
              w-[12px]
              h-[2px]
              bg-[#646b73]

              after:absolute
              after:w-[12px]
              after:h-[2px]
              after:bg-[#646b73]
              after:content-['']
              after:left-[59px]
            "
          />

          <div>
            <div id="eye-left" className="absolute w-3 h-3 bg-white top-[135px] left-[90px] rounded-[50%]">
              <div className="relative w-2 h-2 bg-gray-700 rounded-[50%]" />
            </div>
            <div id="eye-right" className="absolute w-3 h-3 bg-white top-[135px] left-[148px] rounded-[50%]">
              <div className="relative w-2 h-2 bg-gray-700 rounded-[50%]" />
            </div>
          </div>   

          <div className="absolute w-[8px] h-[14px] bg-[#db9b99] top-[135px] left-[50%] translate-x-[-50%] rounded-[40%]" />
          <div className="absolute w-8 h-1 bg-gray-700 overflow-hidden top-[165px] left-[50%] translate-x-[-50%]" />
          <div className="absolute w-8 h-8 bg-[#f0beaf] z-0 top-[185px] left-[50%] translate-x-[-50%] rounded-[100%]" />
          <div className="absolute w-24 h-40 bg-teal-900 left-[50%] top-[200px] translate-x-[-50%] rounded-[100px] z-[-1]" />
        </div>
      </div>

      <div className="flex flex-col item-center justify-center w-[100%] text-center mt-[400px]">
        <h1
          className="
            mobile-sm:scale-[.70]
            mobile-sm:text-[80px]
            mobile-sm:m-0
            mobile-sm:text-[#eeeeee]
            
            mobile-lg:scale-100
            mobile-lg:text-[80px]
            mobile-lg:m-0
            mobile-lg:text-[#eeeeee]
            
            laptop:text-[100px]
            font-semibold
          "
        >
          404 :((
        </h1>
        <p className="text-[#9ea1a7] w-[100]">The page you were looking for doesn't exist</p>
        <Link to="/" className="m-0 text-[#6b67c0] text-[18px] cursor-pointer">{'>> Home <<'}</Link>
      </div>
    </>
  )
}

export default Error