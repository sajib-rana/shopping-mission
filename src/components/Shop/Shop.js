import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setBooks] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="product-container">
               {
                   products.map(product => <Product 
                    key={product.id}
                    product={product}
                    ></Product>)
               }
            </div>
            <div className="cart-container">
                 <h1>something written</h1>
            </div>
        </div>
    );
};

export default Shop;