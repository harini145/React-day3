import React from 'react'
import "../Components/submenu.css"
export default function SubMenu(props) {
  return (
    <div className='sub-menu'>
        <img src={props.img}/>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <h3>{props.price}</h3>
        <a href=''>Order Now</a>
    </div>
  )
}
