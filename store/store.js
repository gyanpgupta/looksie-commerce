import { configureStore } from '@reduxjs/toolkit'
import cartItem from '../store/feature/reducer'

export const store = configureStore({
  reducer: {cartItem},
})