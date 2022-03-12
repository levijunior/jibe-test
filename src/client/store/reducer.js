export default (state, action) => {
  const {
    type, user, cart, sortUp,
  } = action;

  switch (type) {
    case 'SET_USER':
      return {
        ...state,
        user,
      };
    case 'UPDATE_CART':
      return {
        ...state,
        cart: [
          ...state.cart,
          ...cart,
        ],
      };
    case 'SET_SORT':
      return {
        ...state,
        sortUp,
      };
    default:
      return state;
  }
};
