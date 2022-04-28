import React, { memo, useContext } from 'react'
import { colorsDark } from '../../customHook/useColors'
import { ContextColorDark } from '../../context/contexts'


const ColorDark = () => {

    const { colorDark, setColorDark } = useContext(ContextColorDark)


    return (
        <>
            {colorsDark.map((color, index)=>(
                <div
                    style={{backgroundColor: `${color}`}}
                    className="
                            mobile-sm:w-[17px]
                            mobile-sm:h-[17px]
                            mobile-sm:rounded-[50%]
                            mobile-sm:mr-[6px]
                            mobile-sm:cursor-pointer
                            mobile-sm:flex
                            mobile-sm:justify-center
                            mobile-sm:items-center

                            mobile-lg:w-[20px]
                            mobile-lg:h-[20px]
                            mobile-lg:rounded-[50%]
                            mobile-lg:mr-[10px]
                            mobile-lg:cursor-pointer
                            mobile-lg:flex
                            mobile-lg:justify-center
                            mobile-lg:items-center
                            
                            tablet-lg:w-[25px]
                            tablet-lg:h-[25px]
                        "
                    key={index}
                    onClick={()=>{
                        setColorDark(color)
                    }}
                >
                    <div className={colorDark === color ? "active-change-color" : ""}></div>
                </div>
            ))}
        </>
    )
}

export default memo(ColorDark)