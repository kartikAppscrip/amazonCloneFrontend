import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

function Cart() {
  const dataInCart = useSelector(state => state.dataAddedReducer.dataAdded);
  let totalAmount = 0;
  dataInCart?.map((item) => {
    totalAmount += (item.qty) * (item.price);
  });
  return <div className="bgAmazon p-4 position-relative cartBelowHeader">
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
    <style jsx>
      {
        `
        .cartBelowHeader{
          height: ${dataInCart.length < 3 ? "calc(100vh - 105px)" : 'auto'};
          top: 60px;
        }
        `
      }
    </style>
  </div>
}

export default Cart;
