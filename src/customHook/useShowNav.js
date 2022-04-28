import { useState, useEffect } from 'react'

const useShowNav = () => {

    const [showNav, setShowNav] = useState(false)

    useEffect(() => {

        const handleScrollNav = () => {
            if(window.scrollY >= 10){
                setShowNav(true)
            } else{
                setShowNav(false)
            }
        } 
        
        window.addEventListener('scroll', handleScrollNav)

        return () => {
            window.removeEventListener('scroll', handleScrollNav) 
        }
    }, [])

    return [showNav, setShowNav]
}

export default useShowNav