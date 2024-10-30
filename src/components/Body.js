import React, { useState } from 'react';
import './Body.css';
import Item_Component from './Item_Component';
import IC_details from './IC_details';

function Body({ res ,gen,setCart}) {
    
    const [sc,setSc]=useState({});
    const [scvisi,setScvisi]=useState(false);
    
    //to show loading till object fetched from website
    if (res.length === 0) { 
        return <div>Loading...</div>; 
    }

    //to set item_components based on genre
    const filteredItems = res.filter(item => { 
    if (gen === 'men' && item.category === "men's clothing") 
    { 
        return true; 
    } 
    if (gen === 'women' && item.category === "women's clothing") 
    { 
        return true;
    }
    if (gen === 'electronics' && item.category === "electronics") 
    { 
        return true;
    }
    if (gen === 'jewelery' && item.category === "jewelery") 
    { 
        return true;
    }
    return gen !== 'men' && gen !=='women' && gen !== 'electronics' && gen !== 'jewelery'; 
    });


  return (
      <div id='Body_main'>
          {filteredItems.map(item => (
              <Item_Component key={item.id} item={item} setCart={setCart} setSc={setSc} setScvisi={setScvisi}/>
          ))}
          <IC_details sc={sc}  scvisi={scvisi} setScvisi={setScvisi}></IC_details>
      </div>
  );//body components
}


export default Body;