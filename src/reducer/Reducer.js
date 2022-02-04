export const initialState = {
    cart: [],
}

export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item]
            };
        case "REMOVE_TO_CART":
            let newCart = [...state.cart];

            const index = state.cart.findIndex((cartItems) => cartItems.id === action.id);
            newCart.splice(index, 1);
            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                alert('Cant remove drink');
            }
            return { ...state, cart: newCart };
        default:
            return state;
    }
}

export default reducer;