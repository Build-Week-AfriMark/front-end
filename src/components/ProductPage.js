import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch, Link } from 'react-router-dom';

const ProductPage = () => {
    const [product, setProduct] = useState();
    const id = useRouteMatch().params.id;

    useEffect(() => {
         axios.get(`https://build-week-afrimark.herokuapp.com/api/items/${id}`)
             .then((res) =>{
                //console.log(res)
                setProduct(res.data)})
             .catch((err) => alert(err));
    }, [id])
    return(
        product ? 
        <div className='product-page'>
            <div className='product-img'>
                {
                    product.url ? <img src={`${product.url}`} alt={product.name}/> : <img src='https://cdn.imgbin.com/21/1/19/imgbin-question-mark-stock-photography-others-bsffm19vKpGzK9sDJxWMK8HJ5.jpg' alt={product.name}/>
                }
            </div>
            <h2>{product.name}</h2>
            <h4>{product.location}</h4>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <div className='product-nav'>
                <Link to='/the-market'>Back to Market</Link>
                <Link to='/the-market'>Edit Listing</Link>
                <Link to='/the-market'>Remove Listing</Link>
            </div>
        </div>
         :
         <div className='fetching-data'><h2>Fetching Data...</h2></div>
    )
}

export default ProductPage;