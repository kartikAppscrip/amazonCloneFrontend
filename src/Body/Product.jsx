import React from "react";
import StarRateIcon from '@mui/icons-material/StarRate';
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../actions/Body";

// const restrictLengthOfDesc = (oldDesc) => {
//     const newDesc = oldDesc.substring(0, 150);
//     return newDesc === oldDesc ? oldDesc : `${newDesc}...`;
// }
const addClicked = (reduxData, data, dispatch) => {
    const check = reduxData?.filter(dataRedux => dataRedux.id === data.id);
    addToBasket(data, dispatch, check);
}

function Product(props) {
    const reduxData = useSelector(state => state.dataAddedReducer.dataAdded);
    const dispatch = useDispatch();
    const { data } = props;
    return <div className="product d-flex flex-column justify-content-between">
        <p className="font-italic font-weight-light ml-auto pr-2 pt-1 mb-1" style={{ fontSize: '12px' }}>
            {data.category}
        </p>
        <div>
            <img src={data.image} className="productImg" alt="product" />
        </div>
        <div className="productInfo pl-2 pr-2">
            <p className="productTitle bold font-weight-bold">{data.title}</p>
            <p className="productPrice">
                <strong>
                    <Currency quantity={data.price} />
                </strong>
            </p>
            <p className="productRating d-flex" style={{ color: "#fda21c" }}>
                {[...Array(Math.round(data.rating.rate))].map((_, i) => <StarRateIcon fontSize="small" />)}
                <span className="a-size-small a-color-tertiary d-flex align-items-center">{data.rating.count}</span>
            </p>
        </div>
        <p className="p-2 h-auto line-clamp h-100" style={{ fontSize: '13px' }}>
            {data?.description}
        </p>
        <button
            className="ml-4 mr-4 mb-3 mt-2 p-2 rounded border-0 buttonAddToCart"
            onClick={() => addClicked(reduxData, data, dispatch)}
        >
            Add To Basket
        </button>

        <style jsx>
            {`
            .product {
                background-color: #fff;
                height: 430px;
                max-width: 400px;
            }
            .product p{
                margin: 0;
                padding: 0;
            }
            .productImg{
                max-height: 180px;
                max-width: 180px;
                display: flex;
                margin-left: auto;
                margin-right: auto;
            }
            .a-color-secondary, .a-color-tertiary {
                color: #565959!important;
            }
            .a-size-small {
                font-size: 12px!important;
                line-height: 16px!important;
            }
            .buttonAddToCart{
                background-color: #FFD814;
            }
            .buttonAddToCart:hover{
                background-color: #e8c61e;
            }
            .line-clamp {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;  
                overflow: hidden;
              }
            `}
        </style>
    </div>;
}

export default Product;
