import React from 'react';
import './Product.css'

const Product = (props) => {
    const {handleAddCart} =props
    const {id, img, price, name} = props.product;
    return (
      <div className="product">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p>Price:{price}</p>
        <button onClick={()=>handleAddCart(props.product)} className="btn-product">
          <p>Add To Cart</p>
        </button>
      </div>
    );
};

export default Product;