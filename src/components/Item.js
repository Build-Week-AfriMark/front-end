import React from 'react'

const Item = (props) => {
    const { item } = props
    return (
        <div>
            <p></p>
            <p>{item.user_id}</p>
            <p>{item.location}</p>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.description}</p>
        </div>
    )
}

export default Item