import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartItem = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.cart = [...state.cart, action.payload] 
       },
    removeToCart: (state, action) => {
     const filteredData =   state.cart.filter(cart => cart.name !== action.payload.name)
      state.cart = filteredData
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProductToCart, removeToCart } = cartItem.actions

export default cartItem.reducer