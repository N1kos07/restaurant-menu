

function cartReducer(state, action) {

  switch (action.type) {

    case 'ADD_ITEM':

      return [...state, action.item];

    case 'REMOVE_ITEM':

      return state.filter(item => item.id !== action.id)

    case 'CLEAR_CART':

      return []

    default:

      return state

  }

}


export default cartReducer;