import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch, Link } from 'react-router-dom';

const Product = () => {
    const [product, setProduct] = useState();
    const id = useRouteMatch().params.id;

    useEffect(() => {
         axios.get(`https://build-week-afrimark.herokuapp.com/api/items/${id}`)
             .then((res) =>{
                //console.log(res)
                setProduct(res.data)})
             .catch((err) => alert(err));
    }, [])
    return(
        product ? 
        <div className='product-page'>
            <div className='product-img'>
                {
                    product.url ? <img src={`${product.url}`} /> : <img src='https://cdn.imgbin.com/21/1/19/imgbin-question-mark-stock-photography-others-bsffm19vKpGzK9sDJxWMK8HJ5.jpg' />
                }
            </div>
            <h2>{product.name}</h2>
            <h4>{product.location}</h4>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <div className='product-nav'>
                <Link>Back to Market</Link>
                <Link>Edit Listing</Link>
                <Link>Remove Listing</Link>
            </div>
        </div>
         :
         <div className='fetching-data'><h2>Fetching Data...</h2></div>
    )
}

export default Product;