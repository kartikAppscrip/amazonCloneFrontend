// import React, { useEffect } from "react";
import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BodyHeader from "../Body/BodyHeader";
import AllDropDown from "./AllDropDown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const headerAcountOrderPrime = [
  {
    topText: "Hello Guest,sign in",
    bottomText: "Account & Lists",
    // route: "SignIn"
  },
  {
    topText: "Returns",
    bottomText: "& Orders",
    // route: "return&orders"
  },
  {
    topText: "Your",
    bottomText: "Prime",
    // route: "prime"
  }
]

function Header() {
  const [indexHeaderAcount, setIndexHeaderAcount] = React.useState(0);
  let itemsInBasket = 0;
  useSelector(state => state?.dataAddedReducer?.dataAdded.map((data) => (data?.selected) && (itemsInBasket += data?.qty)));
  switch (indexHeaderAcount) {
    case 1:
      <Link to='/SignIn' />
      break;
    default:
      <Link to='#' />
  }
  return (
    <>
      <div className="header position-fixed w-100" style={{ zIndex: 10 }}>
        <Link to='/' >
          <img
            src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578"
            alt="error"
            className="amazonLogo"
          />
        </Link>
        <div className="nav_options">
          <span className="option_lineOne">Hello</span>
          <span className="option_lineTwo">Select your address</span>
        </div>
        <div className="header_search">
          <div className="AllDropDown" style={{ height: '40px' }}>
            <AllDropDown />
          </div>
          <div className="search h-100 w-100">
            <input type="text" placeholder="Search" className="w-100 h-100 border-0" />
          </div>
          <div className="searchIcon h-100" >
            <SearchIcon className="d-flex m-auto h-100" />
          </div>
        </div>
        <div className="header_nav">
          {
            headerAcountOrderPrime.map((data, index) => (
              <div className="nav_options" onClick={() => { setIndexHeaderAcount(index + 1) }} key={index}>
                <Link to={data.route} className="d-flex flex-column text-decoration-none">
                  <span className="option_lineOne">{data.topText}</span>
                  <span className="option_lineTwo">{data.bottomText}</span>
                </Link>
              </div>
            ))
          }
        </div>
        <Link to='cart' style={{ display: "flex", flexDirection: "row", color: 'white' }}>
          <ShoppingCartIcon style={{ marginTop: "auto" }} />
          <div className="nav_options">
            <span className="option_lineOne" style={{ color: "orange" }}>
              {itemsInBasket}
            </span>
            <span className="option_lineTwo">cart</span>
          </div>
        </Link>
      </div>
      <div className="position-relative" style={{ top: '60px', zIndex: 1 }}>
        <BodyHeader />
      </div>
      <style jsx>
        {
          `
          input{
            outline: none;
            padding: 10px;
          }
          @media (max-width: 768px) {
            .AllDropDown{
              display: none;
            }
          }
          @media (max-width: 640px) {
            .header_search{
              display: none;
            }
          }
          `
        }
      </style>
    </>
  );
}

// function mapStateToProps(state) {
//   return {
//     dataAdded: state.dataAddedReducer
//   };
// }
export default Header;
