import React from 'react'
import { useLocation } from 'react-router'

function Cart({elem}) {
  const obj = useLocation()
  console.log(obj);

  
  return (
    <div className='cart_wrapper'>
        <img style={{width : "50px"}} src="https://static.vecteezy.com/system/resources/previews/019/787/018/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="" srcset="" />
        <span children="porduct_counter">{elem}</span>
    </div>
  )
}

export default Cart