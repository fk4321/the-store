import React from 'react';

let prices = 1
const Products = ({ products, cartItems, createLineItem, updateLineItem })=> { 
  return (
    <div>
      <h3>Add a new Product</h3>
      <form>
        <label> Name
          <input type='text'></input>
        </label>
        <label> Price
          <input type='number'></input>
        </label>
        <label> Description
          <input type='text'></input>
        </label>
        <button type='submit'>Submit</button>
      </form>
      <h2>Products</h2>
      <ul>
        {
          products.map( product => {
            const cartItem = cartItems.find(lineItem => lineItem.product_id === product.id);
            // let prices = 1
            return (
              <li key={ product.id }>
                {/* I believe this is where the product names should be arranged in alphabetical order */}
                { product.name } is ${ prices }
                {
                  cartItem ? <button onClick={ ()=> updateLineItem(cartItem)}>Add Another</button>: <button onClick={ ()=> createLineItem(product)}>Add</button>
                }
                <button onClick={ () => 
                  product.name === "foo" ? alert('This is foo definition') :
                  product.name === 'bar' ? alert("This is bar definiton") : 
                  product.name === 'bazz' ? alert("This is bazz definition") : 
                  alert('This is quq definiton')}>
                    Description
                </button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Products;
