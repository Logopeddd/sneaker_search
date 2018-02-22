import { ADD_CURRENT_PRODUCT } from '../actions';
import items from '../assets/items';

function getProductById(id) {
  return items.find(item => item.id === id);
}
function addCurrentProduct(product) {
  return {
    type: ADD_CURRENT_PRODUCT,
    product,
  };
}

export function loadCurrentProduct(id) {
  return dispatch => {
    // getProductById(id).then(product => {
    //   dispatch(addCurrentProduct(product));
    // });
    dispatch(addCurrentProduct(getProductById(id)));
  };
}
