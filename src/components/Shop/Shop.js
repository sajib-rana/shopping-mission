import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setBooks] = useState([])
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    const handleAddCart = (product) =>{
        const newCart = [...carts, product] 
        setCarts(newCart);
    }
    const clearAll = () =>{
        setCarts([])
    }

    const randomProduct = (carts) =>{
      
    }
    return (
      <div className="shop-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddCart={handleAddCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <h1>This is Cart Container</h1>
          {carts.map((cart) => {
            return (
              <div key={cart.id} className="cart-info">
                <img src={cart.img} alt="" />
                <h3>{cart.name}</h3>
              </div>
            );
          })}
          <button onClick={()=>randomProduct(carts)}>Choose 1 for me</button>
          <button onClick={clearAll}>Choose Again</button>
        </div>
      </div>
    );
};

export default Shop;