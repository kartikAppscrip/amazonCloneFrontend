import React from "react";
import { Link } from "react-router-dom"; //won't refresh the page but anchor tag will
import MenuIcon from '@mui/icons-material/Menu';

function BodyHeader() {
  return (<div>
    <div className="BodyMain">
      <Link to='/all' className="routeTagsBodyMain d-flex">
        <MenuIcon className="mt-auto mb-auto"/>
        <span>All</span>
      </Link>
      <Link to='/Sell' className="routeTagsBodyMain">Sell</Link>
      <Link to='/bestSellers' className="routeTagsBodyMain">Best Sellers</Link>
    </div>
  </div>);
}

export default BodyHeader;
