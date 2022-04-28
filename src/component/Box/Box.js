import React, { memo } from 'react'

const Box = (props) => {

    const { size, bgColor, colorText, colorTitle, icon, title, text, link, href } = props


    return (
        <>
            <div
                style={{background: `${bgColor}`}}
                className={`${size} group`}
            >
                <div>
                    {icon}
                </div>

                <div
                    style={{color: `${colorTitle}`}}
                    className="
                        mobile-sm:mt-[10px]
                        mobile-sm:text-[14px]
                        mobile-sm:delay

                        mobile-lg:mt-[10px]
                        mobile-lg:text-[15px]
                        hover-title
                    "
                >
                    {title}
                </div>

                <div
                    style={{color: `${colorText}`}}
                    className="
                        mobile-sm:text-[13px]
                        mobile-sm:delay
                        mobile-lg:text-[14px]
                        tablet-lg:text-[13px]
                        laptop:text-[15px]
                    "
                >
                    {text}
                </div>

                <a
                    style={{color: `${colorText}`}}
                    className="
                        mobile-sm:text-[13px]
                        mobile-sm:delay
                        mobile-lg:text-[14px]
                        tablet-lg:text-[13px]
                        laptop:text-[15px]
                        hover-a
                    "
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {link}
                </a>
            </div>
        </>
    )
}

export default memo(Box)