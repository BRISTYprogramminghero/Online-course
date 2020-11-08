import React from 'react';
import fakeDate from './fakeData.json'
import { useState } from 'react'
import './Course.css'
import Product from '../Product/Product'


const Course = () => {
    const AllData = fakeDate.slice(0,10);
    const [products, setProducts] = useState(AllData);
    const [cart,setCart] = useState([]);
  
    const handleAddProducts = () => {
        console.log('product',products);
        const newCart = [...cart,products];
        setCart(newCart);
    }

    return (
        
        <div className="body-area">
            <div className="course-container">
            
                {
                    products.map(product => <Product
                    handleAddProducts={handleAddProducts}
                         product={product}></Product>)
                }
            
            </div>
            <div className="cart-container">
                <h1>This is cart</h1>
                <h5>Order Summary :{cart.length} </h5>
            </div>
            
        </div>
    );
};

export default Course;