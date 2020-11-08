import React from 'react';

const Product = (props) => {
    console.log(props.product.name);
    return (
        <div>
            <h1>products</h1>
        </div>
    );
};

export default Product;