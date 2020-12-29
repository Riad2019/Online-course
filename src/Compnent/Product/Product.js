import React from 'react';
import './Product.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    
    const { course_name,picture,price} = props.data;
    const handleAddButton=props.handleAddButton;
    
    return (
        <div className="productStyle">
            <img className="imageStyle" src={picture} alt=""/>
              <h4>{course_name}</h4>
              <p>Price : ${price}</p>
               <button onClick={()=>handleAddButton(props.data)} type="button" class="btn btn-success" ><FontAwesomeIcon icon={faShoppingCart} /> Enroll Now</button>
        </div>
    );
};

export default Product;