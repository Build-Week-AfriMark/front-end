import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ProductForm from './ProductForm';
import Item from './Item';

const TheMarket = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://build-week-afrimark.herokuapp.com/api/items')
            .then((res) => {
                console.log(res);
                setProducts(res.data)})
            .catch((err) => console.log(err));
    }, [])

    return (
        <div className='products-list'>
            <h2 className='market-title'>Welcome to the market!</h2>
            {products.map((item) => {
                return (<Item key={item.id} item={item} />)
            })}
        </div>
    )
}

export default TheMarket