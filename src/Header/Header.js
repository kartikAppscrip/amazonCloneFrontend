import React, { useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BodyHeader from "../Body/BodyHeader";
import AllDropDown from "./AllDropDown";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Popovers from "../Popover";

function Header() {
  const navigate = useNavigate();
  const [indexHeaderAcount, setIndexHeaderAcount] = React.useState(0);
  let itemsInBasket = 0;
  useSelector(state => state?.dataAddedReducer?.dataAdded.map((data) => (data?.selected) && (itemsInBasket += data?.qty)));

  useEffect(() => {
    switch (indexHeaderAcount) {
      case 1:
        navigate('/signin');
        break;
      default:
        navigate('/');
    }
  }, [indexHeaderAcount]);

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
          <div className="nav_options cursor" onClick={() => setIndexHeaderAcount(1)}>
            <Popovers
              title=""
              trigger="hover"
              placement="bottom"
              content={<div className="p-2 position-relative" style={{ minWidth: '170px' }}>
                <button
                  style={{ height: 30 }}
                  className="w-100 rounded border-0 buttonAddToCart"
                  onClick={() => navigate('/signin')}
                >
                  Sign in
                </button>
                <p className="heading m-0 mt-2" style={{ fontWeight: 'unset' }} onClick={() => navigate('/register')}>
                  New customer?
                  <a href="localhost:3000"> Start here.</a>
                </p>
              </div>}
            >
              <div className="d-flex flex-column text-decoration-none" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
                sagittis lacus vel augue laoreet rutrum faucibus.">
                <span className="option_lineOne">Hello Guest,sign in</span>
                <span className="option_lineTwo">Account & Lists</span>
              </div>
            </Popovers>
          </div>
          <div className="nav_options cursor" onClick={() => setIndexHeaderAcount(2)}>
            <div className="d-flex flex-column text-decoration-none">
              <span className="option_lineOne">Returns</span>
              <span className="option_lineTwo">& Orders</span>
            </div>
          </div>
          <div className="nav_options cursor" onClick={() => setIndexHeaderAcount(3)}>
            <div className="d-flex flex-column text-decoration-none">
              <span className="option_lineOne">Your</span>
              <span className="option_lineTwo">Prime</span>
            </div>
          </div>
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
