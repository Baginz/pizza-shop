import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalPrice: 0,
        totalCount: 0,
    },
    reducers: {
        addToCart(state, action) {
            state.items.push(action.payload);
            state.totalPrice = state.totalPrice + action.payload.price;
        },
        deleteFromCart(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload);
            state.totalPrice = state.totalPrice - action.payload.price;
        },
        clearCart(state, action) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
