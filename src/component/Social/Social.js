import React, { memo } from 'react'
import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';

const Social = () => {
    return (
        <>
            <div
                className="
                    mobile-sm:mt-[-65px]
                    mobile-lg:mt-0
                    flex
                    fixed
                    flex-col
                    w-[auto]
                    z-[100]
                    mobile-sm:top-[350px]

                    mobile-lg:top-[300px]

                    tablet-sm:top-[300px]

                    tablet-lg:top-[330px]

                    laptop:top-[320px]
                "
            >
                <a href="https://www.linkedin.com/in/maihoangphuc/" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin className="social"/>
                </a>

                <a href="https://twitter.com/Mai_Hoang_Phuc" target="_blank" rel="noopener noreferrer">
                    <FiTwitter className="social"/>
                </a>

                <a href="https://github.com/maihoangphuc" target="_blank" rel="noopener noreferrer">
                    <FiGithub className="social"/>
                </a>
            </div>
        </>
    )
}

export default memo(Social)