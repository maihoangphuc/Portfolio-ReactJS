import React, { memo, useContext } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { ContextGoToTop } from '../../context/contexts'




const GoToTop = () => {

    const { showGoToTop } = useContext(ContextGoToTop)

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    return (
        <>
            {showGoToTop ? (
            <button
                onClick={handleClick}
                className="
                    z-[5]
                    mobile-sm:w-[28px]
                    mobile-sm:h-[28px]
                    mobile-sm:right-[12px]
                    
                    mobile-lg:w-[32px]
                    mobile-lg:h-[32px]
                    mobile-lg:right-[20px]

                    tablet-sm:w-[36px]
                    tablet-sm:h-[36px]
                    tablet-sm:right-[30px]

                    rounded-full
                    transition
                    flex
                    items-center
                    justify-center
                    fixed
                    bottom-[30px]
                    right-[30px]
                    bg-[#bfc0bf]
                    hover:bg-[#404344]
                    text-[#fff]
                "
            >
                <IoIosArrowUp className="mobile-sm:text-[16px] mobile-lg:text-[20px]"/>
            </button>
            ) : ''}
        </>
    )
}

export default memo(GoToTop)