import { useState } from 'react'

const useClickColor = () => {

    const [clickColor, setClickColor] = useState(true)

    return [clickColor, setClickColor]
}

export default useClickColor