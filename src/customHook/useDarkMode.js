import { useState, useEffect } from 'react'

const useDarkMode = () => {

    const [darkMode, setDarkMode] = useState(()=>localStorage.theme === 'dark')

    useEffect(() => {
        const html = window.document.documentElement
        const prev = darkMode ? 'light' : 'dark'
        html.classList.remove(prev)
        const next = darkMode ? 'dark' : 'light'
        html.classList.add(next)
        localStorage.setItem('theme', next)
    }, [darkMode]);

    return [darkMode, setDarkMode]
}

export default useDarkMode