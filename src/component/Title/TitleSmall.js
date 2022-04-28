import React, { memo } from 'react'

const TitleSmall = (props) => {

    const { content } = props

    return (
        <>
            <div className="title-small">
                {content}
            </div>
        </>
    )
}

export default memo(TitleSmall)