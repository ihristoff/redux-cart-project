import { createSlice } from "@reduxjs/toolkit";

import cartItems from '../../cartItems'

const initialState = {
    cartItems : cartItems,
    amount: 3,
    total: 3,
    isLoading: true,
}

const cartSlice = createSlice({
    name:'Cart',
    initialState
})

// console.log(cartSlice);

export default cartSlice.reducer
