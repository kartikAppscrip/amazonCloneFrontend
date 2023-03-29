import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from './Banner';
import Product from './Product';
import { useLocation } from "react-router-dom";
export const ALL_DATA = 'ALL_DATA';

function Body() {
  async function dataGetFunction() {
    try {
      const response = await fetch('https://fakestoreapi.com/products/');
      const data = await response.json();
      dispatch({ type: ALL_DATA, data: data });
    } catch (error) {
      console.error(error);
    }
  }
  const location = useLocation();
  location.pathname = '/name';
  console.log(location, 'location');
  const dispatch = useDispatch();
  const dataInRedux = useSelector(state => state.dataAddedReducer?.allData);
  React.useEffect(() => {
    !dataInRedux && dataGetFunction();
  });

  return (
    <div>
      <div className='bgAmazon position-relative' style={{ top: '60px' }}>
        <div className='col-12 vh-50 p-0'>
          <Banner className="banner" />
        </div>
        <div className='d-flex justify-content-around flex-wrap row m-0'>
          {dataInRedux?.map((data, index) =>
            <div className="col helper m-4 p-0" key={index}>
              <Product data={data} jsonData={dataInRedux} />
            </div>)}
        </div>
      </div>
      <style jsx>
        {
          `
          .helper{
            height: 430px;
            max-width: 400px;
            min-width: 300px;
          }
          `
        }
      </style>
    </div>
  );
}

export default Body;
