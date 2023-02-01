import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

function Cart() {
  const dataInCart = useSelector(state => state.dataAddedReducer.dataAdded);
  const totalAmount = dataInCart?.map(item => item.price).reduce((partialSum, a) => partialSum + a, 0);

  return <div className="bgAmazon p-4" style={{ height: '100vh' }}>
    <div className="bg-white p-4">
      <div className="d-flex justify-content-between">
        <h2>Shopping Cart</h2>
        <p className="mt-auto m-0">Price</p>
      </div>
      <hr />
      <div className='m-0'>
        {dataInCart?.map((data, index) =>
          <div className="helper p-0" key={index}>
            <CartProduct data={data} noAddButton />
            <hr />
          </div>)}
      </div>
      <h4 className="d-flex justify-content-end">
        {`Subtotal
        (${dataInCart.length} items):
        `}
        <strong>{`$${Math.round(totalAmount * 100) / 100}`}</strong>
      </h4>
    </div>
  </div>
}

export default Cart;
