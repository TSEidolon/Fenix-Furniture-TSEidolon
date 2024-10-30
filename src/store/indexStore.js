import {configureStore} from "@reduxjs/toolkit"
import cartReducer from './cart'


//change to index.js depending on outcome
export const store = configureStore ({
  reducer: {
    cart: cartReducer,
  }
})