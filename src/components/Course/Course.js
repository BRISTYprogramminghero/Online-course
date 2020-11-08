import React from 'react';
import fakeDate from './fakeData.json'
import { useState } from 'react'
import './Course.css'
import Product from '../Product/Product'

const Course = () => {
    const AllData = fakeDate.slice(0,10);
    const [products, setProducts] = useState(AllData);
  

    return (
        
        <div className="body-area">
            <div className="course-container">
            
                {
                    products.map(product => <Product product={product.name}></Product>)
                }
            
            </div>
            <div className="cart-container">
                <h1>this is cart content</h1>
            </div>
            
        </div>
    );
};

export default Course;