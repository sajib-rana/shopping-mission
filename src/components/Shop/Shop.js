import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="book-container">
               <h1>hello everyone:{books.length}</h1>
            </div>
            <div className="cart-container">
                 <h1>something written</h1>
            </div>
        </div>
    );
};

export default Shop;