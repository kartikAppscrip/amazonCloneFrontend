import React from "react";
import StarRateIcon from '@mui/icons-material/StarRate';
import Currency from "react-currency-formatter";
import { Checkbox } from "@mui/material";
import QtySelectMui from "./QtySelectMui";
import { useDispatch } from "react-redux";

export const QTY_SELECT = 'QTY_SELECT';
export const CHECK_SELECT = 'CHECK_SELECT';

const qtyCrossPrice = (qty, price) => qty * price;

function CartProduct(props) {
    const dispatch = useDispatch();
    const { data } = props;
    const [qty, setQty] = React.useState(data.qty || 1);
    const [checkSelect, setCheckSelect] = React.useState(data.selected);
    const handleChange = (event) => {
        setQty(event.target.value);
        dispatch({ type: QTY_SELECT, data, qty: event.target.value });
    };
    const paritcularDataSelectFunction = () => {
        setCheckSelect(!checkSelect);
        const payload = {
            selected: !checkSelect,
            id: data.id
        };
        dispatch({ type: CHECK_SELECT, payload });
    }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return <div className={`product d-flex justify-content-between ${!checkSelect && 'disable_UI'}`}>
        <div className="d-flex">
            <div className="mt-auto mb-auto" style={{ pointerEvents: 'all' }}>
                <Checkbox {...label} checked={checkSelect} className="h-25" onChange={paritcularDataSelectFunction} />
            </div>
            <div className="" style={{ minWidth: '210px' }}>
                <div className="d-flex align-items-center p-3">
                    <img src={data.image} className="productImg" alt="product" />
                </div>
            </div>
            <div className="productInfo p-3">
                <h4 className="m-0">{data.title}</h4>
                <h6 className="font-weight-light ml-auto pr-2 pt-1 mb-1">
                    {data.category}
                </h6>
                <h6 className="font-weight-light ml-auto pr-2 pt-1 mb-1">
                    In stock
                </h6>
                <p className="productRating d-flex mb-2" style={{ color: "#fda21c" }}>
                    {[...Array(Math.round(data.rating.rate))].map((_, i) => <StarRateIcon fontSize="small" />)}
                    <span class="a-size-small a-color-tertiary d-flex align-items-center">{data.rating.count}</span>
                </p>
                <div className="d-flex align-items-center qtySelectDiv">
                    <label className="m-0 p-0 qtyLabel">Qty: </label>
                    <QtySelectMui qty={qty} handleChange={handleChange} />
                </div>
            </div>
        </div>
        <div>
            <h4 className="pt-3 m-0">
                <Currency quantity={qtyCrossPrice(qty, data.price)} />
            </h4>
        </div>
        <style jsx>
            {`
            .qtySelectDiv .MuiBox-root {
                position: relative;
                right: 30px;
                min-width: 80px !important;
            }
            .qtySelectDiv > div > div > div > div {
                padding: 5px 5px 5px 50px;
            }
            .qtyLabel {
                position: relative;
                left: 10px;
                font-size: 1rem;
                position: relative;
                z-index: 10;
            }
            .product {
                background-color: #fff;
                height: 230px;
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
            `}
        </style>
    </div>;
}

export default CartProduct;
