import React from 'react';

const Cart = ({ updateOrder, removeFromCart, lineItems, cart, products, cartItems, updateLineItem })=> {
  // console.log(cart)
  return (
    // cart = {} ? <p>Hello</p> : (put the div in here)
    <div>
      <h2>Cart</h2>
      <p>Your cart is empty if there is nothing below. If there is something then continue shopping</p>
      <ul>
        {
          // <h3>{lineItem.quantity*1}</h3>
          lineItems.filter((lineItem) => {return lineItem.order_id === cart.id}).map( lineItem => {
            const product = products.find(product => product.id === lineItem.product_id) || {};
            let itemCount = lineItem.quantity
            return (
              <div>
                <li key={ lineItem.id }>               
                  { product.name }
                  ({ itemCount })
                  <button onClick={ ()=> removeFromCart(lineItem)}>Remove From Cart</button>
                  <button onClick={ () => {itemCount = itemCount++}}>Add One Item</button>
                  <button onClick={ () => {itemCount = itemCount--}}>Remove One Item</button>
                </li>
                <p>Total cost of {product.name} is {lineItem.quantity*1}</p>
              </div>
                
            );
          })
        }
      </ul>
      
      {
        lineItems.filter((lineItem) => {return lineItem.order_id === cart.id }).length ? <button onClick={()=> {
          updateOrder({...cart, is_cart: false });
        }}>Create Order</button>: null
      }
    </div>
  );
};


export default Cart;
