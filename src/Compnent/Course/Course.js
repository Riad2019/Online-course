import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import'./Course.css';
import FakeData from '../../FakeData/MOCK_DATA.json'
import Product from '../Product/Product';

const Course = () => {
   
    const [data , setData] =useState(FakeData)
    const [cart,setCart] = useState([])
    //console.log(data);
    const handleAddButton =(data)=>{
        console.log("Product Added",data)
        const newCart = [...cart,data]
        setCart(newCart)
    }
    return (
        <div className="site-container">
            
            <div className="course-container">
            {

            data.map(data =><Product  data={data}
            handleAddButton={handleAddButton}
            ></Product> )
             }
              
            </div>

            <div className="cart-container">
            <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Course;