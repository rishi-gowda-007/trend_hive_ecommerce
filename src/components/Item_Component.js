import React, { useState } from 'react';
import './Item_Component.css';

function Item_Component({item,setCart,setSc,setScvisi}) {
  
  //to set count of items base increment on decrement
  const [number,setNumber]=useState(0);
  const inc=()=>{
    setNumber(c=>c+1)
    setCart(prevCart => prevCart.map(cartitem => 
      cartitem.id === item.id ? { ...cartitem, count: number+1 } : cartitem ) );
  }
  const dec=()=>{
    if(number>0)
    {
    setNumber(c=>c-1)
    setCart(prevCart => prevCart.map(cartitem => 
      cartitem.id === item.id ? { ...cartitem, count: number - 1 } : cartitem ));    }
  }

  //styling dynamically when item fetched
  const b_style={
    backgroundImage: `url(${item.image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }


  return (
    <div id='Item_component_main'>
        <div id='Item_component_background_image' style={b_style} onClick={() => { setSc(item); setScvisi(true); }}>

        </div>
        <div id='Item_component_Details'>
            <b>{item.title}</b>
            <b>Price - ${item.price}</b>
            <div id='Item_component_counter'>
              <button onClick={dec} id='Item_component_button_dec'>-</button>
              <div id='Item_counter_number'>{number}</div>
              <button onClick={inc} id='Item_component_button_inc'>+</button>
            </div>
        </div>
    </div>
  )//component of this item_component.js
}

export default Item_Component;