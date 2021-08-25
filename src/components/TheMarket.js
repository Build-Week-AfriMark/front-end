import React, { useState, useEffect } from 'react'
import { allProductsArray } from '../fakeData/'

import Item from './Item'

const TheMarket = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(allProductsArray)
    },[])

    return (
        <div>
            {products.map((item) => {
                return (<Item item={item} />)
            })}
        </div>
    )
}

export default TheMarket