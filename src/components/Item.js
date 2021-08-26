import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom';
import './item.css'

const Item = (props) => {
    const { item } = props
    const { push } = useHistory();

    function viewItemPage() {
        push(`/item/${item.id}`)
    }

    return (
        <div className='item-card' id={item.userid} onClick={viewItemPage}>
            <div className='item-img'>
                {
                    item.url ? <img src={`${item.url}`} /> : <img src='https://cdn.imgbin.com/21/1/19/imgbin-question-mark-stock-photography-others-bsffm19vKpGzK9sDJxWMK8HJ5.jpg' />
                }
            </div>
            <h2>{item.name}</h2>
            <h4>{item.location}</h4>
            <p>{item.description}</p>
            <p>${item.price}</p>
        </div>
    )
}

export default Item