import { ADDED_ITEM } from "../actions/Body"

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
        dataAdded: [...state.dataAdded, action.data]
      }
    default:
      return state
  }
}

export default dataAddedReducer
