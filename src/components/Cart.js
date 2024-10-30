import React, { useEffect ,useState} from 'react';
import "./Cart.css";

function Cart({setCartVisi, cartvisi, cart, res, un }) {
    
    //for displaying cart visible or none
    const cart_style = {
        display: cartvisi ? 'flex' : 'none'
    };

    //for setting total amount of cart
    const [totalAmount, setTotalAmount] = useState(0); 
    useEffect(() => { 
        const calculateTotalAmount = () => { 
            const total = cart.reduce((acc, item, id) => { 
                if (item.count > 0) { 
                    return acc + item.count * res[id].price; 
                } 
                return acc; 
                }, 0); 
                setTotalAmount(total); 
            }; 
            calculateTotalAmount(); 
        }, [cart, res]);
    
    //till items set this message appears
    if (res.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div id='cart_main' style={cart_style}>
            {un !== '' ? (
                <>
                    <h1 id='cart_order_summary'>Order Summary</h1>
                    <br />
                    <table id='cart_table'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, id) => (
                                item.count > 0 && (
                                    <tr key={id}>
                                        <td  id='img_style' style={{backgroundImage: `url(${res[id].image})`}}></td>
                                        <td>{res[id].title}</td>
                                        <td>{item.count}</td>
                                        <td>${item.count * res[id].price}</td>
                                    </tr>
                                )
                            ))}
                        </tbody>
                    </table>
                    <h2 id='cart_total_amt'>Total Amount : ${totalAmount}</h2>
                    <button id='cart_close_button' onClick={() => setCartVisi(false)}>close</button>
                </>
            ) : (
                <> 
                <h1 id='cart_not_login'>Login first to view the cart</h1> 
                <button id='cart_close_button' onClick={() => setCartVisi(false)}>Close</button> 
                </>
                
            )}
        </div>
    );//made use of table inorder to set elemnts in correct orientation
}

export default Cart;


