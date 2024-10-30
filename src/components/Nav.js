import React, {useEffect, useState } from 'react';
import './Nav.css';
import Login from './Login';

function Nav({setGen,setUN,un,setCartVisi,cart}) {
  
  //to set genre
  const home=()=>{
    setGen('home');
    setCartVisi(false);
  }
  const Men=()=>{
    setGen('men');
    setCartVisi(false);
  }
  const Women=()=>{
    setGen('women');
    setCartVisi(false);
  }
  const Jewellery=()=>{
    setGen('jewelery');
    setCartVisi(false);
  }
  const Electronics=()=>{
    setGen('electronics');
    setCartVisi(false);
  }

  //calculating cart number and displaying only when atleast on element is selected
  const cartnum=cart.reduce((acc, item) => acc + item.count, 0);
  const numstyle = { display: cartnum > 0 ? 'inline-block' : 'none' };

  //to set login component visible when clicked
  const [login,setLogin]=useState(false);

  //hamburger toggle
  const [hamcontent,setHamcontent]=useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1200);
  
  useEffect(() => { 
    const handleResize = () => { 
      setIsLargeScreen(window.innerWidth > 1200); 
    }; 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize); 
  }, []); 
  
  useEffect(() => { 
    if (isLargeScreen) { 
      setHamcontent(true); 
    } 
    else { 
      setHamcontent(false); 
    } }, [isLargeScreen]);
  const ham_toggle=()=>{
      setHamcontent(c=>!c);
      setCartVisi(false);
  }
  //style achor panel changing
  const napc={
    display: hamcontent?'flex':'none'
  }


  return (
    <div id='Nav_main'>
        <div id='Nav_Logo'></div>
        <div id='Nav_anchor_panel' style={napc}>
            <button onClick={home} className='Nav_anchors'>Home</button>
            <button onClick={Men} className='Nav_anchors'>Men</button>
            <button onClick={Women} className='Nav_anchors'>Women</button>
            <button onClick={Electronics} className='Nav_anchors'>Electronics</button>
            <button onClick={Jewellery} className='Nav_anchors'>Jewellery</button>
            <button onClick={()=>setCartVisi(s=>!s)} className='Nav_anchors'><span id='Nav_cart_number' style={numstyle}>{cartnum}</span> Cart🛒</button>
            <button id='Nav_hamburger_close' onClick={ham_toggle}>X</button>
        </div>
        <button id='Nav_hamburger' onClick={ham_toggle}>☰</button>
        <button id='Nav_login' onClick={()=>setLogin(s=>!s)}>Login</button>
        <Login login={login} setUN={setUN} un={un} setLogin={setLogin}></Login>
    </div>
  )//components of nav.js
}

export default Nav;