import { useState, useEffect } from 'react'

const useResize = () => {

    const [isMobile, setIsMobile] = useState(false)
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })


    
    useEffect(() => {

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        
        window.addEventListener('resize', handleResize)
    
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    
    useEffect(() => {
        if(windowSize.width < 850){
            setIsMobile(true)
        } else{
            setIsMobile(false)
        }
    }, [windowSize])


    return [isMobile, setIsMobile]
}

export default useResize