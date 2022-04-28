import { useState } from 'react'


const useOpenMenu = () => {

    const [openMenu, setOpenMenu] = useState(false)

    return [openMenu, setOpenMenu]
}

export default useOpenMenu