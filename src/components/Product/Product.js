import React from 'react';
import './Product.css'



const Product = (props) => {
    console.log(props.product.name);
    const {name,Image,Price,Description,Instructor,Cart} = props.product;
    return (
        <div className="pd">
            <div className="pic">
             <img src={Image} alt=""/>
            </div>
            <div className="writing">
            <h3>{name}</h3>
            
            <p><small>{Description}</small></p>
            <p>ID : <small>{Cart}</small></p>
            <br/>

           <h5>Price :{Price}</h5>

           <p>Instructor Name : {Instructor}</p>
           <br/>
           <button className="main-btn" onClick={() => props.handleAddProducts(props.product)}> Buy Course now</button>

            </div>
            
        </div>
    );
};

export default Product;