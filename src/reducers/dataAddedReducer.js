import { ADDED_ITEM, INCREASED_ITEM } from "../actions/Body"
import { ALL_DATA } from "../Body/Body";
import { CHECK_SELECT, QTY_SELECT } from "../Body/CartProduct";

// (previousState, action) => newState
const initialState = {
  dataAdded: []
}
const dataAddedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DATA:
      return {
        ...state,
        allData: action.data
      }
    case ADDED_ITEM:
      return {
        ...state,
        dataAdded: [...state.dataAdded, { ...action.data, qty: 1, selected: true }]
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

    case CHECK_SELECT:
      const checkState = { ...state };
      const checkSelectId = checkState.dataAdded?.findIndex(obj => obj.id === action.payload.id);
      const addSelectedKeyInData = checkState.dataAdded.map((obj, index) => ({ ...obj, selected: index === checkSelectId ? action.payload.selected : obj.selected })
      );
      return { ...checkState, dataAdded: addSelectedKeyInData };

    default:
      return state;
  }
}

export default dataAddedReducer
