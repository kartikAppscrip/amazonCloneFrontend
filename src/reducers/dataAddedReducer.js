import { ADDED_ITEM, INCREASED_ITEM } from "../actions/Body"
import { QTY_SELECT } from "../Body/CartProduct";

// (previousState, action) => newState
const initialState = {
  itemsInBasket: 0,
  dataAdded: []
}
const dataAddedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_ITEM:
      return {
        ...state,
        itemsInBasket: state.itemsInBasket + 1,
        dataAdded: [...state.dataAdded, { ...action.data, qty: 1 }]
      }
    case INCREASED_ITEM:
      const addedIndex = state.dataAdded?.findIndex(obj => obj.id === action.data.id);
      state.dataAdded.map((obj, index) => {
        if (index === addedIndex) {
          obj.qty = obj.qty + 1;
        }
      });
      return state;
    case QTY_SELECT:
      const qtySelectId = state.dataAdded?.findIndex(obj => obj.id === action.data.id);
      state.dataAdded.map((obj, index) => {
        if (index === qtySelectId) {
          obj.qty = action.qty;
        }
      });
      return state;
    default:
      return state;
  }
}

export default dataAddedReducer
