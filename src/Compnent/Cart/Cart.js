import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css'

const Cart = (props) => {
    const cart =props.cart
    const formatNumber =num=> {
        const precision = num.toFixed(2);
        return Number(precision)
    }

    let totalCost = 0;
     for (let i = 0; i< cart.length; i++) {
       const course = cart[i];
       totalCost = totalCost + course.price;
        
     }
    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Items Purchase :{cart.length} </h5>          
            <p>Total Price :  ${formatNumber(totalCost)} </p>
            <button type="button" class="btn btn-warning">Purchase Review</button>
        </div>
    );
};

export default Cart;