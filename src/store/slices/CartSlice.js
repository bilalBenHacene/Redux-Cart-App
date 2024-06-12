import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    initialState: [],
    name: 'cartSlice',
    reducers: {
        addToCart: (state, action) => {
            const productFound = state.find((product) => product.id == action.payload.id);

            (productFound) ? productFound.Qty += 1 : state.push({ ...action.payload, Qty: 1 });
        },
        deleteFromCart: (state, action) => {
            return state.filter((product) => product.id != action.payload)
        },
        clearCart: (state, action) => {
            return []
        },
    },
    extraReducers: (builder) => { }
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;