import React from 'react'
import {NavLink} from "react-router-dom"
import"./header.css"
function Header(props) {
  return (
    <div className='nav_wrapper'>
        <NavLink className={({isActive}) => isActive ? "active" : "non_active"} to="/">Home</NavLink>
        <NavLink className={({isActive}) => isActive ? "active" : "non_active"} to="/posts" posts={props.posts}>Posts</NavLink>
        <NavLink className={({isActive}) => isActive ? "active" : "non_active"} to="/photos" photos={props.photos}>Photos</NavLink>
    </div>
  )
}

export default Header