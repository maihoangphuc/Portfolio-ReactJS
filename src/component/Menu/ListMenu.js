import React, { memo } from 'react'
import { Link } from 'react-scroll'

const ListMenu = (props) => {
  return (
    <>
        <Link
            id="link"
            key={props.index}
            to={props.menuList}
            smooth={true}
            spy={true}
            offset={-110}
            activeClass={props.activeClass}
        > 
            {props.menuList}
        </Link>
    </>
  )
}

export default memo(ListMenu)