import React, { useState } from 'react';
import Banner from './Banner';
import Product from './Product';

function Body() {
  async function dataGetFunction() {
    try {
      const response = await fetch('https://fakestoreapi.com/products/');
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      console.error(error);
    }
  }

  const [jsonData, setJsonData] = useState([]);
  React.useEffect(() => {
    dataGetFunction();
  }, []);

  return (
    <div>
      <div className='bgAmazon'>
        <Banner className="banner" />
        {/* <img className="home_image" alt="image" src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/717sXUCB29L._SX3000_.jpg" /> */}
        <div className='d-flex justify-content-around flex-wrap row m-0'>
          {jsonData?.map((data, index) =>
            <div className="col helper m-4 p-0" key={index}>
              <Product data={data} />
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
