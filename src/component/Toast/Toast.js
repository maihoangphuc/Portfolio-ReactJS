import React from 'react'

const Toast = (props) => {
    const { icon, mess, color } = props

    return (
        <>
            <div
                style={{backgroundColor: `${color}`}}
                className="
                    toast
                    hidden
                    mobile-sm:fixed
                    mobile-sm:left-[20px]
                    mobile-sm:bottom-[20px]
                    mobile-sm:py-2
                    mobile-sm:px-2
                    mobile-sm:rounded-[5px]
                    mobile-sm:w-[140]

                    tablet-sm:w-[170]
                    tablet-sm:py-2
                    tablet-sm:px-3

                    tablet-lg:py-3
                    tablet-lg:px-3

                    laptop:w-[180px]
                "
            >  
                <div className="flex items-center justify-center gap-[5px]">
                    {icon}
                    <div
                        className="
                            mobile-sm:text-white
                            mobile-sm:text-[13px]

                            mobile-lg:text-[15px]

                            tablet-sm:text-[16px]
                        "
                    >
                        {mess}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Toast