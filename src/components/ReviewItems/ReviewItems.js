import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItems.css';

const ReviewItems = (props) => {
    const { product, handleRemoveProduct } = props
    const { name, img, price, quantity } = product;
    return (
        <div className='review-item-container'>
            <div className='item-img'>
                <img src={img} alt="" />
            </div>
            <div className='item-container'>
                <div className='review-items'>
                    <p title={name}>
                        {name.length > 20 ? name.slice(0, 20) + "..." : name}
                    </p>
                    <p>Price:{price}</p>
                    <p>Quantity:{quantity}</p>
                </div>
                <div className='button'>
                    <button onClick={() => handleRemoveProduct(product)} className='delet-button'>
                        <FontAwesomeIcon className='delet-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;