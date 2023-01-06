import React from "react";
const data = [
  "Alexa Skills",
  "mazon Devices",
  "Amazon Fashion",
  "Amazon Fresh",
  "Amazon Pharmacy",
  "Appliances",
  "Apps &amp; Games",
  "by",
  "Beauty",
  "Books",
  "Car &amp; Motorbike",
  "Clothing &amp; Accessories",
  "Collectibles"
]
const AllDropDown = () => {
  return <div>
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        All
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#" >value</a>
        <a className="dropdown-item" href="#" >value</a>
        {
          data.map((value, index) => <a className="dropdown-item" href="#" key={index}>{value}</a>)
        }
      </div>
    </div>
  </div>;
};

export default AllDropDown;
