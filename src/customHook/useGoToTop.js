import { useState, useEffect } from 'react'

const useGoToTop = () => {

        const [showGoToTop, setShowGoToTop] = useState(false)


        useEffect(() => {
    
            const handleScrollGoToTop = () => {
                if(window.scrollY >= 100){
                    setShowGoToTop(true)
                } else{
                    setShowGoToTop(false)
                }
            } 
        
            window.addEventListener('scroll', handleScrollGoToTop)
    
            return () => {
                window.removeEventListener('scroll', handleScrollGoToTop) 
            }
        }, [])
    
    return [showGoToTop, setShowGoToTop]
}

export default useGoToTop