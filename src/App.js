import './App.css';
import Nav from './components/Nav';
import Body from './components/Body';
import { useState , useEffect } from 'react';
import Cart from './components/Cart';

function App() {

  const[cart,setCart]=useState([]);//store count of items of u selected
  const [res,setRes]=useState([]);//fake api fetched object
  const [gen,setGen]=useState('');//to set genre from nav bar to set item accordingly
  const [un,setUN]=useState('');//to set username from login page
  const [cartvisi,setCartVisi]=useState(false);//to set cart visible when clicked


  const fetch_products=async()=>{
      const fp=await fetch('https://fakestoreapi.com/products');
      const r=await fp.json();
      const initialCart = r.map((item, index) => ({ id: index+1, count: 0 })); 
      setCart(initialCart);
      setRes(r);
  }//asynchrous function to fetch object from fake api

  useEffect(() => {
    fetch_products();
  }, []);//run fetch product on mount for one time

  useEffect(() => { console.log(cart);
    console.log(res);
   }, [cart]);//testing if object is fectched(not necessary)


  return (
    <div className="App">
      <Nav setGen={setGen} setUN={setUN} un={un} setCartVisi={setCartVisi} cart={cart}></Nav>
      <Body res={res} gen={gen} setCart={setCart}></Body>
      <Cart setCartVisi={setCartVisi} cartvisi={cartvisi} cart={cart} res={res} un={un}></Cart>
    </div>
  );
}//all components will be rendered using return

export default App;
