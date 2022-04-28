import React, { memo, useContext } from 'react'
import Image2 from '../../assets/images/img/image2.gif'
import {
    ContextDarkMode,
    ContextColorLight,
    ContextColorDark
} from '../../context/contexts';

const Card = (props) => {

    const { className } = props

    const { darkMode } = useContext(ContextDarkMode)
    const { colorLight } = useContext(ContextColorLight)
    const { colorDark } = useContext(ContextColorDark)

    return (
        <>
            {darkMode ? (
                <div
                    style={{background: `linear-gradient(45deg, transparent, ${colorDark}, transparent)`}}
                    className={className}
                >
                    <div>
                        <img className="rounded-[32px] rotate-[10deg] hover:rotate-[0deg] duration-300" src={Image2} alt="people2" />
                    </div>
                </div>
            )
            : (
                <div
                    style={{background: `linear-gradient(45deg, transparent, ${colorLight}, transparent)`}}
                    className={className}
                >
                    <div>
                        <img className="rounded-[32px] rotate-[10deg] hover:rotate-[0deg] duration-300" src={Image2} alt="people2" />
                    </div>
                </div>
            )}


            
        </>
    )
}

export default memo(Card)