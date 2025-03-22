import React from 'react'
import {NavLink} from "react-router-dom"
import Cart from '../cart/cart'
import"./header.css"
import img from "../../assets/1.png"
function Header(props) {
  return (
    <div className='nav_wrapper'>
      <img className='nav_img' src={img} alt="" srcset="" />
        <NavLink className={({isActive}) => isActive ? "active" : "non_active"} to="/">Home</NavLink>
        <NavLink className={({isActive}) => isActive ? "active" : "non_active"} to="/posts" posts={props.posts}>Shoes</NavLink>
        <NavLink className={({isActive}) => isActive ? "active" : "non_active"} to="/photos" photos={props.photos}>All</NavLink>
        <NavLink className={({isActive}) => isActive ? "active" : "non_active"} to="/cart" photos={props.photos}>Cart</NavLink>
        <Cart/>
    </div>
  )
}

export default Header