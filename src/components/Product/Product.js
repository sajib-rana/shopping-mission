import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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
        <button
          onClick={() => handleAddCart(props.product)}
          className="btn-product"
        >
          <p className='btn-text'>Add To Cart</p>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    );
};

export default Product;