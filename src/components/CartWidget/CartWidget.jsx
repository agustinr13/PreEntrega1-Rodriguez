import React from 'react'
import './CartWidget.css'
import CartImage from './cart.png'

const CartWidget = () => {
    return (
        <div className='logo'>
            <img src={CartImage} alt="logo" />
            <span className='cantidad'>4</span>
        </div>
    )
}

export default CartWidget