
export const ADDED_ITEM = 'ADDED_ITEM';
export const INCREASED_ITEM = 'INCREASED_ITEM';

export const addToBasket = (dataAdded, dispatch, check) => {
    if (check?.length !== 0) {
        dispatch({ type: INCREASED_ITEM, data: dataAdded })
    } else {
        dispatch({ type: ADDED_ITEM, data: dataAdded })
    }
}