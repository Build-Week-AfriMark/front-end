import React, { useState, useEffect } from 'react'
import axios from 'axios'

// const allProducts = [
//     {
//         name:'',
//         description:'',
//         price:'',
//         location:''
//         userId:''
//     }
// ]
const baseUrl = ''

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`${baseUrl}`)
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    return (
        <div>
            <TheMarket products={products} />
            <YourItems products={products} />
        </div>
    )
}

export default Home