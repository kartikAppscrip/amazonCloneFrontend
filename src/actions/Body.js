
export const ADDED_ITEM = 'ADDED_ITEM';

export const addToBasket = (dataAdded, dispatch) => {
    dispatch({ type: ADDED_ITEM, data: dataAdded })
    // return {
    //   type: BUY_CAKE,
    //   data: dataAdded
    // }
}