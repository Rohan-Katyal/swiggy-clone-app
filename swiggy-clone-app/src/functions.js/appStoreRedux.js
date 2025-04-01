import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';

// Configuring ( Creating ) the Redux Store
const appStore = configureStore({
    reducer : {
        cart : cartReducer
    }
});



export default appStore;