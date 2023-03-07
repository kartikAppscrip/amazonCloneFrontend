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
      const updateIState = { ...state };
      const addedIndex = updateIState.dataAdded?.findIndex(obj => obj.id === action.data.id);
      const newIData = updateIState.dataAdded.map((obj, index) => ({ ...obj, qty: index === addedIndex ? obj.qty + 1 : obj.qty })
      );
      return { ...updateIState, dataAdded: newIData };
    case QTY_SELECT:
      const updateState = { ...state };
      const qtySelectId = updateState.dataAdded?.findIndex(obj => obj.id === action.data.id);
      const newdata = updateState.dataAdded.map((obj, index) => ({ ...obj, qty: index === qtySelectId ? action.qty : obj.qty })
      );
      return { ...updateState, dataAdded: newdata };
    default:
      return state;
  }
}

export default dataAddedReducer
